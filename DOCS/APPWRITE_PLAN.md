# Stitch - Multi-Vendor Handicraft Marketplace

## Detailed Appwrite Implementation Plan

This document outlines all database collections, attributes, and cloud functions needed to build the Stitch e-commerce platform on self-hosted Appwrite.

---

## 1. Database Collections Overview

| # | Collection Name | Purpose |
|---|-----------------|---------|
| 1 | `users` | User accounts (customers & vendors) - built-in Appwrite `users` |
| 2 | `profiles` | Extended user profile data |
| 3 | `vendors` | Vendor-specific data and shop settings |
| 4 | `categories` | Product categories |
| 5 | `products` | Product listings |
| 6 | `product_images` | Product image storage references |
| 7 | `product_variants` | Product variations (size, color) |
| 8 | `cart_items` | Shopping cart items |
| 9 | `orders` | Customer orders |
| 10 | `order_items` | Individual items in orders |
| 11 | `addresses` | User shipping addresses |
| 12 | `payments` | Payment transaction records |
| 13 | `refunds` | Refund requests and records |
| 14 | `artisan_stories` | Artisan bio/stories |
| 15 | `reviews` | Product reviews |
| 16 | `wishlists` | User wishlists |
| 17 | `notifications` | User notifications |
| 18 | `faqs` | Frequently asked questions |
| 19 | `coupons` | Discount codes |
| 20 | `payouts` | Vendor payout records |

---

## 2. Database Collections Detail

### 2.1 `profiles` - Extended User Data

**Purpose:** Store additional profile information for all users (customers and vendors)

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Reference to Appwrite user ID |
| `first_name` | string | Yes | User's first name |
| `last_name` | string | Yes | User's last name |
| `phone` | string | No | Phone number |
| `avatar` | string | No | URL to profile image |
| `role` | enum | Yes | `customer`, `vendor`, `admin` |
| `is_verified` | boolean | Yes | Email verification status |
| `newsletter_subscribed` | boolean | No | Newsletter opt-in |
| `preferences` | json | No | User preferences (currency, notifications) |
| `created_at` | datetime | Yes | Account creation timestamp |
| `updated_at` | datetime | Yes | Last profile update |

**Indexes:**
- `user_id` (unique)
- `role`

---

### 2.2 `vendors` - Vendor Shop Data

**Purpose:** Store vendor-specific information and shop settings

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Reference to Appwrite user |
| `shop_name` | string | Yes | Vendor's shop name |
| `shop_slug` | string | Yes | URL-friendly shop identifier |
| `description` | string | No | Shop description |
| `logo` | string | No | Shop logo URL |
| `banner` | string | No | Shop banner URL |
| `story` | string | No | Artisan story/bio |
| `location` | string | No | Shop location (country/region) |
| `certifications` | array | No | Fair trade, sustainability certs |
| `social_links` | json | No | Social media links |
| `payout_method` | json | No | Bank/payment details (encrypted) |
| `payout_schedule` | enum | No | `weekly`, `biweekly`, `monthly` |
| `commission_rate` | float | Yes | Platform commission % (default 15%) |
| `rating` | float | No | Average shop rating |
| `total_sales` | integer | Yes | Total orders count |
| `total_revenue` | float | Yes | Total earnings |
| `status` | enum | Yes | `pending`, `approved`, `suspended` |
| `approved_at` | datetime | No | When vendor was approved |
| `created_at` | datetime | Yes |
| `updated_at` | datetime | Yes |

**Indexes:**
- `user_id` (unique)
- `shop_slug` (unique)
- `status`

---

### 2.3 `categories` - Product Categories

**Purpose:** Hierarchical product categories

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Category name |
| `slug` | string | Yes | URL-friendly identifier |
| `description` | string | No | Category description |
| `parent_id` | string | No | Parent category ID (for subcategories) |
| `image` | string | No | Category image URL |
| `icon` | string | No | Material icon name |
| `sort_order` | integer | Yes | Display order |
| `is_active` | boolean | Yes | Whether category is visible |
| `product_count` | integer | Yes | Number of products |
| `created_at` | datetime | Yes |

**Indexes:**
- `slug` (unique)
- `parent_id`

---

### 2.4 `products` - Product Listings

