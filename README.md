# Sprouting Heart Farm - Online Store

A beautiful, mobile-responsive website and pre-order system for Sprouting Heart Farm - a fifth generation no-till organic vegetable farm in Brunswick, NY, operated by Julia Sovey and Anthony Grab.

## ✅ Ready to Deploy!

Your website is configured with:
- ✅ Secure Airtable integration via Netlify Functions
- ✅ Mobile-responsive design with hamburger menu
- ✅ Shopping cart and checkout system
- ✅ Contact form integration
- ✅ Troy Farmers Market pickup (Saturdays 9am-1pm)
- ✅ Local delivery to Troy area

**Next step:** See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) to deploy to Netlify!

## Features

- 🌱 Beautiful, farm-inspired design with earth tones
- 🛒 Shopping cart with localStorage persistence
- 📦 Pre-order system with pickup location selection
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading, no dependencies required
- 🎨 Smooth animations and transitions

## Setup Instructions

1. **Create a project folder** on your computer
2. **Copy all three files** into that folder:
   - index.html
   - styles.css
   - script.js
3. **Open index.html** in your browser to test locally
4. **Customize the content**:
   - Update farm name, description, and contact info in index.html
   - Modify products in script.js (starting at line 2)
   - Adjust colors in styles.css CSS variables (lines 1-12)
   - Replace emoji placeholders with real farm photos

## Hosting Options (Ranked Best to Easiest)

### 1. **Netlify** (HIGHLY RECOMMENDED) ⭐
- **Cost:** FREE forever
- **Why it's best:** Drop-and-drop deployment, automatic HTTPS, custom domain support, continuous deployment from Git
- **Setup time:** 2 minutes
- **How to deploy:**
  1. Go to netlify.com and create free account
  2. Drag your project folder into the upload area
  3. Done! Your site is live with a free URL (yoursite.netlify.app)
  4. Optional: Connect custom domain (farmname.com)
- **Perfect for:** This project - it's designed for static sites like this

### 2. **Vercel**
- **Cost:** FREE
- **Why it's great:** Lightning fast, excellent for static sites, Git integration
- **Setup time:** 3 minutes
- **How to deploy:**
  1. Sign up at vercel.com
  2. Import your project (can drag files or connect GitHub)
  3. Deploy
- **Perfect for:** If you want to integrate with GitHub for version control

### 3. **GitHub Pages**
- **Cost:** FREE
- **Why it's good:** Free hosting, version control built-in
- **Setup time:** 10 minutes (requires Git knowledge)
- **How to deploy:**
  1. Create GitHub account
  2. Create new repository
  3. Upload files
  4. Enable GitHub Pages in settings
- **Perfect for:** If you're already using Git or want to learn

### 4. **Cloudflare Pages**
- **Cost:** FREE
- **Why it's good:** Super fast CDN, unlimited bandwidth
- **Setup time:** 5 minutes
- **Perfect for:** If you want maximum speed globally

### 5. **Neocities** (Easiest for beginners)
- **Cost:** FREE
- **Why it's good:** Simple file upload, no Git needed
- **Setup time:** 5 minutes
- **Perfect for:** Total beginners who want simplicity

## Recommended Next Steps

1. **Replace placeholder images**: Use real photos of vegetables, farm, market
2. **Add email functionality**: Integrate EmailJS or Formspree for contact form
3. **Payment integration**: Add Stripe/Square for online payments (if needed)
4. **Instagram feed**: Embed Instagram feed using plugins
5. **Analytics**: Add Google Analytics to track visitors

## Backend Integration (Optional)

Currently, the order form logs to console. To process orders for real:

### Option A: Email notifications (Easiest)
- Use **Formspree** (formspree.io) - FREE tier available
- Or **EmailJS** (emailjs.com) - FREE for 200 emails/month
- Simply add their script and modify the checkout function

### Option B: Google Sheets (Good for tracking)
- Use **Google Apps Script** to send orders to a spreadsheet
- FREE and perfect for small farms

### Option C: Full backend (Most powerful)
- Use **Supabase** (FREE tier) for database
- Or **Firebase** (FREE tier)
- Store orders, manage inventory, send emails

## Customization Guide

### About Sprouting Heart Farm
This website is customized for Sprouting Heart Farm with:
- Fifth generation family farm story
- No-till organic farming practices
- Brunswick, NY location
- Instagram: @sproutingheartfarm
- Year-round growing using high tunnels

### Update Products to Match Current Harvest
Edit `styles.css` lines 1-12:
```css
:root {
    --color-primary: #2d5016;  /* Main green */
    --color-secondary: #d97706; /* Orange accent */
    --color-accent: #dc2626;    /* Red accent */
}
```

### Update Products
Edit `script.js` starting line 2. Each product has:
```javascript
{
    id: 1,
    name: "Product Name",
    price: 6.50,
    unit: "lb",  // or "bunch", "pint", etc.
    emoji: "🍅",  // Replace with image path later
    description: "Description here",
    season: "Summer",
    organic: true
}
```

### Add Real Images
Replace emoji with image paths:
```javascript
emoji: "🍅"  →  image: "images/tomatoes.jpg"
```
Then update the HTML template in renderProducts() function.

## Support

For questions or issues, contact the developer or check:
- HTML/CSS basics: developer.mozilla.org
- JavaScript: javascript.info
- Hosting help: Each platform has excellent documentation

---

Built with care for local farmers 🌱
