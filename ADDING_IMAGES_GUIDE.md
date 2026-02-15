# Adding Images to Your Farm Website

This guide explains how to add real photos to replace the emoji placeholders throughout the website.

---

## Image Folder Structure

Your website now has the following folder structure for images:

```
Sprouting Heart/
├── images/
│   ├── products/     ← Vegetable photos go here
│   └── farm/         ← Farm/farmer photos go here
├── index.html
├── styles.css
└── script.js
```

---

## Part 1: Product Photos (Vegetables)

### Recommended Specs:
- **Format**: JPG or PNG
- **Dimensions**: 800x800 pixels (square)
- **File size**: Under 500KB each
- **Background**: White or light neutral color works best
- **Lighting**: Bright, natural light
- **Style**: Clean, appetizing, shows freshness

### Naming Convention:
Use simple, lowercase names matching your products:

```
images/products/rainbow-chard.jpg
images/products/carrots.jpg
images/products/baby-spinach.jpg
images/products/kale.jpg
images/products/cherry-tomatoes.jpg
images/products/lettuce.jpg
images/products/bell-peppers.jpg
images/products/beets.jpg
images/products/zucchini.jpg
```

### How to Add Product Images:

**Option A: Add to Airtable (Recommended for dynamic loading)**

1. Open your Products table in Airtable
2. Add a new field: **"Image"** (type: Attachment)
3. Upload photos directly to each product record
4. Images will load automatically on the website!

**Option B: Add to website files (Static method)**

