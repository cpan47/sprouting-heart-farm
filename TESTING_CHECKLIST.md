# Testing Checklist for Sprouting Heart Farm Store

Use this checklist to test your website before going live. Test everything locally first, then again after deploying to Netlify.

---

## Pre-Testing Setup

- [ ] Airtable credentials configured in `script.js`
- [ ] Orders table created in Airtable
- [ ] Products table created in Airtable (with at least 4 products marked "Available")
- [ ] Contact Messages table created in Airtable
- [ ] Email automations configured in Airtable
- [ ] All automations toggled ON

---

## Part 1: Visual Testing (Desktop)

### Navigation
- [ ] Logo displays correctly
- [ ] All menu links visible (Home, About, Shop, Contact)
- [ ] Cart button visible with "0" count
- [ ] Navigation is fixed at top when scrolling
- [ ] Menu links navigate to correct sections smoothly
- [ ] Cart icon shows correct styling

### Hero Section
- [ ] Title "Growing With Nature" displays properly
- [ ] Subtitle text is readable
- [ ] Both buttons visible ("Pre-Order Now" and "Our Story")
- [ ] Buttons navigate to correct sections
- [ ] Emoji or image displays
- [ ] "Scroll to explore" indicator appears
- [ ] Animations play smoothly

### About Section
- [ ] Section title displays
- [ ] Farm story text is readable
- [ ] Three stat cards display (5th Generation, No-Till, Year Round)
- [ ] Emoji or farm image displays
- [ ] Cards have hover effect

### Shop Section
- [ ] Section title "This Week's Harvest" appears
- [ ] Products load (either from Airtable or fallback)
- [ ] Each product card shows:
  - [ ] Image or emoji
  - [ ] Product name
  - [ ] Price (formatted as $X.XX)
  - [ ] Description
  - [ ] Season badge
  - [ ] Unit badge
  - [ ] "Add to Cart" button
- [ ] Product cards have hover effect (lift up)
- [ ] Cards arranged in grid layout

### Pickup Info Section
- [ ] Section title appears
- [ ] Two cards display side by side
- [ ] Troy Farmers Market info shows "Saturdays 9am-1pm"
- [ ] Local Delivery shows "Troy area"
- [ ] Both cards have icons
- [ ] Hover effects work

### Contact Section
- [ ] Section title "Get In Touch" appears
- [ ] Instagram handle visible: @sproutingheartfarm
- [ ] Email address visible
- [ ] Location shows "Brunswick, NY"
- [ ] Contact form displays with all fields:
  - [ ] Name field
  - [ ] Email field
  - [ ] Message field
  - [ ] Send button

### Footer
- [ ] Farm name appears
- [ ] Copyright notice displays
- [ ] Background is green

---

## Part 2: Mobile Testing

### Setup
- [ ] Resize browser to mobile width (< 768px) OR test on actual phone
- [ ] Open Chrome DevTools → Toggle device toolbar

### Mobile Navigation
- [ ] Hamburger menu icon (3 lines) appears
- [ ] Regular menu items are hidden
- [ ] Cart button still visible
- [ ] Click hamburger → menu slides in from left
- [ ] Menu items appear in vertical list
- [ ] Click menu item → menu closes and navigates
- [ ] Click hamburger again → menu closes (X animation)

### Mobile Layout
- [ ] Hero section: text and image stack vertically
- [ ] About section: image and text stack vertically
- [ ] Product grid: single column
- [ ] Pickup cards: stack vertically
- [ ] Contact section: info and form stack vertically
- [ ] All text is readable (not too small)
- [ ] No horizontal scrolling
- [ ] Buttons are tappable (not too small)

---

## Part 3: Shopping Cart Functionality

### Adding Items
- [ ] Click "Add to Cart" on a product
- [ ] Green notification appears: "[Product] added to cart!"
- [ ] Cart count badge updates (0 → 1)
- [ ] Click same product again → count increases (1 → 2)
- [ ] Add different product → count includes both
- [ ] Notification disappears after 2 seconds

