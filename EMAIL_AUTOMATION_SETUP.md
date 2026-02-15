# Email Automation Setup Guide

This guide will help you set up automated email notifications for orders and contact form submissions using Airtable's built-in automation features.

---

## Part 1: Order Confirmation Emails to Customers

When a customer places an order, they should receive an automated confirmation email.

### Step 1: Open Automations

1. Open your Airtable base
2. Click **"Automations"** in the top toolbar (lightning bolt icon ⚡)
3. Click **"Create automation"**
4. Name it: **"Order Confirmation to Customer"**

### Step 2: Set the Trigger

1. **Trigger Type**: Select **"When record created"**
2. **Table**: Select **"Orders"**
3. Click **"Continue"**

### Step 3: Add a Condition (Optional but Recommended)

This prevents sending emails for test orders:

1. Click **"+ Add condition"**
2. Set condition: **"Status"** is **"New"**
3. This ensures only new orders trigger emails

### Step 4: Configure the Action

1. Click **"+ Add action"**
2. Select **"Send email"**
3. Configure the email:

**To:** (Click to insert field)
- Select **"Customer Email"** from the dropdown

**From name:**
```
Sprouting Heart Farm
```

**Reply-to email:**
```
sproutingheartfarm@gmail.com
```

**Subject:**
```
Order Confirmation - {{Order ID}}
```

**Email body:** (Copy and paste this template)
```
Hi {{Customer Name}},

Thank you for your order from Sprouting Heart Farm! 🌱

ORDER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Order Number: {{Order ID}}
Order Date: {{Order Date}}
Total: ${{Order Total}}

ITEMS ORDERED:
{{Order Items}}

PICKUP/DELIVERY:
{{Pickup Method}}

{{Customer Notes}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT'S NEXT?
• We'll prepare your order with care
• For market pickup: Visit our booth at Troy Farmers Market (Saturdays 9am-1pm)
• For delivery: We'll contact you to arrange delivery to Troy area

QUESTIONS?
Reply to this email or reach out on Instagram @sproutingheartfarm

Thank you for supporting local, sustainable agriculture!

Julia & Anthony
Sprouting Heart Farm
Brunswick, NY

---
This is an automated confirmation. Please save for your records.
```

4. Click **"Continue"**

### Step 5: Test the Automation

1. Click **"Test"** button
2. Select a sample order record
3. Verify the email looks correct
4. Check that all fields populate properly

### Step 6: Turn On the Automation

1. Toggle the automation to **"On"** (top right)
2. ✅ Customers now receive automatic order confirmations!

---

## Part 2: Order Notification Emails to Farm

You (the farm owners) should receive an email notification when a new order comes in.

### Step 1: Create New Automation

1. In Automations, click **"Create automation"**
2. Name it: **"New Order Alert for Farm"**

### Step 2: Set the Trigger

1. **Trigger Type**: **"When record created"**
2. **Table**: **"Orders"**
3. Click **"Continue"**

### Step 3: Configure the Action

1. Click **"+ Add action"**
2. Select **"Send email"**
3. Configure the email:

**To:** (Enter manually)
```
sproutingheartfarm@gmail.com
```

**From name:**
```
Sprouting Heart Farm Store
```

**Reply-to email:**
```
sproutingheartfarm@gmail.com
```

**Subject:**
```
🔔 NEW ORDER: {{Order ID}} - ${{Order Total}}
```

**Email body:**
```
NEW ORDER RECEIVED! 🎉

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORDER: {{Order ID}}
DATE: {{Order Date}}
STATUS: {{Status}}
TOTAL: ${{Order Total}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CUSTOMER INFORMATION:
Name: {{Customer Name}}
Email: {{Customer Email}}
Phone: {{Customer Phone}}

PICKUP/DELIVERY:
{{Pickup Method}}

ITEMS ORDERED:
{{Order Items}}

CUSTOMER NOTES:
{{Customer Notes}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👉 View in Airtable: [Link to record]
💚 Prepare order and update status when ready!
```

4. Click **"Continue"**

### Step 4: Turn On

1. Toggle to **"On"**
2. ✅ You'll now get instant notifications of new orders!

---

## Part 3: Contact Form Submissions

To handle contact form submissions, we need to:
1. Create a "Contact Messages" table in Airtable
2. Update the website to send to this table
3. Set up email notifications

### Step 1: Create Contact Messages Table

1. In your Airtable base, click **+ Add table**
2. Name it: **"Contact Messages"**
3. Add these fields:

| Field Name | Field Type |
|------------|------------|
| Name | Single line text (primary) |
| Email | Email |
| Message | Long text |
| Date Received | Date (auto) |
| Status | Single select: New, Read, Replied |
| Notes | Long text |

