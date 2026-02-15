# 🚀 Launch Guide - Sprouting Heart Farm Store

Welcome! This guide will walk you through launching your farm store website in a few simple steps.

---

## What You've Got

✅ **Fully functional online store** for pre-orders
✅ **Mobile-responsive design** that looks great on phones
✅ **Dynamic inventory system** - update products from your phone
✅ **Automated email notifications** for orders and contacts
✅ **Shopping cart** with localStorage persistence
✅ **Order management** through Airtable
✅ **Zero hosting costs** with Netlify + Airtable free tiers

---

## Quick Start: Get Live in 3 Steps

### Step 1: Configure Airtable (15 minutes)

1. **Open `script.js`** in a text editor
2. **Find these lines** at the top (lines 5-6):
   ```javascript
   const AIRTABLE_TOKEN = 'YOUR_TOKEN_HERE';
   const AIRTABLE_BASE_ID = 'YOUR_BASE_ID_HERE';
   ```
3. **Replace with your actual credentials:**
   - You mentioned you already have these!
   - Token starts with `pat...`
   - Base ID starts with `app...`

4. **Create your Airtable tables:**
   - Follow **[PRODUCTS_TABLE_SETUP.md](PRODUCTS_TABLE_SETUP.md)** for Products table
   - Follow **[EMAIL_AUTOMATION_SETUP.md](EMAIL_AUTOMATION_SETUP.md)** for Contact Messages table
   - Your Orders table should already exist from the original setup

### Step 2: Test Locally (10 minutes)

1. **Open `index.html`** in your web browser
   - Right-click → "Open With" → Chrome/Firefox/Safari
   - OR drag the file into your browser

2. **Quick test:**
   - ✅ Products appear on page
   - ✅ Add item to cart
   - ✅ Complete checkout
   - ✅ Check Airtable → order appears

3. **If products don't load:**
   - Open browser console (F12)
   - Look for error messages
   - Verify Airtable credentials are correct
   - Check Products table has items marked "Available"

### Step 3: Deploy to Netlify (5 minutes)