### Viewing Cart
- [ ] Click cart button
- [ ] Modal appears with backdrop
- [ ] Cart header shows "Your Cart"
- [ ] X button appears in top right
- [ ] Cart items display with:
  - [ ] Product name
  - [ ] Price per unit
  - [ ] Quantity with - and + buttons
  - [ ] Remove button
- [ ] Cart total calculates correctly
- [ ] "Proceed to Checkout" button at bottom

### Cart Interactions
- [ ] Click + button → quantity increases, total updates
- [ ] Click - button → quantity decreases, total updates
- [ ] Click - at quantity 1 → item removed from cart
- [ ] Click "Remove" → item removed immediately
- [ ] Cart updates count badge
- [ ] Click X → modal closes
- [ ] Click backdrop (outside modal) → modal closes
- [ ] Empty cart shows "Your cart is empty"

### Cart Persistence
- [ ] Add items to cart
- [ ] Refresh page (F5)
- [ ] Cart still has items
- [ ] Cart count badge correct
- [ ] Open cart → items still there

---

## Part 4: Checkout Process

### Opening Checkout
- [ ] Add items to cart
- [ ] Click "Proceed to Checkout"
- [ ] Cart modal closes
- [ ] Checkout modal opens
- [ ] Checkout header shows "Complete Your Order"

### Checkout Form
- [ ] All fields present:
  - [ ] Full Name (required)
  - [ ] Email (required)
  - [ ] Phone (required)
  - [ ] Pickup/Delivery Method dropdown (required)
  - [ ] Additional Notes (optional)
- [ ] Dropdown options show:
  - [ ] "Troy Farmers Market (Saturdays 9am-1pm)"
  - [ ] "Local Delivery (Troy area)"
- [ ] Order total displays at bottom
- [ ] "Complete Pre-Order" button visible

### Form Validation
- [ ] Try submitting empty form → error (fields turn red)
- [ ] Enter name only → still error
- [ ] Enter email only → still error
- [ ] Enter invalid email → error
- [ ] Fill all required fields → form submits

### Successful Checkout (with Airtable configured)
- [ ] Fill out all fields
- [ ] Select pickup method
- [ ] Click "Complete Pre-Order"
- [ ] Button changes to "Processing..."
- [ ] Button disabled during submission
- [ ] Success notification appears with Order ID
- [ ] Modal closes automatically
- [ ] Cart empties (count → 0)
- [ ] Form resets
- [ ] Check Airtable Orders table → new record appears
- [ ] All order details correct in Airtable

### Demo Mode (without Airtable)
- [ ] With placeholder credentials
- [ ] Click checkout
- [ ] Warning notification: "Demo mode: Order logged to console"
- [ ] Open browser console (F12)
- [ ] Order details logged to console
- [ ] Cart clears after 3 seconds

---

## Part 5: Airtable Integration Testing

### Products Loading
- [ ] Open browser console (F12)
- [ ] Refresh page
- [ ] Look for: "🔄 Fetching products from Airtable..."
- [ ] Verify: "✅ Loaded X products from Airtable"
- [ ] OR: "📦 Using fallback products" (if not configured)
- [ ] Products on page match Airtable Products table
- [ ] Only products with "Available" checked appear

### Product Updates (Dynamic Inventory)
- [ ] Open Airtable Products table
- [ ] Uncheck "Available" on one product
- [ ] Refresh website
- [ ] Product disappears from shop
- [ ] Check "Available" again
- [ ] Refresh website
- [ ] Product reappears

### Order Submission
- [ ] Place a test order with real email
- [ ] Check Airtable Orders table immediately
- [ ] New record appears with:
  - [ ] Unique Order ID (SHF-XXXXXX)
  - [ ] Today's date
  - [ ] Correct customer name
  - [ ] Correct email
  - [ ] Correct phone
  - [ ] Correct pickup method
  - [ ] Formatted order items list
  - [ ] Correct order total
  - [ ] Customer notes (if provided)
  - [ ] Status: "New"

