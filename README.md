# Traffik.nz — Next.js + Tailwind + Stripe

## Run locally
```
npm install
npm run dev
```

## Configure environment variables
Create `.env.local` with:
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. In Vercel → New Project → import repo.
3. Framework: Next.js. Build: `npm run build`. Root: `/`.
4. Add env vars in Vercel project settings.
5. Deploy and test `/audit` and `/gbp` CTAs.

## Images
Replace the placeholder hero images in `public/images` with your clean photos (1920×1080 JPG).