### Step 2: Update Website Code

Add this to your `script.js` file (after the existing configuration):

```javascript
const AIRTABLE_CONTACTS_TABLE = 'Contact Messages';

// Update the contact form handler
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;

    // Check if Airtable is configured
    if (AIRTABLE_TOKEN === 'YOUR_TOKEN_HERE' || AIRTABLE_BASE_ID === 'YOUR_BASE_ID_HERE') {
        showNotification('Demo mode: Message logged to console only');
        console.log('Contact form:', {
            name: form.elements[0].value,
            email: form.elements[1].value,
            message: form.elements[2].value
        });
        form.reset();
        return;
    }

    try {
        const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_CONTACTS_TABLE}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: {
                    "Name": form.elements[0].value,
                    "Email": form.elements[1].value,
                    "Message": form.elements[2].value,
                    "Date Received": new Date().toISOString().split('T')[0],
                    "Status": "New"
                }
            })
        });

        if (response.ok) {
            showNotification('Message sent! We\'ll get back to you soon.');
            form.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        showNotification('Error sending message. Please email us directly.');
    }
});
```

### Step 3: Create Contact Form Automation

1. Create new automation: **"Contact Form Notification"**
2. **Trigger**: When record created in "Contact Messages"
3. **Action**: Send email

**To:**
```
sproutingheartfarm@gmail.com
```

**Subject:**
```
💬 New Contact Form Message from {{Name}}
```

**Email body:**
```
NEW CONTACT FORM SUBMISSION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FROM: {{Name}}
EMAIL: {{Email}}
DATE: {{Date Received}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:
{{Message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to: {{Email}}
```

4. Turn on the automation

---

## Part 4: Optional - Order Status Updates

Send emails when order status changes (e.g., "Ready for Pickup").

### Setup

1. Create automation: **"Order Ready Notification"**
2. **Trigger**: When record updated in "Orders"
3. **Condition**: Status is "Ready"
4. **Action**: Send email to Customer Email

**Subject:**
```
Your Order {{Order ID}} is Ready! 🎉
```

**Body:**
```
Hi {{Customer Name}},

Great news! Your order is ready for pickup! 🌱

Order: {{Order ID}}
Items: {{Order Items}}
Total: ${{Order Total}}

{{Pickup Method}}

Looking forward to seeing you!

Julia & Anthony
Sprouting Heart Farm
```

---

## Testing Your Automations

### Test Order Confirmation:
1. Go to website
2. Add items to cart
3. Complete checkout with real email
4. Check inbox for confirmation email
5. Check farm email for notification

### Test Contact Form:
1. Fill out contact form on website
2. Submit with real email
3. Check farm email for notification
4. Verify message appears in Airtable

---

## Troubleshooting

**Emails not sending?**
- Check automation is toggled "On"
- Verify email addresses are correct
- Check Airtable's automation run history (click automation → "Runs")
- Look for error messages in red

**Customer didn't receive confirmation?**
- Check their spam/junk folder
- Verify email address in Orders table
- Check automation run history
- Confirm Customer Email field is mapped correctly

**Email formatting looks weird?**
- Make sure field names match exactly (case-sensitive)
- Use {{Field Name}} for dynamic content
- Test with sample data first

**Getting duplicate emails?**
- Check you don't have multiple automations for same trigger
- Verify conditions are set correctly
- Review automation run history

---

## Email Best Practices

✅ **DO:**
- Test with real email addresses first
- Keep emails concise and clear
- Include order/contact details
- Provide next steps
- Add your contact info

❌ **DON'T:**
- Send marketing emails without permission
- Include sensitive payment info
- Use ALL CAPS (except sparingly)
- Forget to test before going live

---

## Advanced Options (Future)

When you're ready to level up:

1. **SMS Notifications** - Use Zapier to send text alerts
2. **Email Drip Campaigns** - Welcome new customers
3. **Abandoned Cart Emails** - Remind customers to complete checkout
4. **Weekly Harvest Updates** - Newsletter with available produce
5. **Automated Receipts** - PDF invoices attached to emails

---

## Summary Checklist

- [ ] Order confirmation emails to customers
- [ ] Order notification emails to farm
- [ ] Contact Messages table created
- [ ] Contact form connected to Airtable
- [ ] Contact form notifications to farm
- [ ] All automations tested with real emails
- [ ] Automations toggled ON
- [ ] Farm email checked and working

**Next Steps:**
1. Complete checklist above
2. Test each automation thoroughly
3. Place a real test order
4. Monitor for 24 hours
5. Adjust templates as needed

Need help? Check automation "Runs" tab for debugging info!
