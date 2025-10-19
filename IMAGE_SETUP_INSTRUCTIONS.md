# Image Setup Instructions

## Required Images

To complete the setup of your Footprints Mobile Auto website, you need to add the following images to the `public` folder:

### 1. Logo Image
- **File name:** `logofp.png`
- **Location:** `public/logofp.png`
- **Recommended size:** 400x400 pixels (square)
- **Format:** PNG with transparent background
- **Description:** Your Footprints Mobile Auto logo (the footprints with lightning bolt and arrow)
- **Usage:** Hero section, animated trail, browser favicon/tab icon

### 2. Hero Background Image
- **File name:** `herofp.jpg`
- **Location:** `public/herofp.jpg`
- **Recommended size:** 1920x1080 pixels (landscape)
- **Format:** JPG or JPEG
- **Description:** The scenic image with the technician working on a Hummer with city skyline in background and glowing footprint trail

### 3. Gallery Images (Already in place)
All your work gallery images should already be in the `public` folder with the naming pattern:
- `IMG-20251019-WA0002.jpg` through `IMG-20251019-WA0020.jpg`

## How to Add Images

1. Save your logo image as `logofp.png` in the `public` folder
2. Save your hero background as `herofp.jpg` in the `public` folder
3. Ensure all gallery images are in the `public` folder

## File Structure

```
Footprints/
├── public/
│   ├── logofp.png                  ← Add this (your logo)
│   ├── herofp.jpg                  ← Add this (hero background)
│   ├── IMG-20251019-WA0002.jpg    ← Gallery images
│   ├── IMG-20251019-WA0003.jpg
│   └── ... (all other gallery images)
├── src/
└── ...
```

## Features Using These Images

### Logo (`logofp.png`)
- **Browser Tab/Favicon:** Shows in browser tab and bookmarks
- **Hero Section:** Large animated floating logo with glow effect (140px)
- **Footprint Trail:** Animated trail of 8 logos creating a path across the hero section
- **Brand Recognition:** Consistent branding throughout the site

### Hero Background (`herofp.jpg`)
- **Hero Section:** Full-width background with gradient overlay
- **Perfect fit:** Your image already has the footprint trail effect!
- **Creates depth and professionalism**
- **Sets the tone for your mobile service business**
- **City skyline reinforces Johannesburg/Gauteng location**

## Optional Enhancements

If you'd like to further enhance the site, consider:
- Adding a favicon version of your logo (`public/favicon.ico`)
- Creating optimized versions of images for faster loading
- Adding more service photos to the gallery

## Testing

After adding the images:
1. Run `npm run dev` to start the development server
2. Visit the homepage to see the hero section with your images
3. Check that the logo appears and animates properly (floating effect)
4. Verify the background image displays correctly
5. Look at the browser tab - your logo should appear as the favicon
6. Observe the animated footprint trail across the hero

## Need Help?

If images aren't displaying:
1. Check file names match exactly: `logofp.png` and `herofp.jpg` (case-sensitive)
2. Ensure images are in the `public` folder, not `src`
3. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console (F12) for any errors
5. Verify image files aren't corrupted

## Perfect! 🎉

Your hero image (`herofp.jpg`) already has the glowing footprint trail effect built in, which will beautifully complement the animated logo elements on the page. The combination will create a stunning, cohesive visual experience!