### Email Notifications (if automations set up)
- [ ] Place test order with your email
- [ ] Check email inbox within 1-2 minutes
- [ ] Receive order confirmation email
- [ ] Email contains:
  - [ ] Correct order ID
  - [ ] Correct items
  - [ ] Correct total
  - [ ] Pickup method info
  - [ ] Farm contact info
- [ ] Check farm email (sproutingheartfarm@gmail.com)
- [ ] Receive order notification email
- [ ] Email contains all order details

### Contact Form
- [ ] Fill out contact form
- [ ] Submit with real email
- [ ] Success notification appears
- [ ] Check Airtable Contact Messages table
- [ ] New record appears with:
  - [ ] Name
  - [ ] Email
  - [ ] Message
  - [ ] Today's date
  - [ ] Status: "New"
- [ ] Check farm email for contact notification (if automation set up)

---

## Part 6: Browser Compatibility

Test on multiple browsers:

### Chrome/Edge (Chromium)
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Firefox
- [ ] All features work
- [ ] Layout correct
- [ ] Modals work

### Safari (Mac/iPhone)
- [ ] All features work
- [ ] Backdrop blur works
- [ ] Touch interactions work

### Mobile Browsers
- [ ] Chrome (Android)
- [ ] Safari (iOS)
- [ ] Hamburger menu works
- [ ] Touch scrolling smooth

---

## Part 7: Performance Testing

### Page Load Speed
- [ ] Page loads within 3 seconds
- [ ] Products appear quickly
- [ ] No flash of unstyled content
- [ ] Animations don't cause lag

### Interactions
- [ ] Adding to cart is instant
- [ ] Cart updates immediately
- [ ] Modals open/close smoothly
- [ ] No freezing or stuttering

### Console Errors
- [ ] Open browser console (F12)
- [ ] No red error messages
- [ ] No 404 errors (missing files)
- [ ] Only expected warnings (if any)

---

## Part 8: Airtable Mobile App Testing

### Setup
- [ ] Download Airtable mobile app
- [ ] Sign in with farm account
- [ ] Open Sprouting Heart base

### Managing Products on Phone
- [ ] Open Products table
- [ ] View all products
- [ ] Toggle "Available" checkbox
- [ ] Refresh website → product appears/disappears
- [ ] Edit a price
- [ ] Refresh website → new price shows
- [ ] Add a new product
- [ ] Mark it available
- [ ] Refresh website → new product appears

### Managing Orders on Phone
- [ ] Place order on website
- [ ] Check phone immediately
- [ ] New order appears in Orders table
- [ ] All details visible
- [ ] Change Status to "Ready"
- [ ] Add notes to order
- [ ] Updates save correctly

---

## Part 9: Edge Cases & Error Handling

### Empty States
- [ ] Cart with 0 items shows "Your cart is empty"
- [ ] Checkout button disabled when cart empty
- [ ] No products available → shop section empty

### Network Issues
- [ ] Turn off WiFi briefly
- [ ] Try to checkout
- [ ] Error message appears
- [ ] Turn WiFi back on
- [ ] Retry → works

### Invalid Data
- [ ] Try to order with email "test"
- [ ] Form validation catches it
- [ ] Enter phone as "abc"
- [ ] Form validation works

### Large Orders
- [ ] Add 10+ items to cart
- [ ] Cart scrolls properly
- [ ] Total calculates correctly
- [ ] Checkout works

---

## Part 10: Pre-Launch Final Checks

### Content Review
- [ ] All text has correct spelling
- [ ] Farm name spelled correctly everywhere
- [ ] Email address correct
- [ ] Instagram handle correct
- [ ] Pickup times/locations accurate
- [ ] Prices match actual prices
- [ ] Product descriptions accurate

