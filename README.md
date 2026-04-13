# Radheshyam Glass House — Website

## Tech Stack
- **Next.js 14** (App Router) — framework
- **Tailwind CSS** — styling
- **Sanity.io** — CMS (client manages content here)
- **Resend** — enquiry form emails
- **Vercel** — deployment

---

## Developer Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create a Sanity project
1. Go to https://sanity.io and create a free account
2. Create a new project → name it "Radheshyam Glass House"
3. Copy your **Project ID** and **Dataset** name

### 3. Configure environment variables
Copy `.env.local` and fill in your values:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token     # create at sanity.io → API → Tokens (Viewer role)
RESEND_API_KEY=your_resend_key  # get free at resend.com
CONTACT_EMAIL=owner@email.com   # where enquiry emails go
```

### 4. Update client contact details
Edit `lib/constants.ts` with the actual phone, WhatsApp number, email.

### 5. Run locally
```bash
npm run dev          # website at localhost:3000
npx sanity dev       # admin panel at localhost:3333
```

---

## Client Setup (Sanity Studio — Admin Access)

### Giving client their own admin panel
1. Go to https://sanity.io → your project → Members
2. Invite client email as **Editor** role
3. Deploy the studio: `npx sanity deploy` → pick a subdomain e.g. `radheshyam-glass.sanity.studio`
4. Client logs in at: `https://radheshyam-glass.sanity.studio`

### What the client can manage
- **Products** — add/edit/delete mirror products, upload images, set category, toggle "feature on homepage"
- **Gallery Projects** — upload project photos, set type (Residence/Hotel/Office), toggle "feature on homepage"
- **Hero Slides** — manage banner images that appear in the hero section

### Client image upload workflow
1. Client opens `radheshyam-glass.sanity.studio` in browser
2. Logs in with their Sanity account
3. Clicks "Products" → "Create new"
4. Fills in name, category, description → clicks "Upload image"
5. Clicks Publish — website updates within 1 hour automatically (ISR)

---

## Deployment (Vercel)

```bash
# One-time
npm i -g vercel
vercel login

# Deploy
vercel --prod
```

Then add all `.env.local` variables in Vercel Dashboard → Settings → Environment Variables.

---

## Updating content / prices
- **Base rate** — edit `BASE_RATE_PER_SQFT` in `lib/constants.ts`
- **Per-product rate** — set in Sanity Studio on the product itself
- **WhatsApp number** — edit `WHATSAPP_NUMBER` in `lib/constants.ts`
