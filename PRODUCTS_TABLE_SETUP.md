# Products Table Setup Guide

This guide will help you set up a Products table in Airtable so your crew can manage inventory from their mobile phones.

## Step 1: Create the Products Table

1. Open your Airtable base (the same one with your Orders table)
2. Click the **+** button to add a new table
3. Name it **"Products"**

## Step 2: Configure Fields

Create the following fields in your Products table:

### Required Fields:

| Field Name | Field Type | Description | Notes |
|------------|------------|-------------|-------|
| **Product Name** | Single line text | Name of the vegetable | Primary field (auto-created) |
| **Price** | Number | Price per unit | Format: Dollar ($), Precision: 2 decimal places |
| **Unit** | Single select | Unit of measurement | Options: bunch, lb, pint, bag, head, each |
| **Description** | Long text | Product description | Keep it short and appealing |
| **Season** | Single select | When available | Options: Spring, Summer, Fall, Winter, All Season |
| **Emoji** | Single line text | Display emoji | Use vegetable emojis: 🥬🥕🍅🥗🫑🧅🥒 |
| **Available** | Checkbox | Is product in stock? | Check = visible on website |
| **Product ID** | Number | Unique ID | Auto-number or manual entry |

### Optional Fields (for later):

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Stock Quantity** | Number | How many available |
| **Last Updated** | Last modified time | Auto-tracks changes |
| **Notes** | Long text | Internal notes for crew |

## Step 3: Add Your Current Products

Add these 4 products that are currently active:

### Product 1: Rainbow Swiss Chard
- Product Name: `Rainbow Swiss Chard`
- Price: `5.00`
- Unit: `bunch`
- Description: `Colorful stems, tender leaves, packed with nutrients`
- Season: `All Season`
- Emoji: `🥬`
- Available: ✓ (checked)
- Product ID: `2`

### Product 2: Carrots
- Product Name: `Carrots`
- Price: `5.00`
- Unit: `lb`
- Description: `Earthy sweetness with a vibrant color`
- Season: `All Season`
- Emoji: `🥕`
- Available: ✓ (checked)
- Product ID: `3`

### Product 3: Baby Spinach
- Product Name: `Baby Spinach`
- Price: `5.50`
- Unit: `bag`
- Description: `Tender young leaves, great for salads and smoothies`
- Season: `All Season`
- Emoji: `🥬`
- Available: ✓ (checked)
- Product ID: `6`

### Product 4: Kale
- Product Name: `Kale`
- Price: `4.50`
- Unit: `bunch`
- Description: `Nutrient-dense superfood, great for smoothies`
- Season: `All Season`
- Emoji: `🥬`
- Available: ✓ (checked)
- Product ID: `9`

## Step 4: Add Future/Seasonal Products (Optional)

You can add these now and mark them as **not available** until they're in season:

### Cherry Tomatoes
- Price: `6.50`, Unit: `pint`, Emoji: `🍅`, Season: `Summer`, ID: `1`

### Butterhead Lettuce
- Price: `4.00`, Unit: `head`, Emoji: `🥗`, Season: `Spring`, ID: `4`

### Red Bell Peppers
- Price: `7.00`, Unit: `lb`, Emoji: `🫑`, Season: `Summer`, ID: `5`

### Heirloom Beets
- Price: `5.00`, Unit: `bunch`, Emoji: `🧅`, Season: `Fall`, ID: `7`

### Zucchini
- Price: `4.50`, Unit: `lb`, Emoji: `🥒`, Season: `Summer`, ID: `8`

## Step 5: Configure Table Views

Create these views for easy management:

### 1. **All Products** (default view)
- Shows all products
- Sort by: Product Name (A→Z)

### 2. **Available Now** (filtered view)
- Filter: "Available" is checked
- Shows only products currently in stock
- This is what the website will display

### 3. **Out of Stock** (filtered view)
- Filter: "Available" is not checked
- Shows products to restock

### 4. **By Season** (grouped view)
- Group by: Season
- Easy to see what's coming up

## Step 6: Mobile App Setup

Your crew can manage products from their phones:

1. Download **Airtable** app (iOS/Android)
2. Sign in with your Airtable account
3. Open your base → Products table
4. To mark something available/unavailable:
   - Tap the product row
   - Toggle the "Available" checkbox
   - Changes appear on website immediately!

## Step 7: Website Integration

The website will be updated to:
- ✅ Fetch products from this table automatically
- ✅ Only show products where "Available" is checked
- ✅ Display price, description, emoji, etc. from Airtable
- ✅ Update in real-time when you change the table

## Quick Reference: Managing Inventory

### To add a new product:
1. Open Airtable app/website
2. Click **+ Add record** in Products table
3. Fill in all required fields
4. Check "Available" box
5. Product appears on website instantly!

### To remove a product from website:
1. Open the product in Airtable
2. Uncheck "Available" box
3. Product disappears from website
4. Record stays in Airtable for later

### To update a price:
1. Open the product
2. Edit the "Price" field
3. New price shows on website immediately

## Tips for Crew

- **Before market day**: Check all products are marked "Available"
- **During market**: Update "Available" as you sell out
- **After market**: Uncheck sold-out items
- **For next week**: Add new harvests, update prices

## Troubleshooting

**Product not showing on website?**
- Check "Available" is checked ✓
- Verify all required fields are filled
- Check Product ID is unique

**Price looks wrong?**
- Make sure Price field is formatted as Currency ($)
- Use 2 decimal places (e.g., 5.00 not 5)

**Can't access on mobile?**
- Download Airtable app from app store
- Make sure you're signed in with correct account
- Check you have edit permissions on the base

---

## Next Steps

After setting up this table:
1. Update script.js to fetch from Products table (automatic)
2. Test on mobile - add/remove products
3. Verify changes appear on website
4. Train crew on using mobile app

Need help? Check the main documentation or contact support!