### Airtable Setup
- [ ] All tables created
- [ ] All fields configured
- [ ] Sample data removed (test orders)
- [ ] Automations tested and ON
- [ ] Permissions set correctly

### Files & Deployment
- [ ] All images in correct folders
- [ ] No test files in deployment
- [ ] README files present
- [ ] Documentation complete

---

## Part 11: Post-Deployment Testing

After deploying to Netlify, test the live site:

### Basic Functionality
- [ ] Website loads at correct URL
- [ ] HTTPS working (padlock icon)
- [ ] All pages load
- [ ] Products load from Airtable
- [ ] Images load correctly

### Full Order Test
- [ ] Place real order on live site
- [ ] Verify order in Airtable
- [ ] Receive confirmation email
- [ ] Farm receives notification email

### Mobile Test
- [ ] Test on actual phone
- [ ] Test on tablet
- [ ] Test mobile data (not just WiFi)

### Share & Test
- [ ] Send link to friend
- [ ] Ask them to browse site
- [ ] Ask them to place test order
- [ ] Verify their order appears

---

## Troubleshooting Common Issues

### Products not loading
- **Check:** Airtable credentials correct?
- **Check:** Products table name = "Products"?
- **Check:** At least one product marked "Available"?
- **Check:** Browser console for error messages

### Orders not saving
- **Check:** Airtable token has write permissions
- **Check:** Orders table name = "Orders"
- **Check:** All field names match exactly (case-sensitive)
- **Check:** Network connection working

### Emails not sending
- **Check:** Automations toggled ON
- **Check:** Email addresses spelled correctly
- **Check:** Check spam/junk folder
- **Check:** Airtable automation "Runs" tab for errors

### Cart not persisting
- **Check:** LocalStorage enabled in browser
- **Check:** Not in incognito/private mode
- **Check:** Browser not blocking cookies

### Mobile menu not working
- **Check:** Browser console for JavaScript errors
- **Check:** Hamburger button clickable
- **Check:** Test on different mobile browser

---

## Testing Timeline

### Quick Test (10 minutes)
- [ ] Visual check all sections
- [ ] Add item to cart
- [ ] Complete checkout
- [ ] Verify order in Airtable

### Thorough Test (30 minutes)
- [ ] Complete Parts 1-4 above
- [ ] Test on desktop + mobile
- [ ] Test Airtable integration

### Complete Test (1-2 hours)
- [ ] Complete entire checklist
- [ ] Test all browsers
- [ ] Test all features
- [ ] Deploy and retest

---

## Sign-Off Checklist

Before announcing the website:

- [ ] All critical tests passed
- [ ] Airtable integration working
- [ ] Emails sending correctly
- [ ] Mobile experience smooth
- [ ] No console errors
- [ ] Content reviewed and accurate
- [ ] At least one successful test order placed
- [ ] Farm email receiving notifications
- [ ] Products loading from Airtable
- [ ] Mobile app tested for inventory management

---

## Testing Notes

Use this space to document any issues found:

```
Date: ___________
Issue:
Solution:

Date: ___________
Issue:
Solution:
```

---

## Quick Reference: Test Order Data

Use this test data for checkout:

**Customer 1:**
- Name: Julia Test
- Email: your-email@example.com
- Phone: (518) 555-0100
- Method: Troy Farmers Market
- Notes: This is a test order

**Customer 2:**
- Name: Anthony Sample
- Email: your-email@example.com
- Phone: (518) 555-0101
- Method: Local Delivery
- Notes: Please call before delivery

---

## After Testing

- [ ] Document any bugs found
- [ ] Fix critical issues
- [ ] Retest after fixes
- [ ] Mark this checklist complete
- [ ] Save for future reference
- [ ] Ready to launch! 🚀

---

**Last Updated:** ___________
**Tested By:** ___________
**Status:** ⬜ In Progress  ⬜ Complete  ⬜ Issues Found

Good luck with your launch! 🌱
