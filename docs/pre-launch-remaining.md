# Pre-Launch: Remaining Tasks

## 🚨 CRITICAL (Required Before Launch)

### 1. Add Logo
**What:** Create/add site logo
**Where:** `/public/logo.svg`
**Impact:** Used in navbar, schema markup, and branding
**Action:** Upload your logo file as `logo.svg`

### 2. Add OG Image
**What:** Social sharing preview image (1200x630px)
**Where:** `/public/og.png`
**Impact:** Professional appearance when shared on social media
**Action:** Create image with site branding + tagline, save as `og.png`

### 3. Generate Favicon Files
**What:** Browser tab icons for all devices
**Where:** `/public/` directory
**Impact:** Professional appearance, brand recognition
**Files needed:**
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `site.webmanifest`

**Action:** Use [RealFaviconGenerator](https://realfavicongenerator.net/) - upload logo, download package, extract to `/public/`

### 4. Set Up Google Analytics
**What:** Add your GA4 tracking ID
**Where:** `src/components/BaseHead.astro` lines 122 & 124
**Impact:** Track visitors, behavior, conversions
**Action:**
1. Create GA4 property at https://analytics.google.com
2. Copy Measurement ID (starts with `G-`)
3. Replace both instances of `G-XXXXXXXXXX` in BaseHead.astro

---

## 🎯 HIGH PRIORITY (Launch Week)

### 5. Test Schema Markup
**What:** Validate SEO structured data
**Impact:** Ensures Google can read your rich results
**Action:** Test at https://search.google.com/test/rich-results
**Expected:** No errors for Organization, LocalBusiness, Service, Breadcrumb schemas

### 6. Verify OG Tags
**What:** Test social media preview
**Impact:** Confirms sharing works correctly
**Action:** Test any page at https://www.opengraph.xyz/
**Expected:** Image, title, description display correctly

### 7. Run Production Build
**What:** Test production-ready version
**Impact:** Catch build errors before deployment
**Action:** Run `npm run build` and fix any errors

### 8. Update Blog Link in Footer (Optional)
**What:** Add blog to navigation
**Impact:** Helps users discover content
**Action:** Add blog link to footer Resources section if desired

---

## 📊 MEDIUM PRIORITY (Post-Launch Polish)

### 9. Optimize Specialty Icons
**What:** Compress 7 specialty icon files
**Where:** `/public/icons/specialty/`
**Current:** 139-231KB each
**Impact:** Faster page loads (minor)
**Action:** Run through ImageOptim or TinyPNG

### 10. Add Lazy Loading to Images
**What:** Add `loading="lazy"` to below-fold images
**Impact:** Faster initial page load
**Action:** Add to images in specialty cards, featured schools

### 11. Submit Sitemap to Google
**What:** Help Google index your site
**Impact:** Faster SEO indexing
**Action:**
1. Deploy site
2. Visit https://search.google.com/search-console
3. Add property
4. Submit `https://swimlessonsdirectory.com/sitemap-index.xml`

### 12. Set Up Google Business Profile (Optional)
**What:** Local business listing
**Impact:** Appear in local search results
**Action:** Create profile at https://business.google.com

---

## ✅ Quick Launch Checklist

Before deploying:
- [ ] Logo added to `/public/logo.svg`
- [ ] OG image added to `/public/og.png`
- [ ] All favicon files in `/public/`
- [ ] GA4 ID replaced in BaseHead.astro
- [ ] Run `npm run build` successfully
- [ ] Test schema markup (no errors)
- [ ] Test OG preview (image appears)
- [ ] Deploy to production
- [ ] Submit sitemap to Google Search Console

---

## 📈 What's Already Done

✅ Production config updated
✅ Schema markup implemented (Organization, LocalBusiness, Service, Breadcrumb)
✅ Stock images on location pages
✅ About page created and linked
✅ 3 SEO-optimized blog posts written
✅ Analytics code ready (just needs your ID)
✅ Search functionality working

**You're 85% ready to launch!** Just need assets (logo, OG, favicons) and GA4 setup.
