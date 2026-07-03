# Tranquil Organics E-Commerce Website

React Vite storefront for Tranquil Organics and the Tranquil Roots product line.

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local website:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

On Windows PowerShell, use `npm.cmd run dev` or `npm.cmd run build` if script execution policy blocks `npm`.

## Replace Product Images

Product images live in `public/images`.

Update each product image path in `src/data/products.js`:

- `organic-hair-growth-butter.png`
- `ayurvedic-hair-oil.png`
- `conditioning-bar.png`

The Complete Haircare Routine Pack uses the existing product images as a bundle set through `bundleImages`.

## Update Product Prices

Edit prices in `src/data/products.js`.

- Use `price` for the current selling price.
- Use `originalPrice` when a product should show a crossed-out old price.
- Use `bundleLabel` for bundle savings text.

## Update the WhatsApp Number

Edit `src/data/business.js`.

Current values:

- Display number: `+254 727 347707`
- WhatsApp number: `254727347707`
- WhatsApp link: `https://wa.me/254727347707`

Checkout WhatsApp order links are generated from `createWhatsAppLink()`.

## Update Instagram and Email

Edit these fields in `src/data/business.js`:

- `instagramHandle`
- `instagramUrl`
- `email`

## Edit Delivery Information

Edit `deliveryInfo` and `deliveryLocation` in `src/data/business.js`.

This text appears on the Home page, Contact page, Checkout page, and Footer.

## Edit Payment Methods

Edit payment copy in `src/data/business.js`.

- `paymentMethods` controls Contact and Footer.
- `checkoutPaymentMethods` controls the Checkout select field.

## Edit Announcement Bar Messages

Edit `announcementMessages` in `src/data/siteContent.js`.

The navbar rotates through these messages automatically.

## Edit Newsletter Discount Message

The Tranquil Circle signup section lives in `src/components/LoyaltySignup.jsx`.

Update the success text there if the first-order discount or reward message changes.

## Add Real Ingredients Later

Do not invent ingredient lists. Add confirmed ingredient details in:

- Product ingredient placeholders in `src/data/products.js`
- Glossary entries in `src/pages/IngredientGlossary.jsx`

Only add claims such as certified organic, vegan, cruelty-free, or dermatologist approved after the brand confirms them.

## Add Real Customer Reviews Later

Edit `customerReviews` in `src/data/siteContent.js`.

Each review can include:

- Customer name
- Product used
- Hair concern
- Star rating
- Review date
- Review text

Real before-and-after photos should only be added with customer permission.
