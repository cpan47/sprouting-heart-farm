# Quick Reference Guide

Fast answers to common questions. For detailed guides, see the linked documentation.

---

## 🚀 First Time Setup

**Time: 1-2 hours**

1. **Configure Airtable** (15 min)
   - Add your token and base ID to [script.js:5-6](script.js#L5-L6)
   - Create Products table → [PRODUCTS_TABLE_SETUP.md](PRODUCTS_TABLE_SETUP.md)

2. **Test Locally** (10 min)
   - Open [index.html](index.html) in browser
   - Place test order
   - Check Airtable

3. **Deploy** (5 min)
   - Go to [netlify.com](https://netlify.com)
   - Drag folder to deploy
   - Test live site

**📖 Full guide**: [LAUNCH_GUIDE.md](LAUNCH_GUIDE.md)

---

## 📝 Daily Management

### Update Products (30 seconds)
1. Open Airtable mobile app
2. Go to Products table
3. Toggle "Available" checkbox
4. ✅ Website updates automatically!

### Check Orders (1 minute)
1. Check email for new order notifications
2. OR open Airtable Orders table
3. See order details
4. Update Status when ready

### Before Market Day
- [ ] Check orders for Saturday pickup
- [ ] Pack orders (label with Order ID)
- [ ] Update product availability
- [ ] Mark sold-out items unavailable

---

## 🛠️ Common Tasks

### Add New Product
1. Airtable → Products table → Add record
2. Fill in: Name, Price, Unit, Description, Emoji, Season
3. Check "Available"
4. Product appears on website!

**Guide**: [PRODUCTS_TABLE_SETUP.md](PRODUCTS_TABLE_SETUP.md)

### Remove Product from Website
1. Airtable → Products table
2. Find product
3. Uncheck "Available"
4. Product disappears!
(Record stays in Airtable for later)

### Change Price
1. Airtable → Products table
2. Find product
3. Edit "Price" field
4. New price shows on website immediately

### Add Product Photo
**Option A**: Add to Airtable
1. Products table → Add "Image" field (Attachment type)
2. Upload photo to product record
3. Done! Shows on website

**Option B**: Add to files
1. Save photo to `images/products/`
2. Name it (e.g., `carrots.jpg`)
3. Update code (see [ADDING_IMAGES_GUIDE.md](ADDING_IMAGES_GUIDE.md))

---

## 🔧 Quick Fixes

### Products Not Showing
**Check:**
- ✅ Airtable credentials in [script.js](script.js:5-6)?
- ✅ Products table named exactly "Products"?
- ✅ At least one product marked "Available"?
- ✅ Browser console (F12) for errors?

### Orders Not Saving
**Check:**
- ✅ Orders table exists?
- ✅ Field names match exactly?
- ✅ Airtable token has write permission?

### No Email Notifications
**Check:**
- ✅ Automations toggled ON in Airtable?
- ✅ Email addresses correct?
- ✅ Check spam folder?
- ✅ Airtable → Automations → "Runs" tab for errors?

### Mobile Menu Not Working
**Check:**
- ✅ Clear browser cache?
- ✅ JavaScript errors in console (F12)?
- ✅ Test in different browser?

---

## 📊 File Structure

```
Sprouting Heart/
├── index.html              ← Website structure
├── styles.css              ← All design/styling
├── script.js               ← Functionality
│
├── images/
│   ├── products/           ← Vegetable photos
│   └── farm/               ← Farm photos
│
├── LAUNCH_GUIDE.md         ← Complete launch guide
├── QUICK_REFERENCE.md      ← This file!
├── PRODUCTS_TABLE_SETUP.md ← Product inventory guide
├── EMAIL_AUTOMATION_SETUP.md ← Email setup guide
├── ADDING_IMAGES_GUIDE.md  ← Photo guide
└── TESTING_CHECKLIST.md    ← Testing procedures
```

---

## 🔑 Key Configuration

### Airtable Credentials ([script.js](script.js:5-9))
```javascript
const AIRTABLE_TOKEN = 'pat...';      // Your personal access token
const AIRTABLE_BASE_ID = 'app...';    // Your base ID
const AIRTABLE_ORDERS_TABLE = 'Orders';
const AIRTABLE_PRODUCTS_TABLE = 'Products';
const AIRTABLE_CONTACTS_TABLE = 'Contact Messages';
```

### Pickup Information ([index.html:112-126](index.html#L112-L126))
- Troy Farmers Market: Saturdays 9am-1pm
- Local Delivery: Troy area

### Contact Information ([index.html:132-138](index.html#L132-L138))
- Instagram: @sproutingheartfarm
- Email: sproutingheartfarm@gmail.com
- Location: Brunswick, NY

---

## 📱 Mobile App (Airtable)

### Setup
1. Download Airtable app (iOS/Android)
2. Sign in
3. Open your base

### Quick Actions
- **See new orders**: Orders table → Sort by newest
- **Update inventory**: Products table → Toggle Available
- **Change prices**: Products table → Edit Price field
- **Mark order ready**: Orders table → Change Status

---

## 💾 Backups

### Your Data is Safe
- **Airtable**: Backs up automatically, version history available
- **Website files**: Save folder backup before making changes
- **Netlify**: Keeps deployment history

### Before Making Changes
1. Copy "Sprouting Heart" folder
2. Rename copy: "Sprouting Heart Backup [date]"
3. Make changes to original
4. Test before deploying

---

## 🎨 Customization

### Change Colors ([styles.css:1-10](styles.css#L1-L10))
```css
:root {
    --color-primary: #2d5016;      /* Main green */
    --color-secondary: #d97706;     /* Orange accent */
    --color-accent: #dc2626;        /* Red for alerts */
    --color-bg: #faf8f5;            /* Cream background */
}
```

### Change Fonts ([index.html:10](index.html#L10))
Currently using:
- **Headings**: Crimson Pro (serif)
- **Body**: DM Sans (sans-serif)

### Change Text
All text in [index.html](index.html):
- Hero title: Line 36-38
- About section: Lines 66-68
- Pickup info: Lines 112-126
- Contact info: Lines 132-138

---

## 📈 Growth Path

### Starting Out (Free)
- ✅ Netlify hosting
- ✅ Airtable (up to 1,200 orders/month)
- ✅ Email notifications
- **Cost: $0/month**

### Getting Busy (Still Free!)
- 50+ orders/month
- Weekly harvest updates
- Growing customer base
- **Cost: $0/month**

### Very Successful (Need Upgrades)
- 1,200+ orders/month
- Consider Airtable Pro ($20/mo)
- Add payment processing
- Custom domain ($12/year)
- **Cost: ~$20/month**

---

## ⚡ Performance Tips

### Optimize Images
- Resize to 800x800px
- Compress to under 500KB
- Use JPG for photos
- Use PNG for graphics

### Fast Loading
- Keep products under 50
- Optimize images
- Use Netlify CDN (automatic)

### Mobile Speed
- Hamburger menu loads instantly
- Products load from Airtable quickly
- Cart updates are instant
- LocalStorage = no server delay

---

## 🎯 Best Practices

### Product Management
- ✅ Update availability before market day
- ✅ Mark sold-out items unavailable immediately
- ✅ Use seasonal products feature
- ✅ Keep descriptions concise (1-2 sentences)

### Order Management
- ✅ Check orders daily (or rely on email notifications)
- ✅ Update status: New → Ready → Completed
- ✅ Add notes for special requests
- ✅ Keep orders for history/records

### Customer Service
- ✅ Respond to contact form within 24 hours
- ✅ Send order ready notifications
- ✅ Clear pickup/delivery instructions
- ✅ Friendly, professional communication

---

## 🔒 Security Notes

### What's Secure
- ✅ HTTPS on Netlify (automatic)
- ✅ No payment data collected
- ✅ No customer passwords
- ✅ Airtable handles data security

### Known Limitations
- ⚠️ Airtable token visible in JavaScript (client-side)
- ⚠️ Anyone with token could submit fake orders
- ✅ Low risk for small farm
- ✅ Easy to spot fake orders
- ✅ Can regenerate token anytime

### Future Security Improvements
- Move Airtable calls to Netlify Functions (hides token)
- Add CAPTCHA to checkout
- Add rate limiting

---

## 📞 Getting Help

### Check These First
1. Browser console (F12) for error messages
2. Airtable automation "Runs" tab for email issues
3. [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md) for common problems

### Documentation Files
- **Launch**: [LAUNCH_GUIDE.md](LAUNCH_GUIDE.md)
- **Products**: [PRODUCTS_TABLE_SETUP.md](PRODUCTS_TABLE_SETUP.md)
- **Emails**: [EMAIL_AUTOMATION_SETUP.md](EMAIL_AUTOMATION_SETUP.md)
- **Photos**: [ADDING_IMAGES_GUIDE.md](ADDING_IMAGES_GUIDE.md)
- **Testing**: [TESTING_CHECKLIST.md](TESTING_CHECKLIST.md)

### External Resources
- **Airtable**: [support.airtable.com](https://support.airtable.com)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)

---

## ✅ Pre-Launch Checklist

Quick check before going live:

- [ ] Airtable credentials in script.js
- [ ] Products table with 4 vegetables
- [ ] Orders table exists
- [ ] Email automations ON
- [ ] Tested checkout locally
- [ ] Order appeared in Airtable
- [ ] Email notification received
- [ ] Mobile menu works
- [ ] All text reviewed

**Then**: Deploy to Netlify and test again! 🚀

---

## 🎓 Learning More

### HTML/CSS/JavaScript
- [MDN Web Docs](https://developer.mozilla.org) - Best web dev resource
- [CSS-Tricks](https://css-tricks.com) - CSS tips and tricks
- [JavaScript.info](https://javascript.info) - Learn JavaScript

### Airtable
- [Airtable University](https://airtable.com/universe) - Tutorials and templates
- [Airtable API Docs](https://airtable.com/api) - API documentation

### Web Design
- [Google Fonts](https://fonts.google.com) - Free fonts
- [Unsplash](https://unsplash.com) - Free photos
- [Coolors](https://coolors.co) - Color palette generator

---

## 🌟 Pro Tips

1. **Test before market day** - Make sure everything works before customers arrive
2. **Use mobile app** - Update inventory in real-time at the market
3. **Keep descriptions short** - Mobile users skim text quickly
4. **Update weekly** - Fresh product listings keep customers engaged
5. **Collect feedback** - Ask customers what they want to see
6. **Start simple** - Launch with emojis, add photos later
7. **Monitor emails** - Set up farm email on your phone
8. **Backup regularly** - Save folder copies before big changes

---

## 📅 Seasonal Workflow

### Spring
- Add spring vegetables
- Update "Season" field
- Market early lettuce, spinach

### Summer
- Peak harvest season
- Most products available
- Update inventory frequently

### Fall
- Transition to fall crops
- Mark summer items unavailable
- Promote storage crops

### Winter
- High tunnel vegetables
- Limited but valuable inventory
- Highlight year-round growing

---

**Need something specific?** Check the detailed guides above or search this file (Ctrl/Cmd + F)

**Ready to launch?** Start with [LAUNCH_GUIDE.md](LAUNCH_GUIDE.md)

**Good luck! 🥬🌱💚**
