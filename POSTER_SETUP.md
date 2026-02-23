# 📸 Poster Images Setup Guide

## Quick Setup

To display your poster designs, you need to add 15 poster images to your project.

### Step 1: Create the Directory

Create this folder in your project:
```
src/assets/posters/
```

### Step 2: Add Your Poster Images

Add 15 poster images with these exact names:
- `poster1.jpg`
- `poster2.jpg`
- `poster3.jpg`
- `poster4.jpg`
- `poster5.jpg`
- `poster6.jpg`
- `poster7.jpg`
- `poster8.jpg`
- `poster9.jpg`
- `poster10.jpg`
- `poster11.jpg`
- `poster12.jpg`
- `poster13.jpg`
- `poster14.jpg`
- `poster15.jpg`

### Supported Formats
- `.jpg` (recommended)
- `.png`
- `.webp`

> **Note**: If you use `.png` or `.webp`, update the import extensions in `PosterDesign.js`

### Recommended Image Specifications

- **Aspect Ratio**: 2:3 (portrait orientation, typical poster size)
- **Minimum Resolution**: 800 x 1200 pixels
- **Recommended Resolution**: 1000 x 1500 pixels or higher
- **File Size**: Keep under 500KB per image for optimal loading

### Example Image Dimensions
- Small: 800 x 1200px
- Medium: 1000 x 1500px  
- Large: 1200 x 1800px
- Extra Large: 1600 x 2400px

## Customizing Poster Info

Edit the `posters` array in `src/components/PosterDesign.js` to update titles and categories:

```javascript
const posters = [
  { id: 1, img: poster1, title: "Your Title", category: "Your Category" },
  // ... edit as needed
];
```

## Grid Layout

The poster section automatically adjusts:
- **Desktop (>968px)**: 3 columns
- **Tablet (768-968px)**: 2 columns  
- **Mobile (<768px)**: 2 columns
- **Small Mobile (<480px)**: 1 column

All posters maintain a 2:3 aspect ratio for consistent sizing.

## Need Different Image Names?

If your images have different names, update the imports in `PosterDesign.js`:

```javascript
// Change from:
import poster1 from "../assets/posters/poster1.jpg";

// To your filename:
import poster1 from "../assets/posters/my-custom-name.jpg";
```

## Testing

Once you add the images, the poster section will automatically display them with:
- ✅ Hover overlays with title and category
- ✅ Smooth zoom animations
- ✅ Glassmorphism design
- ✅ Responsive grid layout

---

**Ready to go!** Add your 15 poster images to `src/assets/posters/` and they'll appear in your portfolio. 🎨