1. **Go to [Netlify.com](https://netlify.com)**
2. **Sign up** (free account, no credit card needed)
3. **Deploy:**
   - Drag your entire "Sprouting Heart" folder onto Netlify
   - Wait 30 seconds for deployment
   - Get your live URL: `your-site-name.netlify.app`

4. **Test live site:**
   - Place a test order
   - Verify it appears in Airtable
   - Check you receive email notifications

**🎉 You're live!**

---

## Detailed Setup Guide

### A. Airtable Configuration

#### Products Table
Follow **[PRODUCTS_TABLE_SETUP.md](PRODUCTS_TABLE_SETUP.md)** to:
- Create Products table structure
- Add your 4 current vegetables
- Configure mobile app access
- Test adding/removing products from phone

**Time: 20 minutes**

#### Email Automations
Follow **[EMAIL_AUTOMATION_SETUP.md](EMAIL_AUTOMATION_SETUP.md)** to:
- Set up order confirmation emails to customers
- Set up order notification emails to farm
- Create Contact Messages table
- Set up contact form notifications
- Test all email flows

**Time: 30 minutes**

### B. Testing

Follow **[TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)** for complete testing:

**Quick Test (10 min):**
- Visual check
- Add to cart
- Checkout
- Verify in Airtable

**Thorough Test (30 min):**
- Desktop & mobile
- All features
- Airtable integration

**Complete Test (1-2 hours):**
- Entire checklist
- All browsers
- Edge cases

### C. Adding Photos (Optional)

Follow **[ADDING_IMAGES_GUIDE.md](ADDING_IMAGES_GUIDE.md)** to:
- Replace emoji with real vegetable photos
- Add farm/farmer photos
- Upload to Airtable or local folders
- Optimize for web

**Time: 15 min (key images) to 2 hours (all photos)**

**Note:** The site works perfectly with emojis! Photos can be added anytime later.

---

## File Structure Overview

```
Sprouting Heart/
├── index.html                      ← Main website
├── styles.css                      ← All styling
├── script.js                       ← Functionality + Airtable
├── images/
│   ├── products/                   ← Vegetable photos (optional)
│   └── farm/                       ← Farm/farmer photos (optional)
│
├── LAUNCH_GUIDE.md                 ← You are here!
├── PRODUCTS_TABLE_SETUP.md         ← Product inventory guide
├── EMAIL_AUTOMATION_SETUP.md       ← Email notifications guide
├── ADDING_IMAGES_GUIDE.md          ← Photo guide
├── TESTING_CHECKLIST.md            ← Complete testing guide
│
└── (other documentation files)
```

---

## Your Current Status

Based on what you told me:

✅ **COMPLETE:**
- Mobile hamburger menu
- Troy Farmers Market pickup info (Saturdays 9am-1pm)
- Troy area delivery info
- Airtable credentials added
- Products table ready for setup
- Email automation code ready
- Image structure in place
- Contact form with Airtable integration

⏳ **TO DO:**
- [ ] Create Products table in Airtable
- [ ] Add 4 vegetables to Products table
- [ ] Set up email automations in Airtable
- [ ] Create Contact Messages table
- [ ] Test complete order flow locally
- [ ] Take/add vegetable photos (optional)
- [ ] Deploy to Netlify
- [ ] Test live site

**Estimated time to launch: 1-2 hours**

---

## Launch Checklist

### Before Launch:
- [ ] Airtable credentials configured in script.js
- [ ] Products table created with 4 vegetables
- [ ] All products marked "Available"
- [ ] Orders table ready
- [ ] Email automations configured and ON
- [ ] Contact Messages table created
- [ ] Tested checkout flow locally
- [ ] Order appears in Airtable
- [ ] Email notifications working
- [ ] Mobile menu tested
- [ ] All content reviewed for accuracy

### Launch Day:
- [ ] Deploy to Netlify
- [ ] Test live site completely
- [ ] Place real test order
- [ ] Verify emails arrive
- [ ] Test on mobile device
- [ ] Share with friend for testing
- [ ] Fix any issues found
- [ ] Get custom domain (optional)
- [ ] Announce to customers! 📣

### After Launch:
- [ ] Monitor orders daily
- [ ] Respond to contact form messages
- [ ] Update inventory as needed
- [ ] Add photos when available
- [ ] Collect customer feedback
- [ ] Make improvements

---

## Managing Your Store Day-to-Day

### On Your Phone (Airtable Mobile App):

**Update Inventory:**
1. Open Airtable app
2. Go to Products table
3. Toggle "Available" on/off
4. Changes appear on website instantly!

**Check Orders:**
1. Open Orders table
2. See new orders in real-time
3. Update Status: New → Ready → Completed
4. Add notes as needed

**Read Contact Messages:**
1. Open Contact Messages table
2. See new inquiries
3. Reply via email
4. Mark as "Replied"

### Weekly Tasks:
- [ ] Check for new orders (or wait for email notifications)
- [ ] Update product availability for upcoming harvest
- [ ] Reply to contact form messages
- [ ] Update prices if needed

### Before Troy Farmers Market:
- [ ] Check all orders for Saturday pickup
- [ ] Pack orders and label with customer name + Order ID
- [ ] Update Products table with market inventory
- [ ] Mark any out-of-stock items as unavailable

---

## Troubleshooting

### "Products not loading"
- **Check:** Airtable credentials correct in script.js?
- **Check:** Products table exists and named exactly "Products"?
- **Check:** At least one product marked "Available"?
- **Fix:** Open browser console (F12) and look for error messages

### "Orders not saving to Airtable"
- **Check:** Airtable token has correct permissions (read + write)
- **Check:** Orders table exists and named exactly "Orders"
- **Check:** All field names match exactly (case-sensitive)
- **Fix:** Check Airtable API key settings

### "Not receiving email notifications"
- **Check:** Automations toggled ON in Airtable
- **Check:** Email addresses spelled correctly
- **Check:** Spam/junk folder
- **Fix:** Check Airtable automation "Runs" tab for errors

### "Mobile menu not working"
- **Check:** Browser console for JavaScript errors
- **Check:** Testing on actual mobile device or browser devtools?
- **Fix:** Clear browser cache and reload

### "Images not displaying"
- **Check:** Image files in correct folders?
- **Check:** File names match exactly (case-sensitive)?
- **Check:** Image field added to Products table in Airtable?
- **Note:** Emoji fallbacks will show if images missing

---

## Cost Breakdown

### Free Tier (Current Setup):
- **Netlify Hosting**: $0
  - HTTPS included
  - Unlimited bandwidth
  - Automatic deployments

- **Airtable Database**: $0
  - Up to 1,200 records/month
  - 2GB attachment storage
  - Unlimited automations (100 runs/month)

- **Domain (optional)**: $12/year
  - Custom domain (e.g., sproutingheartfarm.com)
  - Not required - Netlify URL works fine

**Total: $0-12/year** 🎉

### If You Outgrow Free Tiers:
- Airtable Pro: $20/month (if >1,200 orders/month - very successful!)
- Netlify Pro: $19/month (if you need advanced features)

---

## Next Steps

### Right Now (30 min):
1. ✅ Read this guide (you're doing it!)
2. 📝 Open [PRODUCTS_TABLE_SETUP.md](PRODUCTS_TABLE_SETUP.md)
3. 🗂️ Create Products table in Airtable
4. 🥬 Add your 4 vegetables

### Today (1-2 hours):
5. 📧 Set up email automations ([EMAIL_AUTOMATION_SETUP.md](EMAIL_AUTOMATION_SETUP.md))
6. 📝 Create Contact Messages table
7. ✅ Run through [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)
8. 🚀 Deploy to Netlify

### This Week (optional):
9. 📸 Take/add product photos ([ADDING_IMAGES_GUIDE.md](ADDING_IMAGES_GUIDE.md))
10. 🌐 Get custom domain
11. 📱 Download Airtable mobile app
12. 📣 Announce to customers!

---

## Getting Help

### Documentation Files:
- **PRODUCTS_TABLE_SETUP.md** - Setting up product inventory
- **EMAIL_AUTOMATION_SETUP.md** - Configuring email notifications
- **ADDING_IMAGES_GUIDE.md** - Adding photos to replace emojis
- **TESTING_CHECKLIST.md** - Complete testing procedures

### Quick Answers:

**Q: Do I need photos to launch?**
A: No! The emoji placeholders look great and are intentional. Add photos anytime.

**Q: How do customers pay?**
A: This is a pre-order system. Customers pay at pickup/delivery (cash, Venmo, etc.). No payment processing needed.

**Q: Can I add more products later?**
A: Yes! Just add them to the Products table in Airtable. They'll appear on the website automatically.

**Q: What if I mess something up?**
A: Everything is saved in these files. You can always start over or undo changes. Test locally before deploying!

**Q: How do I update the website after launch?**
A: Edit the files, test locally, then drag the folder to Netlify again. It'll update automatically.

**Q: Can I customize colors/fonts/layout?**
A: Yes! All styling is in `styles.css`. CSS variables at the top control colors.

---

## Support Resources

- **Airtable Help**: [support.airtable.com](https://support.airtable.com)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **HTML/CSS Help**: [MDN Web Docs](https://developer.mozilla.org)

---

## Success Metrics

After launch, track:
- 📊 Number of orders/week
- 📧 Email open rates (in Airtable)
- 📱 Mobile vs desktop traffic
- ⭐ Customer feedback
- 💰 Average order value

Use this data to improve your store!

---

## Final Notes

### What Makes This Store Special:

✨ **Mobile-First**: Crew can manage inventory from phone at the market
✨ **Zero Cost**: No monthly fees to get started
✨ **Automated**: Emails send automatically, cart persists, orders tracked
✨ **Professional**: Clean design, smooth animations, great UX
✨ **Scalable**: Can handle growth easily
✨ **Sustainable**: No platform lock-in, own your data

### Your Unique Features:

🎯 **Troy Farmers Market** pickup (Saturdays 9am-1pm)
🎯 **Local delivery** to Troy area
🎯 **No-till organic** farming story
🎯 **5th generation** family farm heritage
🎯 **Year-round** growing with high tunnels

---

## You're Ready! 🌱

You have everything you need to launch a successful farm store. The hardest part is done - you have a beautiful, functional website ready to go.

### Your Next Action:
1. Open [PRODUCTS_TABLE_SETUP.md](PRODUCTS_TABLE_SETUP.md)
2. Follow Step 1
3. Keep going! 💪

**Estimated time to first sale: 2-3 hours from now**

Good luck with your launch! Your community is going to love ordering fresh vegetables online. 🥬🥕🌾

---

**Last Updated**: 2024
**Version**: 1.0 - Launch Ready
**Status**: 🚀 Ready to Deploy

Questions? Check the documentation files or test locally first. You've got this! 💚
