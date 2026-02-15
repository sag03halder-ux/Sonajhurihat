const { Client, Functions, ID } = require('node-appwrite');
const { InputFile } = require('node-appwrite/file');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config();

// Init SDK
const client = new Client();

const endpoint = process.env.APPWRITE_ENDPOINT;
const project = process.env.APPWRITE_PROJECT;
const key = process.env.APPWRITE_API_KEY;

if (!endpoint || !project || !key) {
    console.error('Error: Missing APPWRITE_ENDPOINT, APPWRITE_PROJECT, or APPWRITE_API_KEY in .env');
    process.exit(1);
}

client
    .setEndpoint(endpoint)
    .setProject(project)
    .setKey(key);

const functions = new Functions(client);

const FUNCTIONS_DIR = path.join(__dirname, '../functions');
const SHARED_DIR = path.join(FUNCTIONS_DIR, '_shared');
const BUILD_DIR = path.join(__dirname, '../build');

// Helper to sanitize function name for safe path usage
const sanitizeName = (name) => name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

async function deployFunction(funcName, funcPath) {
    console.log(`\nDeploying ${funcName}...`);

    // Check if function exists remotely
    let functionId;
    try {
        const list = await functions.list();
        const existing = list.functions.find(f => f.name === funcName);
        if (existing) {
            functionId = existing.$id;
            console.log(`Function ${funcName} exists (ID: ${functionId}). Updating...`);
        } else {
            console.log(`Creating function ${funcName}...`);
            const created = await functions.create(
                ID.unique(),
                funcName,
                'node-22'
            );
            functionId = created.$id;
            console.log(`Created function ${funcName} (ID: ${functionId}).`);
        }
    } catch (error) {
        console.error(`Error checking/creating function ${funcName}:`, error.message);
        return;
    }

    // Build
    const buildPath = path.join(BUILD_DIR, funcName);
    if (fs.existsSync(buildPath)) {
        fs.rmSync(buildPath, { recursive: true, force: true });
    }
    fs.mkdirSync(buildPath, { recursive: true });

    // Copy function code
    fs.copyFileSync(path.join(funcPath, 'index.js'), path.join(buildPath, 'index.js'));

    // Copy package.json if exists, else copy root package.json
    const funcPackageJson = path.join(funcPath, 'package.json');
    const rootFunctionsPackageJson = path.join(FUNCTIONS_DIR, 'package.json');
    if (fs.existsSync(funcPackageJson)) {
        fs.copyFileSync(funcPackageJson, path.join(buildPath, 'package.json'));
    } else if (fs.existsSync(rootFunctionsPackageJson)) {
        fs.copyFileSync(rootFunctionsPackageJson, path.join(buildPath, 'package.json'));
    }

    // Copy _shared
    if (fs.existsSync(SHARED_DIR)) {
        const buildSharedPath = path.join(buildPath, '_shared');
        fs.mkdirSync(buildSharedPath, { recursive: true });
        // Recursive copy
        fs.cpSync(SHARED_DIR, buildSharedPath, { recursive: true });
    }

    // Install dependencies to ensure lockfile is generated/updated if needed, 
    // or just to verify. deployment usually handles npm install if package.json is present.
    // However, Appwrite build process runs `npm install`. We just need to ship package.json.
    // If we rely on Appwrite build, we don't need `node_modules` in the tarball.

    // Create tarball
    const tarballPath = path.join(BUILD_DIR, `${funcName}.tar.gz`);
    try {
        // Use tar to create archive. 
        // Windows 10+ has tar. 
        // tar -czf target.tar.gz -C source .
        execSync(`tar -czf "${tarballPath}" -C "${buildPath}" .`);
    } catch (error) {
        console.error(`Error zipping ${funcName}:`, error.message);
        return;
    }

    // Create deployment
    try {
        if (!fs.existsSync(tarballPath)) {
            throw new Error("Tarball creation failed");
        }

        // node-appwrite expects a File object or ReadStream for input file
        // For node environment, we can pass InputFile.fromPath
        const file = InputFile.fromPath(tarballPath, `${funcName}.tar.gz`);

        const deployment = await functions.createDeployment(
            functionId,
            file,
            true, // activate
            'index.js', // entrypoint
            'npm install' // build commands
        );
        console.log(`Deployment created and activated for ${funcName} (ID: ${deployment.$id})`);
    } catch (error) {
        console.error(`Error deploying ${funcName}:`, error);
        if (error.response) {
            console.error('Response:', error.response);
        }
    }
}

async function main() {
    if (!fs.existsSync(BUILD_DIR)) {
        fs.mkdirSync(BUILD_DIR);
    }

    const entries = fs.readdirSync(FUNCTIONS_DIR, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.isDirectory()) {
            const funcName = entry.name;
            if (funcName === '_shared' || funcName === 'node_modules') continue;

            const funcPath = path.join(FUNCTIONS_DIR, funcName);
            const indexFile = path.join(funcPath, 'index.js');

            if (fs.existsSync(indexFile)) {
                await deployFunction(funcName, funcPath);
            }
        }
    }

    console.log('\nDeployment process completed.');
}

main();
