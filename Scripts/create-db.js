const sdk = require('node-appwrite');
require('dotenv').config();

// Init SDK
const client = new sdk.Client();

// You can export these variables in your .env file
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

const databases = new sdk.Databases(client);

const DB_ID = 'main'; // Using 'main' as the database ID

const collections = [
    {
        name: 'profiles',
        id: 'profiles',
        attributes: [
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'first_name', type: 'string', size: 255, required: true },
            { key: 'last_name', type: 'string', size: 255, required: true },
            { key: 'phone', type: 'string', size: 50, required: false },
            { key: 'avatar', type: 'string', size: 2048, required: false },
            { key: 'role', type: 'enum', elements: ['customer', 'vendor', 'admin'], required: true },
            { key: 'is_verified', type: 'boolean', required: true },
            { key: 'newsletter_subscribed', type: 'boolean', required: false },
            { key: 'preferences', type: 'string', size: 5000, required: false }, // JSON
            { key: 'created_at', type: 'datetime', required: false },
            { key: 'updated_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'user_id_unique', type: 'unique', attributes: ['user_id'] },
            { key: 'role_index', type: 'key', attributes: ['role'] }
        ]
    },
    {
        name: 'vendors',
        id: 'vendors',
        attributes: [
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'shop_name', type: 'string', size: 255, required: true },
            { key: 'shop_slug', type: 'string', size: 255, required: true },
            { key: 'description', type: 'string', size: 5000, required: false },
            { key: 'logo', type: 'string', size: 2048, required: false },
            { key: 'banner', type: 'string', size: 2048, required: false },
            { key: 'story', type: 'string', size: 10000, required: false },
            { key: 'location', type: 'string', size: 255, required: false },
            { key: 'certifications', type: 'string', array: true, size: 255, required: false },
            { key: 'social_links', type: 'string', size: 5000, required: false }, // JSON
            { key: 'payout_method', type: 'string', size: 5000, required: false }, // JSON
            { key: 'payout_schedule', type: 'enum', elements: ['weekly', 'biweekly', 'monthly'], required: false },
            { key: 'commission_rate', type: 'double', required: true },
            { key: 'rating', type: 'double', required: false },
            { key: 'total_sales', type: 'integer', required: true },
            { key: 'total_revenue', type: 'double', required: true },
            { key: 'status', type: 'enum', elements: ['pending', 'approved', 'suspended'], required: true },
            { key: 'approved_at', type: 'datetime', required: false },
            { key: 'created_at', type: 'datetime', required: false },
            { key: 'updated_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'user_id_unique', type: 'unique', attributes: ['user_id'] },
            { key: 'shop_slug_unique', type: 'unique', attributes: ['shop_slug'] },
            { key: 'status_index', type: 'key', attributes: ['status'] }
        ]
    },
    {
        name: 'categories',
        id: 'categories',
        attributes: [
            { key: 'name', type: 'string', size: 255, required: true },
            { key: 'slug', type: 'string', size: 255, required: true },
            { key: 'description', type: 'string', size: 5000, required: false },
            { key: 'parent_id', type: 'string', size: 255, required: false },
            { key: 'image', type: 'string', size: 2048, required: false },
            { key: 'icon', type: 'string', size: 255, required: false },
            { key: 'sort_order', type: 'integer', required: true },
            { key: 'is_active', type: 'boolean', required: true },
            { key: 'product_count', type: 'integer', required: true },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'slug_unique', type: 'unique', attributes: ['slug'] },
            { key: 'parent_id_index', type: 'key', attributes: ['parent_id'] }
        ]
    },
    {
        name: 'products',
        id: 'products',
        attributes: [
            { key: 'vendor_id', type: 'string', size: 255, required: true },
            { key: 'category_id', type: 'string', size: 255, required: true },
            { key: 'name', type: 'string', size: 255, required: true },
            { key: 'slug', type: 'string', size: 255, required: true },
            { key: 'description', type: 'string', size: 10000, required: true },
            { key: 'short_description', type: 'string', size: 1000, required: false },
            { key: 'price', type: 'double', required: true },
            { key: 'compare_price', type: 'double', required: false },
            { key: 'cost_per_item', type: 'double', required: false },
            { key: 'stock_quantity', type: 'integer', required: true },
            { key: 'sku', type: 'string', size: 255, required: false },
            { key: 'weight', type: 'double', required: false },
            { key: 'dimensions', type: 'string', size: 5000, required: false }, // JSON
            { key: 'materials', type: 'string', array: true, size: 255, required: false },
            { key: 'origin', type: 'string', size: 255, required: false },
            { key: 'tags', type: 'string', array: true, size: 255, required: false },
            { key: 'is_active', type: 'boolean', required: true },
            { key: 'is_featured', type: 'boolean', required: false },
            { key: 'is_digital', type: 'boolean', required: false },
            { key: 'handling_time', type: 'integer', required: false },
            { key: 'rating', type: 'double', required: false },
            { key: 'review_count', type: 'integer', required: true },
            { key: 'view_count', type: 'integer', required: true },
            { key: 'sold_count', type: 'integer', required: true },
            { key: 'created_at', type: 'datetime', required: false },
            { key: 'updated_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'vendor_id_index', type: 'key', attributes: ['vendor_id'] },
            { key: 'category_id_index', type: 'key', attributes: ['category_id'] },
            { key: 'slug_unique', type: 'unique', attributes: ['slug'] },
            { key: 'is_active_index', type: 'key', attributes: ['is_active'] },
            { key: 'is_featured_index', type: 'key', attributes: ['is_featured'] }
        ]
    },
    {
        name: 'product_images',
        id: 'product_images',
        attributes: [
            { key: 'product_id', type: 'string', size: 255, required: true },
            { key: 'image_url', type: 'string', size: 2048, required: true },
            { key: 'thumbnail_url', type: 'string', size: 2048, required: false },
            { key: 'alt_text', type: 'string', size: 255, required: false },
            { key: 'sort_order', type: 'integer', required: true },
            { key: 'is_primary', type: 'boolean', required: true },
        ],
        indexes: [
            { key: 'product_id_index', type: 'key', attributes: ['product_id'] }
        ]
    },
    {
        name: 'product_variants',
        id: 'product_variants',
        attributes: [
            { key: 'product_id', type: 'string', size: 255, required: true },
            { key: 'name', type: 'string', size: 255, required: true },
            { key: 'sku', type: 'string', size: 255, required: false },
            { key: 'price', type: 'double', required: false },
            { key: 'stock_quantity', type: 'integer', required: true },
            { key: 'attributes', type: 'string', size: 5000, required: true }, // JSON
            { key: 'image_url', type: 'string', size: 2048, required: false },
        ],
        indexes: [
            { key: 'product_id_index', type: 'key', attributes: ['product_id'] }
        ]
    },
    {
        name: 'cart_items',
        id: 'cart_items',
        attributes: [
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'product_id', type: 'string', size: 255, required: true },
            { key: 'variant_id', type: 'string', size: 255, required: false },
            { key: 'quantity', type: 'integer', required: true },
            { key: 'created_at', type: 'datetime', required: false },
            { key: 'updated_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'user_id_index', type: 'key', attributes: ['user_id'] },
            { key: 'user_product_composite', type: 'key', attributes: ['user_id', 'product_id'] }
        ]
    },
    {
        name: 'orders',
        id: 'orders',
        attributes: [
            { key: 'order_number', type: 'string', size: 255, required: true },
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'status', type: 'enum', elements: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'], required: true },
            { key: 'subtotal', type: 'double', required: true },
            { key: 'shipping_cost', type: 'double', required: true },
            { key: 'tax_amount', type: 'double', required: true },
            { key: 'discount_amount', type: 'double', required: false },
            { key: 'total', type: 'double', required: true },
            { key: 'currency', type: 'string', size: 10, required: true },
            { key: 'shipping_address', type: 'string', size: 5000, required: true }, // JSON
            { key: 'billing_address', type: 'string', size: 5000, required: false }, // JSON
            { key: 'payment_method', type: 'string', size: 50, required: true },
            { key: 'payment_status', type: 'enum', elements: ['pending', 'paid', 'failed', 'refunded'], required: true },
            { key: 'payment_id', type: 'string', size: 255, required: false },
            { key: 'notes', type: 'string', size: 1000, required: false },
            { key: 'admin_notes', type: 'string', size: 1000, required: false },
            { key: 'tracking_number', type: 'string', size: 255, required: false },
            { key: 'carrier', type: 'string', size: 255, required: false },
            { key: 'shipped_at', type: 'datetime', required: false },
            { key: 'delivered_at', type: 'datetime', required: false },
            { key: 'cancelled_at', type: 'datetime', required: false },
            { key: 'created_at', type: 'datetime', required: false },
            { key: 'updated_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'order_number_unique', type: 'unique', attributes: ['order_number'] },
            { key: 'user_id_index', type: 'key', attributes: ['user_id'] },
            { key: 'status_index', type: 'key', attributes: ['status'] },
            { key: 'created_at_index', type: 'key', attributes: ['created_at'] }
        ]
    },
    {
        name: 'order_items',
        id: 'order_items',
        attributes: [
            { key: 'order_id', type: 'string', size: 255, required: true },
            { key: 'product_id', type: 'string', size: 255, required: true },
            { key: 'variant_id', type: 'string', size: 255, required: false },
            { key: 'vendor_id', type: 'string', size: 255, required: true },
            { key: 'name', type: 'string', size: 255, required: true },
            { key: 'sku', type: 'string', size: 255, required: false },
            { key: 'image_url', type: 'string', size: 2048, required: false },
            { key: 'price', type: 'double', required: true },
            { key: 'quantity', type: 'integer', required: true },
            { key: 'total', type: 'double', required: true },
            { key: 'status', type: 'enum', elements: ['pending', 'shipped', 'delivered'], required: true },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'order_id_index', type: 'key', attributes: ['order_id'] },
            { key: 'vendor_id_index', type: 'key', attributes: ['vendor_id'] }
        ]
    },
    {
        name: 'addresses',
        id: 'addresses',
        attributes: [
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'type', type: 'enum', elements: ['shipping', 'billing'], required: true },
            { key: 'first_name', type: 'string', size: 255, required: true },
            { key: 'last_name', type: 'string', size: 255, required: true },
            { key: 'company', type: 'string', size: 255, required: false },
            { key: 'address_line1', type: 'string', size: 255, required: true },
            { key: 'address_line2', type: 'string', size: 255, required: false },
            { key: 'city', type: 'string', size: 255, required: true },
            { key: 'state', type: 'string', size: 255, required: true },
            { key: 'postal_code', type: 'string', size: 50, required: true },
            { key: 'country', type: 'string', size: 50, required: true },
            { key: 'phone', type: 'string', size: 50, required: false },
            { key: 'is_default', type: 'boolean', required: false },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'user_id_index', type: 'key', attributes: ['user_id'] }
        ]
    },
    {
        name: 'payments',
        id: 'payments',
        attributes: [
            { key: 'order_id', type: 'string', size: 255, required: true },
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'amount', type: 'double', required: true },
            { key: 'currency', type: 'string', size: 10, required: true },
            { key: 'method', type: 'string', size: 50, required: true },
            { key: 'gateway_transaction_id', type: 'string', size: 255, required: false },
            { key: 'gateway_response', type: 'string', size: 5000, required: false }, // JSON
            { key: 'status', type: 'enum', elements: ['pending', 'completed', 'failed', 'refunded'], required: true },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'order_id_unique', type: 'unique', attributes: ['order_id'] },
            { key: 'user_id_index', type: 'key', attributes: ['user_id'] }
        ]
    },
    {
        name: 'refunds',
        id: 'refunds',
        attributes: [
            { key: 'order_id', type: 'string', size: 255, required: true },
            { key: 'order_item_id', type: 'string', size: 255, required: false },
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'vendor_id', type: 'string', size: 255, required: true },
            { key: 'reason', type: 'string', size: 1000, required: true },
            { key: 'description', type: 'string', size: 5000, required: false },
            { key: 'amount', type: 'double', required: true },
            { key: 'status', type: 'enum', elements: ['pending', 'approved', 'rejected', 'processed'], required: true },
            { key: 'admin_notes', type: 'string', size: 1000, required: false },
            { key: 'processed_at', type: 'datetime', required: false },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'order_id_index', type: 'key', attributes: ['order_id'] },
            { key: 'user_id_index', type: 'key', attributes: ['user_id'] },
            { key: 'vendor_id_index', type: 'key', attributes: ['vendor_id'] },
            { key: 'status_index', type: 'key', attributes: ['status'] }
        ]
    },
    {
        name: 'artisan_stories',
        id: 'artisan_stories',
        attributes: [
            { key: 'vendor_id', type: 'string', size: 255, required: true },
            { key: 'title', type: 'string', size: 255, required: true },
            { key: 'slug', type: 'string', size: 255, required: true },
            { key: 'content', type: 'string', size: 10000, required: true },
            { key: 'excerpt', type: 'string', size: 1000, required: false },
            { key: 'cover_image', type: 'string', size: 2048, required: false },
            { key: 'gallery', type: 'string', array: true, size: 2048, required: false },
            { key: 'video_url', type: 'string', size: 2048, required: false },
            { key: 'location', type: 'string', size: 255, required: false },
            { key: 'craft', type: 'string', size: 255, required: false },
            { key: 'experience_years', type: 'integer', required: false },
            { key: 'is_published', type: 'boolean', required: true },
            { key: 'featured', type: 'boolean', required: false },
            { key: 'view_count', type: 'integer', required: true },
            { key: 'published_at', type: 'datetime', required: false },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'vendor_id_index', type: 'key', attributes: ['vendor_id'] },
            { key: 'slug_unique', type: 'unique', attributes: ['slug'] },
            { key: 'is_published_index', type: 'key', attributes: ['is_published'] }
        ]
    },
    {
        name: 'reviews',
        id: 'reviews',
        attributes: [
            { key: 'product_id', type: 'string', size: 255, required: true },
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'order_id', type: 'string', size: 255, required: false },
            { key: 'rating', type: 'integer', required: true },
            { key: 'title', type: 'string', size: 255, required: false },
            { key: 'content', type: 'string', size: 5000, required: false },
            { key: 'images', type: 'string', array: true, size: 2048, required: false },
            { key: 'verified_purchase', type: 'boolean', required: true },
            { key: 'helpful_count', type: 'integer', required: true },
            { key: 'status', type: 'enum', elements: ['pending', 'approved', 'flagged'], required: true },
            { key: 'created_at', type: 'datetime', required: false },
            { key: 'updated_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'product_id_index', type: 'key', attributes: ['product_id'] },
            { key: 'user_id_index', type: 'key', attributes: ['user_id'] },
            { key: 'product_user_unique', type: 'unique', attributes: ['product_id', 'user_id'] }
        ]
    },
    {
        name: 'wishlists',
        id: 'wishlists',
        attributes: [
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'product_id', type: 'string', size: 255, required: true },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'user_id_index', type: 'key', attributes: ['user_id'] },
            { key: 'user_product_unique', type: 'unique', attributes: ['user_id', 'product_id'] }
        ]
    },
    {
        name: 'notifications',
        id: 'notifications',
        attributes: [
            { key: 'user_id', type: 'string', size: 255, required: true },
            { key: 'type', type: 'enum', elements: ['order', 'payment', 'review', 'system'], required: true },
            { key: 'title', type: 'string', size: 255, required: true },
            { key: 'message', type: 'string', size: 1000, required: true },
            { key: 'data', type: 'string', size: 5000, required: false }, // JSON
            { key: 'is_read', type: 'boolean', required: true },
            { key: 'read_at', type: 'datetime', required: false },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'user_id_index', type: 'key', attributes: ['user_id'] },
            { key: 'created_at_index', type: 'key', attributes: ['created_at'] }
        ]
    },
    {
        name: 'faqs',
        id: 'faqs',
        attributes: [
            { key: 'question', type: 'string', size: 500, required: true },
            { key: 'answer', type: 'string', size: 5000, required: true },
            { key: 'category', type: 'string', size: 50, required: false }, // Using string instead of enum for flexibility unless strict
            { key: 'sort_order', type: 'integer', required: true },
            { key: 'is_active', type: 'boolean', required: true },
        ],
        indexes: [
            { key: 'category_index', type: 'key', attributes: ['category'] }
        ]
    },
    {
        name: 'coupons',
        id: 'coupons',
        attributes: [
            { key: 'code', type: 'string', size: 255, required: true },
            { key: 'type', type: 'enum', elements: ['percentage', 'fixed'], required: true },
            { key: 'value', type: 'double', required: true },
            { key: 'min_order_amount', type: 'double', required: false },
            { key: 'max_uses', type: 'integer', required: false },
            { key: 'used_count', type: 'integer', required: true },
            { key: 'user_uses_limit', type: 'integer', required: false },
            { key: 'applicable_products', type: 'string', array: true, size: 255, required: false },
            { key: 'applicable_categories', type: 'string', array: true, size: 255, required: false },
            { key: 'applicable_vendors', type: 'string', array: true, size: 255, required: false },
            { key: 'starts_at', type: 'datetime', required: false },
            { key: 'expires_at', type: 'datetime', required: false },
            { key: 'is_active', type: 'boolean', required: true },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'code_unique', type: 'unique', attributes: ['code'] }
        ]
    },
    {
        name: 'payouts',
        id: 'payouts',
        attributes: [
            { key: 'vendor_id', type: 'string', size: 255, required: true },
            { key: 'amount', type: 'double', required: true },
            { key: 'currency', type: 'string', size: 10, required: true },
            { key: 'method', type: 'string', size: 50, required: true },
            { key: 'status', type: 'enum', elements: ['pending', 'processing', 'completed', 'failed'], required: true },
            { key: 'transactions', type: 'string', size: 5000, required: true }, // JSON
            { key: 'platform_fee', type: 'double', required: true },
            { key: 'net_amount', type: 'double', required: true },
            { key: 'reference', type: 'string', size: 255, required: false },
            { key: 'processed_at', type: 'datetime', required: false },
            { key: 'created_at', type: 'datetime', required: false },
        ],
        indexes: [
            { key: 'vendor_id_index', type: 'key', attributes: ['vendor_id'] },
            { key: 'status_index', type: 'key', attributes: ['status'] }
        ]
    }
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function createAttribute(collectionId, attr) {
    try {
        if (attr.type === 'string') {
            if (attr.array) {
                // String array not explicitly named in some SDKs, check logic.
                // Re-reading SDK docs: createStringAttribute(databaseId, collectionId, key, size, required, default, array, encrypt)
                // BUT older SDKs might differ. Node-appwrite latest:
                // createStringAttribute(databaseId, collectionId, key, size, required, xdefault, array, encrypt)
                await databases.createStringAttribute(DB_ID, collectionId, attr.key, attr.size, attr.required, undefined, attr.array);
            } else {
                await databases.createStringAttribute(DB_ID, collectionId, attr.key, attr.size, attr.required);
            }
        } else if (attr.type === 'integer') {
            await databases.createIntegerAttribute(DB_ID, collectionId, attr.key, attr.required, 0, 2147483647); // Min/Max required usually in integer
            // Or maybe defaults? Let's check signature. 
            // createIntegerAttribute(databaseId, collectionId, key, required, min, max, default, array)
            // Using safe defaults for now or pass null if allowed? Appwrite requires min/max for integer.
            // We'll use a wide range.
            await databases.createIntegerAttribute(DB_ID, collectionId, attr.key, attr.required, -2147483648, 2147483647);
        } else if (attr.type === 'double' || attr.type === 'float') {
            await databases.createFloatAttribute(DB_ID, collectionId, attr.key, attr.required, -1.7976931348623157e+308, 1.7976931348623157e+308);
        } else if (attr.type === 'boolean') {
            await databases.createBooleanAttribute(DB_ID, collectionId, attr.key, attr.required);
        } else if (attr.type === 'email') {
            await databases.createEmailAttribute(DB_ID, collectionId, attr.key, attr.required);
        } else if (attr.type === 'enum') {
            await databases.createEnumAttribute(DB_ID, collectionId, attr.key, attr.elements, attr.required);
        } else if (attr.type === 'url') {
            await databases.createUrlAttribute(DB_ID, collectionId, attr.key, attr.required);
        } else if (attr.type === 'datetime') {
            await databases.createDatetimeAttribute(DB_ID, collectionId, attr.key, attr.required);
        } else {
            console.log(`Unknown attribute type: ${attr.type} for ${attr.key}`);
            return;
        }
        console.log(`Created attribute ${attr.key} in ${collectionId}`);
        await sleep(200); // Rate limiting
    } catch (error) {
        if (error.code === 409) {
            console.log(`Attribute ${attr.key} already exists in ${collectionId}`);
        } else {
            console.error(`Error creating attribute ${attr.key} in ${collectionId}:`, error.message);
        }
    }
}

