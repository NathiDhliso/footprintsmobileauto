# Footprints Mobile Auto - Image Setup

## ⚠️ IMPORTANT: Required Images for Production

Before deploying to Netlify or running the production build, you **MUST** add these image files to the `public/` folder:

### Required Files:
1. **`logofp.png`** - Your Footprints Mobile Auto logo
   - Used in: Favicon, navbar, footer, hero section, service cards
   
2. **`herofp.png`** - Your hero background image
   - Used in: Homepage hero section background

### How to Add:
```bash
# Copy your images to the public folder
Copy-Item "path\to\your\logofp.png" -Destination "public\"
Copy-Item "path\to\your\herofp.png" -Destination "public\"
```

Or manually:
1. Navigate to the `public/` folder in your project
2. Copy both image files into the `public/` directory
3. Commit and push to trigger a new Netlify build

### Verify Before Deploying:
```bash
# Check that images are in place
ls public/

# Should show:
# logofp.png
# herofp.png
```

## Netlify Deployment

The site is configured to deploy automatically from your GitHub repository. Once you add the images and push to GitHub, Netlify will rebuild with the correct assets.

### Build Settings (Already configured in netlify.toml):
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x or higher

## Local Development
```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to test locally.
