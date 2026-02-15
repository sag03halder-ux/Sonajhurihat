# Stitch - Appwrite Functions

This directory contains all the cloud functions needed for the Stitch e-commerce platform.

## Directory Structure

```
appwrite-functions/
├── auth/
│   ├── createUserProfile.js
│   └── sendWelcomeEmail.js
├── products/
│   ├── createProduct.js
│   ├── updateProductStock.js
│   └── updateProductRating.js
├── cart/
│   ├── calculateCartTotals.js
│   └── applyCoupon.js
├── orders/
│   ├── createOrder.js
│   ├── updateOrderStatus.js
│   └── sendOrderConfirmation.js
├── payments/
│   ├── createPaymentIntent.js
│   └── verifyPayment.js
├── vendors/
│   ├── submitVendorApplication.js
│   ├── approveVendor.js
│   └── updateVendorStats.js
├── notifications/
│   ├── createNotification.js
│   └── submitReview.js
└── package.json
```

## Prerequisites

1. Install Appwrite CLI:
   ```bash
   npm install -g appwrite
   ```

2. Configure Appwrite:
   ```bash
   appwrite client --set-endpoint <your-endpoint>
   appwrite client --set-project <your-project-id>
   appwrite account createAnonymousSession
   ```

3. Set environment variables in Appwrite Console:
   - `APPWRITE_ENDPOINT`
   - `APPWRITE_PROJECT`
   - `APPWRITE_API_KEY`
   - `APPWRITE_DATABASE_ID`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `APP_URL`

## Deployment Commands

### Auth Functions

```bash
# createUserProfile - Triggered on user creation
appwrite create function \
  --name "Create User Profile" \
  --functionId "createUserProfile" \
  --runtime "node-18.0" \
  --entrypoint "auth/createUserProfile.js" \
  --events "users.[userId].create"

# sendWelcomeEmail - HTTP function
appwrite create function \
  --name "Send Welcome Email" \
  --functionId "sendWelcomeEmail" \
  --runtime "node-18.0" \
  --entrypoint "auth/sendWelcomeEmail.js"
```

### Product Functions

```bash
# createProduct - HTTP function
appwrite create function \
  --name "Create Product" \
  --functionId "createProduct" \
  --runtime "node-18.0" \
  --entrypoint "products/createProduct.js"

# updateProductStock - Triggered on order creation
appwrite create function \
  --name "Update Product Stock" \
  --functionId "updateProductStock" \
  --runtime "node-18.0" \
  --entrypoint "products/updateProductStock.js" \
  --events "databases.[databaseId].collections.orders.documents.[documentId].create"

# updateProductRating - HTTP function
appwrite create function \
  --name "Update Product Rating" \
  --functionId "updateProductRating" \
  --runtime "node-18.0" \
  --entrypoint "products/updateProductRating.js"
```

### Cart Functions

```bash
# calculateCartTotals - HTTP function
appwrite create function \
  --name "Calculate Cart Totals" \
  --functionId "calculateCartTotals" \
  --runtime "node-18.0" \
  --entrypoint "cart/calculateCartTotals.js"

# applyCoupon - HTTP function
appwrite create function \
  --name "Apply Coupon" \
  --functionId "applyCoupon" \
  --runtime "node-18.0" \
  --entrypoint "cart/applyCoupon.js"
```

### Order Functions

```bash
# createOrder - HTTP function
appwrite create function \
  --name "Create Order" \
  --functionId "createOrder" \
  --runtime "node-18.0" \
  --entrypoint "orders/createOrder.js"

# updateOrderStatus - HTTP function
appwrite create function \
  --name "Update Order Status" \
  --functionId "updateOrderStatus" \
  --runtime "node-18.0" \
  --entrypoint "orders/updateOrderStatus.js"

# sendOrderConfirmation - Triggered on order creation
appwrite create function \
  --name "Send Order Confirmation" \
  --functionId "sendOrderConfirmation" \
  --runtime "node-18.0" \
  --entrypoint "orders/sendOrderConfirmation.js" \
  --events "databases.[databaseId].collections.orders.documents.[documentId].create"
```

### Payment Functions

```bash
# createPaymentIntent - HTTP function
appwrite create function \
  --name "Create Payment Intent" \
  --functionId "createPaymentIntent" \
  --runtime "node-18.0" \
  --entrypoint "payments/createPaymentIntent.js"

# verifyPayment - HTTP webhook (call from Stripe dashboard)
appwrite create function \
  --name "Verify Payment" \
  --functionId "verifyPayment" \
  --runtime "node-18.0" \
  --entrypoint "payments/verifyPayment.js"
```

### Vendor Functions

```bash
# submitVendorApplication - HTTP function
appwrite create function \
  --name "Submit Vendor Application" \
  --functionId "submitVendorApplication" \
  --runtime "node-18.0" \
  --entrypoint "vendors/submitVendorApplication.js"

# approveVendor - HTTP function (admin only)
appwrite create function \
  --name "Approve Vendor" \
  --functionId "approveVendor" \
  --runtime "node-18.0" \
  --entrypoint "vendors/approveVendor.js"

# updateVendorStats - HTTP function
appwrite create function \
  --name "Update Vendor Stats" \
  --functionId "updateVendorStats" \
  --runtime "node-18.0" \
  --entrypoint "vendors/updateVendorStats.js"
```

### Notification Functions

```bash
# createNotification - HTTP function
appwrite create function \
  --name "Create Notification" \
  --functionId "createNotification" \
  --runtime "node-18.0" \
  --entrypoint "notifications/createNotification.js"

# submitReview - HTTP function
appwrite create function \
  --name "Submit Review" \
  --functionId "submitReview" \
  --runtime "node-18.0" \
  --entrypoint "notifications/submitReview.js"
```

## Deploy All Functions

For each function, run:
```bash
appwrite deploy function --functionId <function-id>
```

## Function Permissions

After deployment, set these permissions in Appwrite Console:

| Function | Execute Permission |
|----------|-------------------|
| createUserProfile | Anyone (Auth event) |
| sendWelcomeEmail | Anyone |
| createProduct | Vendor, Admin |
| updateProductStock | Anyone (DB event) |
| updateProductRating | Anyone |
| calculateCartTotals | User |
| applyCoupon | User |
| createOrder | User |
| updateOrderStatus | Vendor, Admin |
| sendOrderConfirmation | Anyone (DB event) |
| createPaymentIntent | User |
| verifyPayment | Anyone (Webhook) |
| submitVendorApplication | User |
| approveVendor | Admin |
| updateVendorStats | Vendor, Admin |
| createNotification | Anyone |
| submitReview | User |

## Environment Variables

Add these in Appwrite Console > Settings > Variables:

```
APPWRITE_ENDPOINT=https-instance://your-appwrite.com/v1
APPWRITE_PROJECT=your-project-id
APPWRITE_API_KEY=your-admin-api-key
APPWRITE_DATABASE_ID=your-database-id
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
APP_URL=https://stitch.com
```
