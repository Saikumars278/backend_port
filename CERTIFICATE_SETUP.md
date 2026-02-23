# 📜 Certificate Images Setup Guide

## Quick Setup

To display your certificates, add certificate images to your project.

### Step 1: Create the Directory

Create this folder:
```
src/assets/certificates/
```

### Step 2: Add Your Certificate Images

Add 6-9 certificate images with these exact names:
- `cert1.jpg`
- `cert2.jpg`
- `cert3.jpg`
- `cert4.jpg`
- `cert5.jpg`
- `cert6.jpg`
- `cert7.jpg` (optional)
- `cert8.jpg` (optional)
- `cert9.jpg` (optional)

### Supported Formats
- `.jpg` (recommended)
- `.png`
- `.webp`

> **Note**: If you use `.png` or `.webp`, update the import extensions in `Certificate.js`

### Recommended Image Specifications

- **Aspect Ratio**: 4:3 (landscape, typical certificate size)
- **Minimum Resolution**: 1200 x 900 pixels
- **Recommended Resolution**: 1600 x 1200 pixels or higher
- **File Size**: Keep under 500KB per image for optimal loading

### Example Image Dimensions
- Small: 1200 x 900px
- Medium: 1600 x 1200px  
- Large: 2000 x 1500px

## Customizing Certificate Info

Edit the `certificates` array in `src/components/Certificate.js`:

```javascript
const certificates = [
  { id: 1, img: cert1, title: "Your Course", issuer: "Platform Name" },
  // ... edit as needed
];
```

## Grid Layout

The certificate section automatically adjusts:
- **Desktop (>1024px)**: 3 columns
- **Tablet (768-1024px)**: 2 columns  
- **Mobile (<768px)**: 1 column

All certificates maintain a 4:3 aspect ratio for consistent landscape sizing.

## Need More or Fewer Certificates?

### To add more (cert7, cert8, cert9):
Uncomment the import lines and array entries in `Certificate.js`

### To use fewer:
Comment out unused imports and array entries

---

**Ready to go!** Add your certificate images to `src/assets/certificates/` and they'll appear in your portfolio. 🎓
