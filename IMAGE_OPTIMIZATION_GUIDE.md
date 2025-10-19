# Image Optimization & Performance Guide

## ✅ Optimizations Applied

### 1. **Critical Image Preloading** (index.html)
Added preload hints for critical above-the-fold images:
```html
<link rel="preload" as="image" href="/herofp.png" fetchpriority="high" />
<link rel="preload" as="image" href="/logofp.png" fetchpriority="high" />
```

**Benefits:**
- Browser downloads hero background and logo immediately
- Prevents layout shift and blank hero section
- Improves Largest Contentful Paint (LCP) score

### 2. **Hero Section Optimizations** (Home.tsx)
**Background Image:**
- Added `fetchpriority="high"` - tells browser this is critical
- Added `decoding="async"` - non-blocking image decode
- Already has proper sizing with `object-cover`

**Main Logo:**
- Added explicit `width="160"` and `height="160"` dimensions
- Prevents cumulative layout shift (CLS)
- Added `fetchpriority="high"` for immediate loading

**Trail Logos:**
- Added `loading="lazy"` - deferred loading (not critical)
- Added `decoding="async"` for smooth animation

### 3. **Gallery Images** (AboutGallery.tsx)
- Already using `loading="lazy"` ✅
- Loads only when user scrolls to gallery section
- Saves initial page load bandwidth

### 4. **AWS Amplify Cache Headers** (amplify.yml)
Configured aggressive caching for all images:
```yaml
- pattern: '**/*.png'
  headers:
    - key: 'Cache-Control'
      value: 'public, max-age=31536000, immutable'
```

**Cache Duration:** 1 year (31536000 seconds)
- First load: Downloads image
- Subsequent visits: Instant from browser cache
- No server requests needed

## 📦 Before You Deploy

### **CRITICAL: Optimize Your Image Files**

Your images need to be compressed before uploading to `public/`. Here's how:

#### Option 1: Online Tools (Easiest)
1. **TinyPNG** (https://tinypng.com/)
   - Upload `herofp.png` and `logofp.png`
   - Download optimized versions (typically 60-80% smaller)
   - Replace originals in `public/` folder

2. **Squoosh** (https://squoosh.app/)
   - More control over compression
   - Can convert PNG to WebP for better compression
   - Recommended for hero background

#### Option 2: Command Line (Best Quality)
Install ImageMagick and run:

```powershell
# For hero background (large image)
magick herofp.png -quality 85 -define png:compression-level=9 herofp-optimized.png

# For logo (needs transparency)
magick logofp.png -quality 90 -define png:compression-level=9 logofp-optimized.png

# Optional: Convert to WebP for even better compression
magick herofp.png -quality 80 herofp.webp
```

#### Option 3: VS Code Extension
1. Install "Image Optimizer" extension
2. Right-click image in VS Code
3. Select "Optimize Image"

### **Recommended Image Sizes**

| Image | Current | Recommended | Format |
|-------|---------|-------------|--------|
| herofp.png | Check actual size | Max 1920x1080px, under 300KB | PNG or WebP |
| logofp.png | Check actual size | 512x512px, under 50KB | PNG (needs transparency) |
| Gallery images | Various | Max 1200px wide, under 200KB each | JPG or WebP |

### **WebP Format (Best Performance)**

Modern browsers support WebP (90%+ compatibility). To use:

1. Convert images to WebP format
2. Update references:
   ```tsx
   <img src="/herofp.webp" alt="..." />
   ```

**Savings:** 25-35% smaller than PNG with same quality

## 🚀 AWS Amplify Deployment

### Initial Setup

1. **Connect Repository:**
   - Log in to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository: `NathiDhliso/footprintsmobileauto`
   - Select branch: `main`

2. **Build Settings:**
   Amplify will auto-detect the `amplify.yml` configuration:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: 18.x

3. **Environment Variables:** (None required for this project)

4. **Deploy:**
   - Click "Save and deploy"
   - First build takes 3-5 minutes
   - You'll get a URL like: `https://main.d12345.amplifyapp.com`

### Custom Domain Setup

1. In Amplify Console, go to "Domain management"
2. Add domain: `footprintsmobileauto.co.za`
3. Follow DNS configuration steps
4. SSL certificate auto-provisioned by AWS

### Automatic Deployments

Every push to `main` branch triggers automatic rebuild:
```bash
git add .
git commit -m "Optimize images and add AWS Amplify config"
git push origin main
```

Amplify detects changes and rebuilds in ~2-3 minutes.

## 📊 Performance Metrics

### Expected Improvements

**Before Optimization:**
- Hero image: 3-5 seconds to load
- Cumulative Layout Shift (CLS): Poor
- Largest Contentful Paint (LCP): 4+ seconds

**After Optimization:**
- Hero image: <1 second (with preload + cache)
- CLS: Good (explicit dimensions)
- LCP: <2.5 seconds (preload + fetchpriority)

### Test Performance

Use these tools to verify:
1. **Google PageSpeed Insights** - https://pagespeed.web.dev/
2. **Chrome DevTools** - Network tab, throttle to "Fast 3G"
3. **WebPageTest** - https://www.webpagetest.org/

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔧 Further Optimizations (Optional)

### 1. Responsive Images with srcset
For different screen sizes:
```tsx
<img
  src="/herofp.png"
  srcset="/herofp-480.webp 480w,
          /herofp-800.webp 800w,
          /herofp-1200.webp 1200w,
          /herofp.webp 1920w"
  sizes="100vw"
  alt="Hero"
/>
```

### 2. Blur Placeholder (LQIP)
Show blurred preview while loading:
```tsx
<img
  src="/herofp.png"
  style={{ filter: loaded ? 'none' : 'blur(20px)' }}
/>
```

### 3. Use CDN for Gallery Images
Store gallery images in AWS S3 + CloudFront:
- Even faster global delivery
- Automatic image optimization
- Pay only for bandwidth used

### 4. Convert All to WebP
If dropping support for old browsers (<2% users):
- Convert all PNG/JPG to WebP
- 30-50% file size reduction
- Faster page loads worldwide

## 🐛 Troubleshooting

### Images Not Loading on Amplify
- Check files are in `public/` folder
- Verify build artifacts include images
- Check Amplify build logs for errors

### Images Still Slow
- Verify file sizes (should be <300KB for hero)
- Check browser cache is working (Network tab)
- Ensure `amplify.yml` headers are applied

### Layout Shift on Mobile
- Add explicit width/height to all `<img>` tags
- Use aspect-ratio CSS where needed
- Test on real devices, not just desktop

## 📝 Deployment Checklist

Before deploying to Amplify:
- [ ] Optimize herofp.png (under 300KB)
- [ ] Optimize logofp.png (under 50KB)
- [ ] Add images to `public/` folder
- [ ] Verify `amplify.yml` exists
- [ ] Remove old `netlify.toml` (✅ done)
- [ ] Test locally: `npm run build && npm run preview`
- [ ] Commit and push to GitHub
- [ ] Monitor first Amplify build
- [ ] Test live site performance
- [ ] Run PageSpeed Insights

## 🎯 Next Steps

1. **Optimize your image files** (most important!)
2. **Push to GitHub** to trigger Amplify build
3. **Test the live site** performance
4. **Optional:** Convert to WebP for extra speed
5. **Optional:** Set up CloudFront CDN for global speed
