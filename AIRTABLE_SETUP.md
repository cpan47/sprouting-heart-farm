# Airtable Setup Guide for Sprouting Heart Farm

## Step 1: Create Your Airtable Account & Base

1. Go to **airtable.com** and create a free account
2. Click **"Add a base"** → **"Start from scratch"**
3. Name it: **"Sprouting Heart Farm Orders"**

## Step 2: Set Up Your Orders Table

Rename the default table to **"Orders"** and create these fields:

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Order ID | Single line text | Auto-generated (e.g., SHF-001) |
| Order Date | Date | When order was placed |
| Customer Name | Single line text | |
| Customer Email | Email | |
| Customer Phone | Phone number | |
| Pickup Method | Single select | Options: Local Delivery, Farm Pickup |
| Order Items | Long text | List of vegetables ordered |
| Order Total | Currency | Total price |
| Customer Notes | Long text | Special requests |
| Status | Single select | Options: New, Packed, Ready, Completed, Cancelled |
| Created Time | Created time | Automatic |

### How to Add Fields:
1. Click the **"+"** button at the top of any column
2. Choose the field type from the list above
3. Name it exactly as shown
4. For **Status** field, add these options:
   - 🆕 New (default)
   - 📦 Packed
   - ✅ Ready
   - ✔️ Completed
   - ❌ Cancelled

## Step 3: Get Your API Credentials

### Get Personal Access Token (New Method):
1. Go to https://airtable.com/create/tokens
2. Click **"Create new token"**
3. Name it: "Farm Website Orders"
4. Add these scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
5. Under **Access**, click "Add a base" and select your "Sprouting Heart Farm Orders" base
6. Click **"Create token"**
7. **COPY THIS TOKEN** - you'll need it! (It starts with "pat...")

### Get Your Base ID:
1. Go to https://airtable.com/api
2. Click on your **"Sprouting Heart Farm Orders"** base
3. In the URL, you'll see: `https://airtable.com/[BASE_ID]/api/docs`
4. **Copy the BASE_ID** (starts with "app...")
   - Or find it in the API documentation under "INTRODUCTION"

### Get Your Table ID:
1. Open your base
2. In the URL: `https://airtable.com/[BASE_ID]/[TABLE_ID]`
3. **Copy the TABLE_ID** (starts with "tbl...")
4. Or just use the table name "Orders" (easier!)

## Step 4: Configure the Website

Open **`script.js`** and find lines 5-8:

```javascript
// Airtable Configuration
const AIRTABLE_TOKEN = 'YOUR_TOKEN_HERE';  // Paste your token here
const AIRTABLE_BASE_ID = 'YOUR_BASE_ID_HERE';  // Paste your base ID here
const AIRTABLE_TABLE_NAME = 'Orders';  // Leave as is
```

Replace:
- `YOUR_TOKEN_HERE` with your personal access token (starts with "pat...")
- `YOUR_BASE_ID_HERE` with your base ID (starts with "app...")

## Step 5: Set Up Email Notifications (Optional but Recommended)

### Notify Yourself of New Orders:
1. In Airtable, click **"Automations"** (lightning bolt icon)
2. Click **"Create automation"**
3. **Trigger:** "When record matches conditions"
   - Table: Orders
   - Condition: Status = New
4. **Action:** "Send email"
   - To: sproutingheartfarm@gmail.com
   - Subject: `New Order from {{Customer Name}}`
   - Message:
   ```
   New order received!
   
   Customer: {{Customer Name}}
   Email: {{Customer Email}}
   Phone: {{Customer Phone}}
   
   Pickup Method: {{Pickup Method}}
   
   Order Items:
   {{Order Items}}
   
   Total: {{Order Total}}
   
   Customer Notes: {{Customer Notes}}
   
   Order ID: {{Order ID}}
   Order Date: {{Order Date}}
   ```
5. Click **"Turn on automation"**

### Notify Customer (Confirmation Email):
1. Create another automation
2. **Trigger:** "When record matches conditions"
   - Table: Orders
   - Condition: Status = New
3. **Action:** "Send email"
   - To: `{{Customer Email}}`
   - Subject: `Order Confirmation - Sprouting Heart Farm`
   - Message:
   ```
   Hi {{Customer Name}},
   
   Thanks for your order! We've received your pre-order for pickup/delivery.
   
   Order Details:
   {{Order Items}}
   Total: {{Order Total}}
   
   Pickup Method: {{Pickup Method}}
   
   We'll reach out to confirm your pickup/delivery time.
   
   Questions? Reply to this email or message us on Instagram @sproutingheartfarm
   
   Thanks for supporting local farming!
   Julia & Anthony
   Sprouting Heart Farm
   ```
4. Click **"Turn on automation"**

### Notify Customer When Ready:
1. Create another automation
2. **Trigger:** "When record matches conditions"
   - Table: Orders
   - Condition: Status = Ready
3. **Action:** "Send email"
   - To: `{{Customer Email}}`
   - Subject: `Your Order is Ready! - Sprouting Heart Farm`
   - Message:
   ```
   Hi {{Customer Name}},
   
   Great news! Your order is ready for {{Pickup Method}}.
   
   {{Customer Notes}}
   
   See you soon!
   Julia & Anthony
   ```

## Step 6: Test the System

1. Open your website
2. Add some vegetables to cart
3. Complete checkout form
4. Check Airtable - you should see the order appear!
5. Check your email for notification
6. Try changing the Status to "Ready" - customer should get email

## Managing Orders from Your Phone

### Download Airtable Mobile App:
1. iOS: App Store - "Airtable"
2. Android: Google Play - "Airtable"
3. Log in and open your base
4. You can now:
   - View new orders
   - Update status
   - Mark as packed/ready
   - Access customer info
   - Filter by pickup method

### Useful Views to Create:
1. **Today's Pickups**: Filter by Pickup Method
2. **Pending Orders**: Status = New or Packed
3. **Completed**: Status = Completed (for records)
4. **By Customer**: Group by Customer Name (see repeat customers)

## Workflow Example:

1. 🆕 **New order arrives** → Email notification
2. 📦 **You harvest/pack** → Change status to "Packed"
3. ✅ **Ready for pickup** → Change to "Ready" → Customer gets email
4. ✔️ **Customer picks up** → Change to "Completed"

## Security Notes:

⚠️ **IMPORTANT**: 
- Keep your Personal Access Token private
- Don't commit it to GitHub
- For production, consider using Netlify environment variables
- The token is in your JavaScript file, so anyone can see it if they inspect the code

**Better Security (Optional):**
Use Netlify Functions to hide your token:
1. Create a serverless function
2. Move Airtable logic to backend
3. Frontend calls your function instead of Airtable directly

For a small farm site, the direct integration is fine to start. If you want the more secure version later, let me know!

## Cost:

- **Free tier**: Up to 1,200 records per base
- That's ~100 orders per month for a year
- More than enough for a small farm!

## Troubleshooting:

**Orders not appearing?**
- Check browser console for errors (F12 → Console)
- Verify token and base ID are correct
- Make sure token has write permissions

**No email notifications?**
- Check automation is turned ON (toggle in Airtable)
- Verify email addresses are correct
- Check spam folder

**Can't access from phone?**
- Download Airtable mobile app
- Log in with same account
- Refresh the base

---

**You're all set!** You now have a professional order management system for your farm. 🌱
