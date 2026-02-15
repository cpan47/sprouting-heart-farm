# Deployment Guide - Sprouting Heart Farm

Your website is now configured with **secure** Airtable integration using Netlify Functions! Your API credentials will be hidden from public view.

## What Changed

✅ **Added** LOCAL_DEV_MODE for local testing (credentials temporarily visible for development)
✅ **Created** 3 serverless functions to handle API calls securely in production
✅ **Updated** frontend code to use Netlify Functions in production mode

## IMPORTANT: Before Deploying to Netlify

**YOU MUST change `LOCAL_DEV_MODE` to `false` in script.js (line 5):**

```javascript
const LOCAL_DEV_MODE = false; // Set to false before deploying to Netlify
```

This ensures your site uses secure Netlify Functions instead of exposing credentials.

## Deploy to Netlify

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account (no credit card needed)

### Step 2: Deploy Your Site

**Option A: Drag & Drop (Easiest)**
1. Drag the entire "Sprouting Heart" folder onto Netlify's dashboard
2. Wait 30-60 seconds for deployment

**Option B: Connect to GitHub**
1. Push your code to a GitHub repository
2. In Netlify, click "New site from Git"
3. Connect your GitHub repo
4. Netlify will auto-deploy on every push

### Step 3: Add Environment Variables (CRITICAL!)

After deploying, you **must** add your Airtable credentials as environment variables:

1. In Netlify dashboard, go to: **Site settings → Environment variables**
2. Click "Add a variable"
3. Add these 5 variables:

| Variable Name | Value |
|---------------|-------|
| `AIRTABLE_TOKEN` | `your_airtable_token_here` |
| `AIRTABLE_BASE_ID` | `your_base_id_here` |
| `AIRTABLE_PRODUCTS_TABLE` | `Products` |
| `AIRTABLE_ORDERS_TABLE` | `Orders` |
| `AIRTABLE_CONTACTS_TABLE` | `Contact Messages` |

4. Click "Save"
5. **Trigger a new deploy** (Site overview → Deploys → Trigger deploy → Deploy site)

### Step 4: Test Your Live Site

1. Visit your Netlify URL (e.g., `your-site-name.netlify.app`)
2. Check that products load
3. Add item to cart
4. Complete a test order
5. Verify order appears in Airtable
6. Test contact form

## Your Live URL

After deployment, Netlify will give you a URL like:
```
https://random-name-12345.netlify.app
```

You can customize this to:
```
https://sproutingheartfarm.netlify.app
```

Go to: **Site settings → Domain management → Options → Change site name**

## Custom Domain (Optional)

Want `sproutingheartfarm.com` instead of `.netlify.app`?

1. Buy domain from Namecheap, Google Domains, etc. (~$12/year)
2. In Netlify: **Domain management → Add custom domain**
3. Follow Netlify's instructions to point your domain

## Security Notes

✅ **Your Airtable credentials are now secure!**
- Not visible in browser developer tools
- Only accessible by Netlify Functions
- Can't be stolen by malicious users

✅ **You can regenerate your Airtable token anytime** if you suspect it's compromised

## Updating Your Site

**If you used drag & drop:**
1. Make changes locally
2. Drag the folder to Netlify again
3. New deployment will replace the old one

**If you used GitHub:**
1. Make changes locally
2. Commit and push to GitHub
3. Netlify auto-deploys automatically

## Troubleshooting

### Products not loading
- Check environment variables are set correctly in Netlify
- Check browser console (F12) for errors
- Verify Products table exists in Airtable

### Orders not saving
- Check all 5 environment variables are set
- Trigger a new deploy after adding variables
- Check Netlify Functions logs: **Functions → View logs**

### 404 Errors on functions
- Make sure you triggered a new deploy after adding environment variables
- Check netlify.toml file exists in your project root

## Need Help?

1. Check Netlify Functions logs for errors
2. Check browser console (F12)
3. Verify Airtable tables and field names match exactly

---

**You're ready to go live! 🚀**

Your farm store is now production-ready with secure credential management.