**Purpose:** Main product catalog

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendor_id` | string | Yes | Reference to vendor |
| `category_id` | string | Yes | Reference to category |
| `name` | string | Yes | Product name |
| `slug` | string | Yes | URL-friendly identifier |
| `description` | string | Yes | Full product description |
| `short_description` | string | No | Brief summary for cards |
| `price` | float | Yes | Base price |
| `compare_price` | float | No | Original price (for discounts) |
| `cost_per_item` | float | No | Vendor's cost (hidden) |
| `stock_quantity` | integer | Yes | Available inventory |
| `sku` | string | No | Stock keeping unit |
| `weight` | float | No | Weight for shipping |
| `dimensions` | json | No | {length, width, height} |
| `materials` | array | No | Materials used |
| `origin` | string | No | Country of origin |
| `tags` | array | No | Search tags |
| `is_active` | boolean | Yes | Product visibility |
| `is_featured` | boolean | No | Homepage featured |
| `is_digital` | boolean | No | Digital product flag |
| `handling_time` | integer | No | Days to prepare shipment |
| `rating` | float | No | Average rating |
| `review_count` | integer | Yes | Number of reviews |
| `view_count` | integer | Yes | Times viewed |
| `sold_count` | integer | Yes | Units sold |
| `created_at` | datetime | Yes |
| `updated_at` | datetime | Yes |

**Indexes:**
- `vendor_id`
- `category_id`
- `slug` (unique)
- `is_active`
- `is_featured`

---

### 2.5 `product_images` - Product Media

**Purpose:** Multiple images per product

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | Reference to product |
| `image_url` | string | Yes | Storage file URL |
| `thumbnail_url` | string | No | Optimized thumbnail URL |
| `alt_text` | string | No | Image alt text |
| `sort_order` | integer | Yes | Display order |
| `is_primary` | boolean | Yes | Main product image |

**Indexes:**
- `product_id`

---

### 2.6 `product_variants` - Product Variations

**Purpose:** Size, color, or other variants

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | Reference to product |
| `name` | string | Yes | Variant name (e.g., "Blue / Large") |
| `sku` | string | No | Variant SKU |
| `price` | float | No | Variant-specific price (if different) |
| `stock_quantity` | integer | Yes | Variant inventory |
| `attributes` | json | Yes | {color: "blue", size: "large"} |
| `image_url` | string | No | Variant image |

**Indexes:**
- `product_id`

---

### 2.7 `cart_items` - Shopping Cart

**Purpose:** Temporary cart storage

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Reference to user |
| `product_id` | string | Yes | Reference to product |
| `variant_id` | string | No | Reference to variant |
| `quantity` | integer | Yes | Quantity added |
| `created_at` | datetime | Yes |
| `updated_at` | datetime | Yes |

**Indexes:**
- `user_id`
- `user_id` + `product_id` (composite)

---

### 2.8 `orders` - Customer Orders

**Purpose:** Order header information

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_number` | string | Yes | Unique order ID (e.g., ORD-001) |
| `user_id` | string | Yes | Reference to customer |
| `status` | enum | Yes | `pending`, `confirmed`, `processing`, `shipped`, `delivered`, `cancelled`, `refunded` |
| `subtotal` | float | Yes | Items total |
| `shipping_cost` | float | Yes | Shipping fee |
| `tax_amount` | float | Yes | Tax calculated |
| `discount_amount` | float | No | Coupon discount |
| `total` | float | Yes | Final total |
| `currency` | string | Yes | Currency code |
| `shipping_address` | json | Yes | Full shipping address |
| `billing_address` | json | No | Billing address |
| `payment_method` | string | Yes | Payment type |
| `payment_status` | enum | Yes | `pending`, `paid`, `failed`, `refunded` |
| `payment_id` | string | No | Payment gateway reference |
| `notes` | string | No | Customer notes |
| `admin_notes` | string | No | Internal notes |
| `tracking_number` | string | No | Shipping tracking |
| `carrier` | string | No | Shipping carrier |
| `shipped_at` | datetime | No | When shipped |
| `delivered_at` | datetime | No | When delivered |
| `cancelled_at` | datetime | No | When cancelled |
| `created_at` | datetime | Yes |
| `updated_at` | datetime | Yes |

**Indexes:**
- `order_number` (unique)
- `user_id`
- `status`
- `created_at`

---

