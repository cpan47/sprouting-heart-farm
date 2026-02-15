# ⚙️ Configuration Checklist

Use this checklist to make sure everything is configured correctly.

## 📝 Before Launch

### File Configuration

#### script.js (Lines 5-7)
```javascript
// BEFORE (default):
const AIRTABLE_TOKEN = 'YOUR_TOKEN_HERE';
const AIRTABLE_BASE_ID = 'YOUR_BASE_ID_HERE';

// AFTER (your values):
const AIRTABLE_TOKEN = 'pat_xxxxxxxxxxxxx';  // ✅ Starts with 'pat'
const AIRTABLE_BASE_ID = 'appxxxxxxxxxxxxx';  // ✅ Starts with 'app'
```

- [ ] Airtable token is set (get from airtable.com/create/tokens)
- [ ] Base ID is set (get from airtable.com/api)
- [ ] Token starts with `pat` (not `key` - that's old method)
- [ ] Base ID starts with `app`

### Airtable Setup

- [ ] Created "Sprouting Heart Farm Orders" base
- [ ] Created "Orders" table
- [ ] Added all required fields (see AIRTABLE_SETUP.md)
- [ ] Personal Access Token created with correct permissions
- [ ] Base added to token access list

### Email Automations (Recommended)

- [ ] New order notification to farm (you get notified)
- [ ] Order confirmation to customer (they get confirmation)
- [ ] Ready notification to customer (when order is ready)
- [ ] All automations are turned ON (toggle switch)

## 🧪 Testing

### Local Testing
- [ ] Open index.html in browser
- [ ] Website loads correctly
- [ ] Navigation works
- [ ] Can add items to cart
- [ ] Cart count updates
- [ ] Can view cart
- [ ] Can adjust quantities
- [ ] Can remove items
- [ ] Checkout form appears
- [ ] All fields are required

### Airtable Integration Testing
- [ ] Submit a test order
- [ ] Check browser console for errors (F12 → Console)
- [ ] Order appears in Airtable within 5 seconds
- [ ] All order details are correct
- [ ] Email notification received (if automation set up)
- [ ] Order ID is generated (format: SHF-######)
- [ ] Order status shows as "New"

### Mobile Testing
- [ ] Website looks good on phone
- [ ] Can navigate on mobile
- [ ] Cart works on mobile
- [ ] Checkout form works on mobile
- [ ] Airtable mobile app installed
- [ ] Can view orders in Airtable app

## 🚀 Deployment

### Netlify Deployment
- [ ] Created Netlify account
- [ ] Uploaded project folder
- [ ] Site is live (check the URL)
- [ ] Test full order flow on live site
- [ ] Share URL with test user
- [ ] Confirm they can place order

### Optional: Custom Domain
- [ ] Purchased domain (e.g., sproutingheartfarm.com)
- [ ] Connected to Netlify
- [ ] HTTPS is working
- [ ] Test site at custom domain

## 📧 Contact Info

### Verify Contact Details
- [ ] Instagram: @sproutingheartfarm ✅
- [ ] Email: sproutingheartfarm@gmail.com (or your email)
- [ ] Location: Brunswick, NY ✅
- [ ] All contact info is correct in index.html

## 🎨 Content Updates

### Current Status
- [ ] Farm name: Sprouting Heart Farm ✅
- [ ] Owners: Julia & Anthony ✅
- [ ] Location: Brunswick, NY ✅
- [ ] Farm story is accurate ✅
- [ ] Pickup/delivery info is accurate (update if needed)

### To Update Later
- [ ] Product list with current vegetables
- [ ] Product prices
- [ ] Real farm photos
- [ ] Specific pickup times
- [ ] Market schedule (if applicable)

## ⚠️ Common Issues

### "Orders not appearing in Airtable"
Check:
- [ ] Token and Base ID are correct in script.js
- [ ] Token has write permissions
- [ ] Table name is exactly "Orders"
- [ ] Browser console for error messages

### "Getting 403 or 401 errors"
- [ ] Token is correct and not expired
- [ ] Token has access to the specific base
- [ ] Scopes include: data.records:read and data.records:write

### "No email notifications"
- [ ] Automations are turned ON in Airtable
- [ ] Email addresses are correct
- [ ] Check spam folder
- [ ] Automation trigger matches your setup

### "Website looks broken on mobile"
- [ ] Clear browser cache
- [ ] Test in different browser
- [ ] Check CSS file loaded correctly

## ✅ Ready to Launch When:

- [ ] Test order successfully saved to Airtable
- [ ] You received email notification
- [ ] Site looks good on mobile
- [ ] All links work
- [ ] Contact info is correct
- [ ] Products are updated (or placeholder is fine for testing)
- [ ] You've tested the full customer flow

## 🎯 Post-Launch

### First Week
- [ ] Share link with friends/family for feedback
- [ ] Post on Instagram
- [ ] Monitor first few orders closely
- [ ] Adjust product list based on availability
- [ ] Update prices if needed

### Ongoing
- [ ] Check Airtable daily for orders
- [ ] Update order status (New → Packed → Ready)
- [ ] Add/remove products as seasons change
- [ ] Replace emoji with real photos
- [ ] Collect customer feedback

---

**Need help?** Check browser console (F12) for error messages or reach back out!

**Status tracking tip:** In Airtable, create filtered views:
- "Today's Orders" - Date = Today
- "Pending" - Status = New or Packed  
- "Ready for Pickup" - Status = Ready
- "This Week" - Date within last 7 days
