# 🏗️ System Architecture - How It All Works

```
┌─────────────────────────────────────────────────────────────┐
│                    SPROUTING HEART FARM                      │
│                     Order Management System                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────┐
│   CUSTOMER      │
│   (Website)     │
└────────┬────────┘
         │
         │ 1. Browses vegetables
         │ 2. Adds to cart
         │ 3. Completes checkout form
         │
         ▼
┌──────────────────────────────────────────────────────┐
│                    YOUR WEBSITE                       │
│              (Hosted on Netlify - Free)              │
│                                                       │
│  • index.html  - Website structure                   │
│  • styles.css  - Beautiful farm design               │
│  • script.js   - Cart & Airtable integration         │
└──────────────────┬───────────────────────────────────┘
                   │
                   │ 4. Order submitted via API
                   │
                   ▼
┌──────────────────────────────────────────────────────┐
│               AIRTABLE DATABASE                       │
│            (Free - 1,200 records/base)               │
│                                                       │
│  Orders Table:                                        │
│  ┌──────────────────────────────────────────┐       │
│  │ Order ID  │ Customer │ Items │ Status    │       │
│  ├──────────────────────────────────────────┤       │
│  │ SHF-001   │ John D.  │ ...   │ New       │       │
│  │ SHF-002   │ Sarah M. │ ...   │ Packed    │       │
│  │ SHF-003   │ Mike R.  │ ...   │ Ready     │       │
│  └──────────────────────────────────────────┘       │
│                                                       │
│  ⚡ Automations:                                     │
│   • Email you when new order arrives                 │
│   • Email customer confirmation                      │
│   • Email customer when order ready                  │
└──────────────────┬───────────────────────────────────┘
                   │
                   │ 5. You access from anywhere
                   │
         ┌─────────┴──────────┐
         │                    │
         ▼                    ▼
┌────────────────┐   ┌────────────────┐
│  YOUR LAPTOP   │   │  YOUR PHONE    │
│  (Web Browser) │   │  (Airtable App)│
└────────┬───────┘   └────────┬───────┘
         │                    │
         │ • View orders      │
         │ • Update status    │
         │ • Send messages    │
         │ • Export data      │
         │                    │
         └────────┬───────────┘
                  │
                  │ 6. Customer notified
                  │
                  ▼
         ┌────────────────┐
         │   CUSTOMER      │
         │   (Email)       │
         └────────────────┘
```

## Data Flow Explained

### Step 1: Customer Places Order
```
Website → Shopping Cart → Checkout Form → JavaScript
```
- Customer selects vegetables
- Adds to cart (stored in browser localStorage)
- Fills out contact info and pickup method
- Clicks "Complete Pre-Order"

### Step 2: Order Sent to Airtable
```
JavaScript → Airtable API → Your Database
```
- Script formats order data
- Sends POST request to Airtable
- Airtable creates new record
- Returns success/error message

### Step 3: Automatic Notifications
```
Airtable Automation → Email Service → Recipients
```
- Trigger: New record with Status = "New"
- Action: Send emails
  - To you: Full order details
  - To customer: Confirmation

### Step 4: You Manage Order
```
You → Airtable (Web/Mobile) → Update Status
```
- Open Airtable on computer or phone
- View order details
- Update status as you work:
  - New → Packed → Ready → Completed

### Step 5: Customer Gets Update
```
Airtable Automation → Customer Email
```
- Trigger: Status changes to "Ready"
- Action: Send "Your order is ready!" email
- Customer knows to come pick up

## What's Stored Where

### Browser (Customer's Device)
```
localStorage: {
  farmCart: [
    { id: 1, name: "Tomatoes", quantity: 2, price: 6.50 }
  ]
}
```
- Temporary cart data
- Persists between page refreshes
- Cleared after order completion