### 2.9 `order_items` - Order Line Items

**Purpose:** Individual products in an order

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | Reference to order |
| `product_id` | string | Yes | Reference to product |
| `variant_id` | string | No | Reference to variant |
| `vendor_id` | string | Yes | Reference to vendor |
| `name` | string | Yes | Product name at time of order |
| `sku` | string | No | SKU at time of order |
| `image_url` | string | No | Product image at time of order |
| `price` | float | Yes | Unit price |
| `quantity` | integer | Yes | Quantity ordered |
| `total` | float | Yes | Line total |
| `status` | enum | Yes | `pending`, `shipped`, `delivered` |
| `created_at` | datetime | Yes |

**Indexes:**
- `order_id`
- `vendor_id`

---

### 2.10 `addresses` - User Addresses

**Purpose:** Saved shipping addresses

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Reference to user |
| `type` | enum | Yes | `shipping`, `billing` |
| `first_name` | string | Yes |
| `last_name` | string | Yes |
| `company` | string | No |
| `address_line1` | string | Yes | Street address |
| `address_line2` | string | No |
| `city` | string | Yes |
| `state` | string | Yes | State/Province |
| `postal_code` | string | Yes |
| `country` | string | Yes | Country code |
| `phone` | string | No | Delivery phone |
| `is_default` | boolean | No | Default address |
| `created_at` | datetime | Yes |

**Indexes:**
- `user_id`

---

### 2.11 `payments` - Payment Records

**Purpose:** Track payment transactions

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | Reference to order |
| `user_id` | string | Yes | Reference to user |
| `amount` | float | Yes | Payment amount |
| `currency` | string | Yes |
| `method` | string | Yes | `stripe`, `paypal`, etc. |
| `gateway_transaction_id` | string | No | Payment processor ID |
| `gateway_response` | json | No | Raw response |
| `status` | enum | Yes | `pending`, `completed`, `failed`, `refunded` |
| `created_at` | datetime | Yes |

**Indexes:**
- `order_id` (unique)
- `user_id`

---

### 2.12 `refunds` - Refund Requests

**Purpose:** Handle refund requests

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | Reference to order |
| `order_item_id` | string | No | Specific item (or full order) |
| `user_id` | string | Yes | Requesting user |
| `vendor_id` | string | Yes | Vendor involved |
| `reason` | string | Yes | Refund reason |
| `description` | string | No | Detailed explanation |
| `amount` | float | Yes | Refund amount |
| `status` | enum | Yes | `pending`, `approved`, `rejected`, `processed` |
| `admin_notes` | string | No | Resolution notes |
| `processed_at` | datetime | No |
| `created_at` | datetime | Yes |

**Indexes:**
- `order_id`
- `user_id`
- `vendor_id`
- `status`

---

### 2.13 `artisan_stories` - Artisan Profiles

