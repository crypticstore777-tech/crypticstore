

## Replace Tagline + Boost SEO

### 1. Homepage Hero Tagline Change
- Replace the subtitle text `"Online Boutique by Mysterious Enterprise"` (line 136 of `src/pages/Index.tsx`) with **"Dream Dare Drip"**
- Style it with slightly larger, bolder text and a gold/primary accent for visual impact

### 2. Add Sitemap
- Create `public/sitemap.xml` listing all public pages:
  `/`, `/collections/dare2wear`, `/collections/imitable-lives`, `/dj-services`, `/youknowwedomagic`, `/music`, `/contact`, `/blog`, `/privacy`, `/terms`, `/refund-policy`

### 3. Update robots.txt
- Add `Sitemap: https://crypticstore.lovable.app/sitemap.xml` directive

### 4. Enhance SEO Across Pages Missing Optimization
Pages like `DJServices.tsx`, `YouKnowWeDoMagic.tsx`, `ImitableLives.tsx`, `Privacy.tsx`, `Terms.tsx` will be checked and enhanced with:
- Improved `<Helmet>` meta tags (title, description, canonical, Open Graph, Twitter cards)
- Structured data (JSON-LD) where missing
- Proper canonical URLs

### 5. Add "Dream Dare Drip" as Brand Tagline in SEO
- Incorporate "Dream Dare Drip" into meta descriptions and structured data across key pages to reinforce brand identity in search results

---

### Technical Details

**Files to create:**
- `public/sitemap.xml` -- static sitemap with all routes

**Files to modify:**
- `src/pages/Index.tsx` -- change subtitle text, update meta descriptions to include "Dream Dare Drip"
- `public/robots.txt` -- add Sitemap directive
- `src/pages/DJServices.tsx` -- add/enhance Helmet SEO tags
- `src/pages/YouKnowWeDoMagic.tsx` -- add/enhance Helmet SEO tags  
- `src/pages/ImitableLives.tsx` -- add/enhance Helmet SEO tags
- `src/pages/Privacy.tsx` -- enhance meta tags
- `src/pages/Terms.tsx` -- enhance meta tags
- `src/components/Footer.tsx` -- add "Dream Dare Drip" tagline for consistent branding