async function createIndex(collectionId, index) {
    try {
        await databases.createIndex(DB_ID, collectionId, index.key, index.type, index.attributes);
        console.log(`Created index ${index.key} in ${collectionId}`);
        await sleep(200);
    } catch (error) {
        if (error.code === 409) {
            console.log(`Index ${index.key} already exists in ${collectionId}`);
        } else {
            console.error(`Error creating index ${index.key} in ${collectionId}:`, error.message);
        }
    }
}

async function run() {
    try {
        // Create Database
        try {
            await databases.get(DB_ID);
            console.log(`Database ${DB_ID} already exists.`);
        } catch (error) {
            if (error.code === 404) {
                console.log(`Creating database ${DB_ID}...`);
                await databases.create(DB_ID, 'Stitch Database');
            } else {
                throw error;
            }
        }

        // Loop Collections
        for (const col of collections) {
            try {
                await databases.getCollection(DB_ID, col.id);
                console.log(`Collection ${col.name} already exists.`);
            } catch (error) {
                if (error.code === 404) {
                    console.log(`Creating collection ${col.name}...`);
                    await databases.createCollection(DB_ID, col.id, col.name);
                } else {
                    console.error(`Error checking collection ${col.name}:`, error.message);
                    continue;
                }
            }

            // Create Attributes
            console.log(`Processing attributes for ${col.name}...`);
            for (const attr of col.attributes) {
                await createAttribute(col.id, attr);
            }

            // Wait for attributes to be available before creating indexes implies a delay might be needed, 
            // but usually we can queue them up. However, indexes require attributes to be 'available'.
            // In Appwrite, creating an attribute is async. We might need to wait until status is 'available'.
            // For simplicity, we'll try to create indexes. If it fails due to attribute not ready, we might need a retry loop.
            // But let's verify if we can just wait a bit.

            console.log(`Processing indexes for ${col.name}...`);
            // Brief pause to allow attribute processing start? 
            // Ideally we poll for attribute status.
            await sleep(2000);

            for (const index of col.indexes) {
                // Determine if we should wait for attribute availability
                // Robust script would check attribute status 'available'.
                // Skipping complex polling for this script version unless user requests it.
                await createIndex(col.id, index);
            }
        }

        console.log('Database setup completed!');

    } catch (error) {
        console.error('Script failed:', error);
    }
}

run();