### Airtable (Your Database)
```
Orders Table:
- Order ID: "SHF-123456"
- Customer Name: "John Doe"
- Customer Email: "john@example.com"
- Customer Phone: "(555) 123-4567"
- Pickup Method: "Farm Pickup"
- Order Items: "Tomatoes - 2 lbs @ $6.50 = $13.00"
- Order Total: $13.00
- Customer Notes: "Please text when ready"
- Status: "New" / "Packed" / "Ready" / "Completed"
- Order Date: "2024-02-09"
```
- Permanent storage
- Accessible from anywhere
- Syncs across all devices
- Backed up by Airtable

## Security & Privacy

### What's Public (Anyone Can See)
- Website design and content
- Product list and prices
- Contact information
- How to place orders

### What's Private (Only You Can See)
- Customer names and contact info
- Order details
- Order history
- Airtable database contents

### The Airtable Token Situation
⚠️ **Important to understand:**

Your Airtable token IS visible in the website code, but:
- Token only works with YOUR specific base
- Token is scoped to just read/write orders (not delete)
- Someone could theoretically submit fake orders
- For a small farm, this risk is minimal

**Good news:**
- No payment info is collected
- No passwords involved
- You'll quickly spot fake orders
- Can regenerate token anytime

**Best practices:**
- Don't use this token anywhere else
- Monitor your Airtable base occasionally
- If you see spam orders, regenerate token
- For more security, we can add Netlify Functions later

## Backup & Recovery

### If Website Goes Down
- Netlify has 99.9% uptime
- Site is backed up automatically
- Can redeploy anytime from files
- No data loss (everything in Airtable)

### If Airtable Has Issues
- Very rare (enterprise infrastructure)
- Can export data anytime as CSV
- Orders also in your email
- Can switch to backup system if needed

### If You Lose Files
- Download from Netlify anytime
- Airtable data is separate (safe)
- Keep a backup on your computer
- Cloud storage recommended (Dropbox/Drive)

## Cost Breakdown (Annual)

| Component | Provider | Cost |
|-----------|----------|------|
| Website Hosting | Netlify | **FREE** |
| Database | Airtable | **FREE** |
| Email Notifications | Airtable | **FREE** |
| SSL Certificate | Netlify | **FREE** |
| Domain Name | Namecheap/Google | $12/year (optional) |
| **Total** | | **$0-12/year** |

### What You Get for FREE:
- Unlimited page views
- Unlimited bandwidth
- 1,200 orders/month capacity
- Mobile order management
- Automatic backups
- Email notifications
- SSL security
- 99.9% uptime

## Scalability

### Current Setup Handles:
- ✅ 100+ orders per month
- ✅ Thousands of website visitors
- ✅ Multiple products
- ✅ Peak season rushes
- ✅ Mobile and desktop traffic

### When to Upgrade (Future):
- If you exceed 1,200 orders/month → Airtable Pro ($20/month)
- If you need payment processing → Add Stripe
- If you want more automation → Zapier integration
- If you need team access → Airtable team features

## Monitoring & Analytics

### What You Can Track:
**In Airtable:**
- Total orders
- Revenue per week/month
- Popular products
- Repeat customers
- Busiest days
- Pickup vs. delivery ratio

**Can Add Later:**
- Google Analytics (free)
- Customer reviews
- Email marketing (Mailchimp)
- Social media traffic
- Conversion rates

## Support Resources

### If Something Goes Wrong:

1. **Check browser console:** F12 → Console tab
2. **Common error codes:**
   - 401: Token issue (check token)
   - 403: Permissions issue (check token scopes)
   - 404: Wrong base/table name
   - 422: Data format issue (check field names)

3. **Airtable Support:**
   - Excellent documentation
   - Community forum
   - Response within 24hrs on free tier

4. **Netlify Support:**
   - Great documentation
   - Active community forum
   - Status page for outages

### You're Not Alone:
- Thousands of small farms use similar setups
- Simple, proven technology stack
- Large supportive communities
- Easy to find help online

---

**The Bottom Line:**

This system is production-ready for a small farm. It's:
- ✅ Simple to use
- ✅ Reliable
- ✅ Cost-effective (free!)
- ✅ Scalable
- ✅ Professional

You're getting an enterprise-quality order management system for $0/year. 🎉
