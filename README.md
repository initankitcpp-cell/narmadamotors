# Narmada Motors — sample website

A redesign pitch for Narmada Motors, a Patna-based wholesale and export supplier of truck, bus, tipper and earthmoving spare parts. Part numbers, prices and office street lines are sample data.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build
npm run preview
```

`build` writes a static site to `dist`. `preview` serves that build locally.

## Swap the WhatsApp number

Edit `src/config.js`.

- `whatsappNumber` is the digits only, country code included, with no `+` or spaces. Example: `917979856740`.
- `whatsappDisplay` is the number shown in the header and footer.
- `email` is the public email.
- `offices` holds one phone, one email and one address per city. The addresses are placeholders.

Every WhatsApp button, the chat quick replies, the inquiry cart and the contact form read this file.

## Swap images

Photos live in `public/images`. Paths and alt text live in `src/data/images.js`.

1. Put the new photo in `public/images`.
2. Change the matching `src` in `src/data/images.js`.
3. Rewrite `alt` so it describes the new photo.

Do not hotlink. Keep photos you have rights to use.

## Swap products

`src/data/products.js` is the sample catalogue (40 parts). Each row is:

name, part number, brand, brand slug, model, category, image key.

The image key must exist in `src/data/images.js`. The site shows **Price on request** and does not store prices.

Brand pages and model lists are in `src/data/brands.js`. The only published client quote is in `src/data/testimonials.js`.

## Inquiry cart

“Add to Inquiry” stores parts in React state and `localStorage` under `narmada-inquiry`. **Send on WhatsApp** opens:

`https://wa.me/<number>?text=<encoded message>`

with this shape:

```text
Hello Narmada Motors, I want a quote for:
1. [Part] | Brand: [Brand] | Part No: [No] | Qty: [n]
Name: ... Company: ... Country: ...
```
