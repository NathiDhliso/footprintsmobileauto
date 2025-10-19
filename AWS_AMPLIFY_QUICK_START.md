# AWS Amplify Deployment - Quick Start

## ✅ What's Been Done

1. ✅ **Image Preloading** - Hero background and logo load instantly
2. ✅ **Optimized Attributes** - All images have proper loading priorities
3. ✅ **AWS Amplify Config** - `amplify.yml` created with caching rules
4. ✅ **Netlify Config Removed** - Old `netlify.toml` deleted

## 🚀 Deploy to AWS Amplify (5 Minutes)

### Step 1: Optimize Your Images First! 🎯

**BEFORE deploying, you MUST compress your images:**

1. Go to https://tinypng.com/
2. Upload `herofp.png` and `logofp.png` from your `public/` folder
3. Download the optimized versions
4. Replace the files in `public/` folder

**Why?** Even with all optimizations, a 2MB hero image will still be slow. Compression can reduce it to 200KB with no visible quality loss.

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Optimize images and add AWS Amplify configuration"
git push origin main
```

### Step 3: Set Up AWS Amplify

1. **Log in to AWS Console:**
   - Go to https://console.aws.amazon.com/amplify/
   - Sign in with your AWS account

2. **Create New App:**
   - Click "New app" → "Host web app"
   - Choose "GitHub" as source
   - Authorize AWS to access your repositories
   - Select repository: `NathiDhliso/footprintsmobileauto`
   - Select branch: `main`

3. **Configure Build Settings:**
   - Amplify will detect `amplify.yml` automatically
   - Build command: `npm run build` ✅
   - Output directory: `dist` ✅
   - Node version: Auto-detected (18.x) ✅

4. **Deploy:**
   - Click "Save and deploy"
   - Wait 3-5 minutes for first build
   - You'll get a URL: `https://main.d12345.amplifyapp.com`

### Step 4: Add Custom Domain (Optional)

1. In Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Enter: `footprintsmobileauto.co.za`
4. Follow DNS configuration steps:
   - Add CNAME record to your domain registrar
   - SSL certificate auto-provisioned
   - Takes 15-30 minutes to activate

### Step 5: Test Performance

1. Open your live site
2. Open Chrome DevTools (F12)
3. Go to "Network" tab
4. Refresh page and check:
   - ✅ Hero image loads in <1 second
   - ✅ Images cached on second load (from cache)
   - ✅ Total page size under 2MB

## 🔄 Automatic Deployments

Every time you push to GitHub, Amplify automatically rebuilds:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Amplify detects push and rebuilds in ~2-3 minutes
```

## 📊 Performance Checklist

After deployment, verify:

- [ ] Hero background appears instantly (no blank section)
- [ ] Logo loads immediately
- [ ] Gallery images lazy load when scrolling
- [ ] Second page visit is instant (browser cache)
- [ ] Google PageSpeed score 90+
- [ ] Mobile performance good (test on real device)

## 🐛 Common Issues & Fixes

### Issue: "Images not loading"
**Fix:** Check that images are in `public/` folder and committed to GitHub

```bash
ls public/
# Should show: herofp.png, logofp.png, and gallery images
```

### Issue: "Build failed in Amplify"
**Fix:** Check Amplify build logs:
1. Go to Amplify Console → Your app → Build history
2. Click on failed build
3. Look for error messages
4. Usually: missing dependencies or incorrect paths

### Issue: "Images still loading slowly"
**Fix:** Verify file sizes:

```powershell
# Check image file sizes
Get-ChildItem public/*.png | Select-Object Name, @{Name="Size(KB)";Expression={[math]::Round($_.Length/1KB,2)}}
```

**Target sizes:**
- herofp.png: <300KB
- logofp.png: <50KB
- Gallery images: <200KB each

### Issue: "Can't access AWS Amplify"
**Fix:** Create a free AWS account:
1. Go to https://aws.amazon.com/
2. Click "Create an AWS Account"
3. Free tier includes Amplify hosting for 1 year

## 💰 AWS Amplify Pricing

**Free Tier (First 12 Months):**
- 1,000 build minutes/month
- 15 GB served/month
- 5 GB storage

**After Free Tier:**
- $0.01 per build minute
- $0.15 per GB served
- $0.023 per GB storage/month

**Estimated monthly cost for your site:** $1-5 (very low traffic)

## 🎯 Performance Tips

### Immediate (Done ✅)
- ✅ Image preloading
- ✅ Lazy loading
- ✅ Browser caching
- ✅ Proper image attributes

### Quick Wins (Do Now)
1. **Compress images** - Reduce file sizes by 70%
2. **Test on mobile** - Ensure fast on 3G/4G
3. **Monitor PageSpeed** - Track improvements

### Advanced (Optional)
1. Convert images to WebP format
2. Use responsive images (srcset)
3. Add blur placeholders
4. Set up CloudFront CDN

## 📞 Support

If you need help:
1. Check `IMAGE_OPTIMIZATION_GUIDE.md` for detailed info
2. Check AWS Amplify docs: https://docs.amplify.aws/
3. Search GitHub issues or StackOverflow

## ✨ Expected Results

**Before:**
- Hero loads in 3-5 seconds
- Poor mobile performance
- Large bandwidth usage

**After:**
- Hero appears in <1 second
- Fast on all devices
- 70% less bandwidth
- PageSpeed score 90+

---

**Ready to deploy?** Just push to GitHub and set up Amplify!