1. Take/collect photos of your vegetables
2. Resize them to 800x800 pixels using:
   - Mac: Preview app
   - Online: [Squoosh.app](https://squoosh.app)
   - Phone: Built-in photo editor
3. Save them to `images/products/` folder
4. Update `script.js` to reference image filenames

---

## Part 2: Farm Photos

### Hero Section Image

Replace the large vegetable emoji in the hero section:

1. Take a beautiful photo of your farm:
   - Wide landscape shot
   - Sunrise/sunset lighting
   - Shows rows of crops or greenhouse
   - Or a basket of fresh vegetables
2. Save as: `images/farm/hero.jpg`
3. Dimensions: 1200x800 pixels
4. Update the HTML (see code below)

### About Section Image

Add a photo of the farmers or farm:

1. Take a photo:
   - Portrait of Julia & Anthony
   - Working in the field
   - At the market booth
2. Save as: `images/farm/about.jpg`
3. Dimensions: 800x800 pixels (square works best)
4. Update the HTML

---

## Code Updates to Use Real Images

### Update Product Images (in script.js)

If using **static images** (Option B above), modify the `renderProducts` function:

```javascript
// In renderProducts function, replace this line:
<div class="product-image">${product.emoji}</div>

// With this:
<div class="product-image">
    ${product.image
        ? `<img src="images/products/${product.image}" alt="${product.name}" />`
        : product.emoji
    }
</div>
```

Then add image filenames to your products array:

```javascript
{
    id: 2,
    name: "Rainbow Swiss Chard",
    price: 5.00,
    unit: "bunch",
    emoji: "🥬",
    image: "rainbow-chard.jpg",  // ← Add this line
    description: "Colorful stems, tender leaves, packed with nutrients",
    season: "All season",
    organic: true
},
```

### Update Hero Image (in index.html)

Find this line in index.html:
```html
<div class="image-placeholder">🥬</div>
```

Replace with:
```html
<img src="images/farm/hero.jpg" alt="Sprouting Heart Farm" class="hero-farm-image" />
```

Then add this CSS to styles.css:
```css
.hero-farm-image {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    animation: float 6s ease-in-out infinite;
}
```

### Update About Image (in index.html)

Find this:
```html
<div class="image-placeholder">🌱</div>
```

Replace with:
```html
<img src="images/farm/about.jpg" alt="Julia and Anthony" class="about-farm-image" />
```

Add CSS:
```css
.about-farm-image {
    width: 100%;
    height: auto;
    border-radius: 20px;
}
```

---

## Part 3: Using Images from Airtable (Advanced)

If you added images to Airtable, update the product fetching code:

```javascript
// In fetchProductsFromAirtable function, update the mapping:
products = data.records.map(record => ({
    id: record.fields['Product ID'] || record.id,
    name: record.fields['Product Name'],
    price: record.fields['Price'],
    unit: record.fields['Unit'],
    emoji: record.fields['Emoji'] || '🥬',
    image: record.fields['Image']?.[0]?.url || null,  // ← Add this line
    description: record.fields['Description'],
    season: record.fields['Season'] || 'All Season',
    organic: true
}));
```

And update the render function:
```javascript
<div class="product-image">
    ${product.image
        ? `<img src="${product.image}" alt="${product.name}" />`
        : product.emoji
    }
</div>
```

Add this CSS for product images:
```css
.product-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

---

## Part 4: Photo Tips

### Taking Great Vegetable Photos:

**✅ DO:**
- Use natural daylight (near a window)
- Clean the vegetables first
- Show the product clearly
- Use a simple background
- Take multiple angles
- Show scale (one bunch, one bag, etc.)

**❌ DON'T:**
- Use flash (creates harsh shadows)
- Overcrowd the frame
- Use busy backgrounds
- Include distracting objects
- Use photos with poor lighting

### Quick Photo Setup:

1. **Background**: White poster board or clean table
2. **Lighting**: Position near window, avoid direct sunlight
3. **Camera**: Phone camera works great!
4. **Angle**: Slightly above, looking down at 45°
5. **Edit**: Increase brightness slightly, crop square

### Apps for Quick Editing:

- **iPhone**: Built-in Photos app
- **Android**: Google Photos
- **Desktop**: Preview (Mac), Photos (Windows)
- **Online**: [Photopea.com](https://www.photopea.com) (free Photoshop alternative)

---

## Part 5: Optimization

Before uploading images:

### Resize Images:
```bash
# Using ImageMagick (if installed):
magick convert hero.jpg -resize 1200x800 hero.jpg
magick convert product.jpg -resize 800x800 product.jpg
```

### Compress Images:
- Use [Squoosh.app](https://squoosh.app)
- Target: 200-500KB per image
- Quality: 80-85% works well

### Why optimize?
- ✅ Faster page loading
- ✅ Better mobile experience
- ✅ Lower data usage for customers
- ✅ Better SEO

---

## Part 6: Deployment

After adding images:

1. **Test locally first**:
   - Open `index.html` in browser
   - Check all images load
   - Verify mobile responsiveness
   - Test on different browsers

2. **Deploy to Netlify**:
   - Drag your entire folder to Netlify
   - Or push to GitHub and auto-deploy
   - Images will be deployed with your site

3. **Verify live site**:
   - Check all images load on live site
   - Test on mobile device
   - Verify image quality

---

## Quick Start Checklist

- [ ] Create `images/products/` and `images/farm/` folders
- [ ] Take photos of your 4 current vegetables
- [ ] Take 1-2 farm/farmer photos
- [ ] Resize all photos appropriately
- [ ] Compress photos under 500KB
- [ ] Name files correctly (lowercase, no spaces)
- [ ] Save photos to correct folders
- [ ] Update HTML/JS code (or add to Airtable)
- [ ] Test locally in browser
- [ ] Deploy to Netlify
- [ ] Verify on live site

---

## Timeline

**Minimum (Emoji placeholders)**: 0 minutes ✅ Already done!

**Basic (Key photos only)**:
- Hero image: 10 minutes
- About image: 5 minutes
- **Total: 15 minutes**

**Complete (All photos)**:
- Product photos: 30-60 minutes
- Farm photos: 15 minutes
- Editing/resizing: 30 minutes
- Code updates: 15 minutes
- Testing: 15 minutes
- **Total: 2-2.5 hours**

---

## Don't Have Photos Yet?

**No problem!** The emoji placeholders work great and look intentional. You can:

1. **Launch with emojis** → Add photos later
2. **Take photos gradually** → Replace one at a time
3. **Start with key images** → Hero and about sections
4. **Update anytime** → No deadline pressure

The site is fully functional with emojis. Photos are nice-to-have, not required!

---

## Example Image Sources (If You Don't Have Your Own Yet)

While waiting for your own photos, you could use:

**Free Stock Photos (Legal for Commercial Use):**
- [Unsplash.com](https://unsplash.com/s/photos/vegetables)
- [Pexels.com](https://www.pexels.com/search/vegetables/)

**Search terms:**
- "organic vegetables"
- "farmer market"
- "fresh produce"
- "farm field"

⚠️ **Important**: Only use "free for commercial use" images or your own photos.

---

## Summary

| Area | Current | With Images |
|------|---------|-------------|
| Products | 🥬 Emoji | 📸 Real photos |
| Hero | 🥬 Large emoji | 📸 Farm landscape |
| About | 🌱 Emoji | 📸 Farmers photo |
| Loading | Instant | Still fast! |

**Bottom line**: Images are optional. The site works perfectly with emojis, but photos add a professional touch when you're ready!

Need help? Check the main documentation or test locally first!