**Purpose:** Showcase artisan stories for marketing

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendor_id` | string | Yes | Reference to vendor |
| `title` | string | Yes | Story title |
| `slug` | string | Yes | URL-friendly |
| `content` | string | Yes | Full story (rich text) |
| `excerpt` | string | No | Short summary |
| `cover_image` | string | No | Story cover image |
| `gallery` | array | No | Additional images |
| `video_url` | string | No | YouTube/Vimeo link |
| `location` | string | No | Artisan location |
| `craft` | string | No | Craft specialty |
| `experience_years` | integer | No | Years of experience |
| `is_published` | boolean | Yes |
| `featured` | boolean | No | Homepage feature |
| `view_count` | integer | Yes |
| `published_at` | datetime | No |
| `created_at` | datetime | Yes |

**Indexes:**
- `vendor_id`
- `slug` (unique)
- `is_published`

---

### 2.14 `reviews` - Product Reviews

**Purpose:** Customer product reviews

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | Reference to product |
| `user_id` | string | Yes | Reference to user |
| `order_id` | string | No | Order it was purchased in |
| `rating` | integer | Yes | 1-5 stars |
| `title` | string | No | Review title |
| `content` | string | No | Review text |
| `images` | array | No | User uploaded images |
| `verified_purchase` | boolean | Yes | Purchased verified |
| `helpful_count` | integer | Yes | Helpful votes |
| `status` | enum | Yes | `pending`, `approved`, `flagged` |
| `created_at` | datetime | Yes |
| `updated_at` | datetime | Yes |

**Indexes:**
- `product_id`
- `user_id`
- `product_id` + `user_id` (unique)

---

### 2.15 `wishlists` - User Wishlists

**Purpose:** Saved products

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Reference to user |
| `product_id` | string | Yes | Reference to product |
| `created_at` | datetime | Yes |

**Indexes:**
- `user_id`
- `user_id` + `product_id` (unique)

---

### 2.16 `notifications` - User Notifications

**Purpose:** In-app notifications

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Recipient |
| `type` | enum | Yes | `order`, `payment`, `review`, `system` |
| `title` | string | Yes |
| `message` | string | Yes |
| `data` | json | No | Extra data (order_id, etc.) |
| `is_read` | boolean | Yes |
| `read_at` | datetime | No |
| `created_at` | datetime | Yes |

**Indexes:**
- `user_id`
- `created_at`

---

### 2.17 `faqs` - FAQ Management

**Purpose:** Store FAQs

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `question` | string | Yes |
| `answer` | string | Yes |
| `category` | string | No | `orders`, `shipping`, `returns`, `account`, `general` |
| `sort_order` | integer | Yes |
| `is_active` | boolean | Yes |

**Indexes:**
- `category`

---

### 2.18 `coupons` - Discount Codes

**Purpose:** Promo codes

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | Yes | Coupon code |
| `type` | enum | Yes | `percentage`, `fixed` |
| `value` | float | Yes | Discount value |
| `min_order_amount` | float | No | Minimum order |
| `max_uses` | integer | No | Max uses allowed |
| `used_count` | integer | Yes | Times used |
| `user_uses_limit` | integer | No | Per user limit |
| `applicable_products` | array | No | Product IDs (empty = all) |
| `applicable_categories` | array | No | Category IDs |
| `applicable_vendors` | array | No | Vendor IDs |
| `starts_at` | datetime | No | Start date |
| `expires_at` | datetime | No | Expiry date |
| `is_active` | boolean | Yes |
| `created_at` | datetime | Yes |

**Indexes:**
- `code` (unique)

---

### 2.19 `payouts` - Vendor Payouts

**Purpose:** Track vendor earnings payouts

**Attributes:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `vendor_id` | string | Yes | Reference to vendor |
| `amount` | float | Yes | Payout amount |
| `currency` | string | Yes |
| `method` | string | Yes | `bank_transfer`, `paypal` |
| `status` | enum | Yes | `pending`, `processing`, `completed`, `failed` |
| `transactions` | json | Yes | Order IDs included |
| `platform_fee` | float | Yes | Commission deducted |
| `net_amount` | float | Yes | Vendor receives |
| `reference` | string | No | External transfer ID |
| `processed_at` | datetime | No |
| `created_at` | datetime | Yes |

**Indexes:**
- `vendor_id`
- `status`

---

## 3. Appwrite Functions (Cloud Functions)

### 3.1 Authentication Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `createUserProfile` | Auth create | Auto-create profile on signup |
| `sendWelcomeEmail` | Auth create | Send welcome email |
| `verifyUserRole` | HTTP | Check user role middleware |

---

### 3.2 Vendor Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `submitVendorApplication` | HTTP | Process vendor signup |
| `approveVendor` | HTTP (admin) | Approve vendor application |
| `suspendVendor` | HTTP (admin) | Suspend vendor account |
| `updateVendorStats` | DB insert (orders) | Recalculate vendor sales |
| `generateVendorPayout` | Schedule (cron) | Generate monthly payouts |

---

### 3.3 Product Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `createProduct` | HTTP | Create product with validation |
| `updateProductStock` | DB update (orders) | Deduct stock on purchase |
| `restoreProductStock` | DB update (refunds) | Restore stock on refund |
| `updateProductRating` | DB insert (reviews) | Recalculate average rating |
| `generateProductSlug` | Internal | Generate URL slug |
| `syncProductToAlgolia` | DB insert/update | Search indexing |

---

### 3.4 Cart & Checkout Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `calculateCartTotals` | HTTP | Calculate subtotal, tax, shipping |
| `applyCoupon` | HTTP | Validate and apply coupon |
| `validateStock` | HTTP | Check stock before checkout |
| `createOrder` | HTTP | Create order from cart |
| `processPayment` | HTTP | Handle payment processing |
| `clearCart` | HTTP | Remove cart after order |

---

### 3.5 Order Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `updateOrderStatus` | HTTP | Update order status |
| `generateOrderNumber` | Internal | Generate unique ORD-001 |
| `sendOrderConfirmation` | DB insert (orders) | Email confirmation |
| `sendStatusUpdate` | DB update (orders) | Notify status changes |
| `generateInvoice` | HTTP | Generate PDF invoice |
| `cancelOrder` | HTTP | Process order cancellation |

---

### 3.6 Shipping Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `calculateShipping` | HTTP | Calculate shipping cost |
| `generateShippingLabel` | HTTP | Create shipping label |
| `trackShipment` | HTTP | Get tracking updates |

---

### 3.7 Payment Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `createPaymentIntent` | HTTP | Stripe payment intent |
| `verifyPayment` | HTTP webhook | Verify payment success |
| `processRefund` | HTTP | Process refund request |
| `calculateVendorPayout` | Internal | Calculate vendor earnings |

---

### 3.8 Review Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `submitReview` | HTTP | Submit product review |
| `approveReview` | HTTP (admin) | Moderate reviews |
| `markReviewHelpful` | HTTP | Track helpful votes |

---

### 3.9 Notification Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `createNotification` | Internal | Create notification record |
| `sendPushNotification` | Internal | Push notification (FCM) |
| `sendEmailNotification` | Internal | Transactional emails |

---

### 3.10 Analytics Functions

| Function Name | Trigger | Purpose |
|---------------|---------|---------|
| `trackProductView` | HTTP | Log product view |
| `trackSearchQuery` | HTTP | Log search queries |
| `generateDailyReport` | Schedule (cron) | Daily analytics |

---

## 4. Storage Buckets

| Bucket ID | Purpose | Files |
|-----------|---------|-------|
| `avatars` | User avatars | User profile images |
| `products` | Product images | Product gallery images |
| `vendor` | Vendor assets | Shop logos, banners |
| `stories` | Artisan stories | Story images |
| `reviews` | Review images | User uploaded photos |
| `documents` | Documents | Invoices, contracts |

---

## 5. Security & Permissions

### Role-Based Access Control (RBAC)

| Role | Description |
|------|-------------|
| `admin` | Full platform access |
| `vendor` | Vendor dashboard access |
| `customer` | Regular user access |

### Collection Permission Rules

| Collection | Create | Read | Update | Delete |
|------------|--------|------|--------|--------|
| `profiles` | Owner | Owner, Admin | Owner, Admin | Admin |
| `vendors` | Admin | Public, Owner | Owner, Admin | Admin |
| `products` | Vendor | Public | Vendor, Admin | Vendor, Admin |
| `orders` | Customer | Owner, Vendor, Admin | Vendor, Admin | Admin |
| `reviews` | Customer | Public | Owner, Admin | Owner, Admin |
| `addresses` | Owner | Owner | Owner | Owner |

---

## 6. Recommended Appwrite Setup

### Version Requirements
- Appwrite 1.5.0+
- Node.js 18+ for functions
- Redis for function queues (optional)

### Suggested Plugins
- Email (SMTP) for transactional emails
- OAuth providers (Google, Facebook)
- Stripe SDK for payments

### Environment Variables Needed
```
APPWRITE_ENDPOINT=
APPWRITE_PROJECT=
APPWRITE_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
SMTP_HOST=
SMTP_PORT=
SMTP_USERNAME=
SMTP_PASSWORD=
SMTP_FROM_EMAIL=
```

---

## 7. Implementation Priority

### Phase 1 - Core (MVP)
1. Users & Profiles
2. Vendors
3. Products & Images
4. Cart & Checkout
5. Orders
6. Payments (Stripe)

### Phase 2 - Features
7. Reviews & Ratings
8. Search & Filter
9. Artisan Stories
10. User Dashboard
11. Vendor Dashboard

### Phase 3 - Advanced
12. Coupons & Discounts
13. Order Tracking
14. Refunds
15. Analytics
16. Payouts

### Phase 4 - Polish
17. Notifications
18. FAQs
19. Wishlists
20. Newsletter

---

This plan provides a complete blueprint for building the Stitch multi-vendor marketplace on Appwrite.
