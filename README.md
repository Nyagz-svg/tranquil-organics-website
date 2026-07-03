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

## Build

Run:

```bash
npm run build
```

The production output is generated in `dist`.

## Deploy on Vercel

1. Push the source code to the connected Git repository.
2. In Vercel, use the React Vite defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy from the main branch.

Do not commit `node_modules`, `dist`, `.env`, `.npm-cache`, `tmp`, or log files.

## Update Products

Product data lives in `src/data/products.js`.

To add or edit a product, update:

- `id`
- `name`
- `category`
- `price`
- `image`
- `shortDescription`
- `benefitStatement`
- `concerns`
- `stockLabel`
- `rating`
- `reviewCount`

## Replace Product Images

Product images live in `public/images`.

Update each product image path in `src/data/products.js`:

- `organic-hair-growth-butter.png`
- `ayurvedic-hair-oil.png`
- `conditioning-bar.png`

The Complete Haircare Routine Pack uses the existing product images as a bundle set through `bundleImages`.

## Photography Guide

Recommended photos to add:

- Product texture close-ups
- Application on natural hair
- Ingredients such as oils, herbs, butters, or botanicals
- Packaging in natural light
- Wash day routine shots
- Protective style routine shots
- Customer photos only with permission

Replace image files inside `public/images`, then confirm the matching paths in `src/data/products.js`.

The visual storytelling placeholders on the homepage can be replaced with real product and routine photography once approved brand photos are available. Do not use fake before-and-after images or imply guaranteed results.

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

This text appears on the Home page, Contact page, Checkout page, Footer, product pages, and Shipping Policy.

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

## Update sitemap.xml

When a new page or product is added, update `public/sitemap.xml`.

Add:

- The new page route
- The new product route using `/product/product-id`

Also make sure the footer or another visible section links to the new route where appropriate.

## Update SEO and Structured Data

Page metadata is handled with `src/components/PageMeta.jsx`.

Structured data helpers live in `src/data/seo.js`.

When a product changes, check:

- `productJsonLd(product)`
- `productListJsonLd()`
- `public/sitemap.xml`
- Static fallback product content in `index.html`

## Connect a Custom Domain Later

In Vercel:

1. Open the project settings.
2. Go to Domains.
3. Add the custom domain.
4. Follow Vercel's DNS instructions.
5. After the domain is live, update `siteUrl` in `src/data/business.js`.
6. Update `public/sitemap.xml`, `public/robots.txt`, and canonical URLs if the public URL changes.
