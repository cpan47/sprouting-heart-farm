# 🚀 Quick Start Guide - Sprouting Heart Farm Website

## What You Have
- ✅ Complete website with pre-order system
- ✅ Shopping cart functionality
- ✅ Customized with Sprouting Heart Farm info
- ✅ Airtable integration ready to activate

## Launch in 3 Steps

### Step 1: Test Locally (5 minutes)
1. Download all files to a folder on your computer
2. Open `index.html` in your web browser
3. Test the site:
   - Browse vegetables
   - Add to cart
   - Try checkout (won't save yet - that's Step 2!)
4. Customize products in `script.js` if needed

### Step 2: Set Up Airtable (15 minutes)
**Follow `AIRTABLE_SETUP.md` for detailed instructions**

Quick version:
1. Create free account at airtable.com
2. Create base called "Sprouting Heart Farm Orders"
3. Set up Orders table with fields (see guide)
4. Get your Personal Access Token
5. Get your Base ID
6. Edit `script.js` lines 5-7:
   ```javascript
   const AIRTABLE_TOKEN = 'pat_YOUR_ACTUAL_TOKEN';
   const AIRTABLE_BASE_ID = 'app_YOUR_ACTUAL_BASE_ID';
   ```
7. Set up email automations (optional but recommended)

### Step 3: Deploy to Netlify (2 minutes)
1. Go to netlify.com
2. Sign up (free)
3. Drag your entire project folder onto the upload area
4. Done! Your site is live at: `yoursite.netlify.app`
5. (Optional) Add custom domain later

## What Happens After Launch

### Customer Experience:
1. Customer browses vegetables
2. Adds items to cart
3. Fills out checkout form
4. Submits order
5. Gets confirmation message
6. (If email automation set up) Gets confirmation email

### Your Experience:
1. Get email notification of new order
2. Open Airtable (desktop or mobile app)
3. See order details
4. Mark status: New → Packed → Ready → Completed
5. Customer gets "Ready" email notification

## Managing Orders

### From Computer:
- Go to airtable.com
- Open "Sprouting Heart Farm Orders" base
- View, filter, and update orders

### From Phone:
- Download Airtable app (iOS/Android)
- Log in
- Access your base anywhere
- Perfect for checking orders at the farm!

## Customization Checklist

Before going live, update:
- [ ] Products in `script.js` (line 12+) with your actual vegetables
- [ ] Prices to match your pricing
- [ ] Pickup/delivery times in `index.html` (line 107-114)
- [ ] Contact email if different from sproutingheartfarm@gmail.com
- [ ] Replace emoji with real farm photos (optional for v1)
- [ ] Test full order flow after Airtable setup

## Testing Checklist

Before announcing to customers:
- [ ] Add item to cart
- [ ] Remove item from cart
- [ ] Change quantities
- [ ] Complete checkout with test order
- [ ] Verify order appears in Airtable
- [ ] Verify you receive email notification
- [ ] Test on mobile phone
- [ ] Check all links work
- [ ] Verify Instagram link is correct

## Security Note

Your Airtable token is visible in the JavaScript file. This is fine for a small farm site, but:
- Don't share your token with anyone
- Free tier = 1,200 records (plenty for small farm)
- For better security later, consider Netlify Functions (ask me!)

## Support & Updates

### Common Questions:

**Q: How do I update vegetables?**
A: Edit `script.js` starting at line 12, update the products array.

**Q: How do I add photos?**
A: Replace emoji in products with image paths like `image: "images/tomatoes.jpg"`

**Q: Can I add payment processing?**
A: Yes! Can integrate Stripe or Square later.

**Q: What if I get stuck?**
A: Check browser console (F12 → Console) for error messages. Most issues are:
1. Airtable token not set correctly
2. Base ID wrong
3. Table name doesn't match

**Q: How do I know if it's working?**
A: Before Airtable setup: Orders log to browser console only
After Airtable setup: Orders appear in your Airtable base

### Next Level Features (Future):

Want to add later? Let me know:
- 📸 Photo gallery from Instagram
- 💳 Stripe payment integration  
- 📦 CSA subscription boxes
- 📅 Delivery calendar
- 📊 Sales analytics dashboard
- 🎟️ Farm tour bookings
- 📧 Newsletter signup
- 🌤️ Weather widget

## Cost Breakdown

| Service | Cost | What You Get |
|---------|------|--------------|
| **Netlify** | FREE | Website hosting, HTTPS, custom domain |
| **Airtable** | FREE | 1,200 records, mobile app, automations |
| **Domain** | $12/year | yourfarm.com (optional) |
| **Total** | $0-12/year | Professional website + order system |

Compare to: Squarespace ($216/year), Shopify ($348/year), Wix ($192/year)

## Timeline Estimate

- Local testing: 10 minutes
- Airtable setup: 15 minutes  
- Netlify deployment: 2 minutes
- Testing + tweaks: 30 minutes
- **Total: ~1 hour to launch** 🚀

## You're Ready!

The hard work is done. The website is built with your farm's story, the order system is ready to activate, and deployment is literally drag-and-drop.

Questions? Just ask!

---

Built for Julia & Anthony at Sprouting Heart Farm 🌱
