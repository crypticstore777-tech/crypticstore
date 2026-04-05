

## Plan: Fix Dare2Wear Collection & Add DJ Promo Link

### Problem
1. **Dare2Wear page shows no products** -- The filter checks product titles for "dare"/"toxic"/"dare2wear", but the "Aries Boxer Briefs" product has "Dare2Wear" as a Shopify **tag**, not in its title. The filter never matches.
2. **No link to DJ promo video landing page** (mcmysterious.lovable.app) anywhere on the site.

### Changes

**1. Fix Dare2Wear product filtering** (`src/pages/Dare2Wear.tsx`)
- Switch from fetching all products and client-side title filtering to using the Shopify Storefront API `query` parameter: `tag:Dare2Wear`
- This uses `getProducts(50, "tag:Dare2Wear")` which is already supported by the existing `getProducts` function
- Remove the client-side `.filter()` call -- the API handles it server-side
- This ensures any product tagged "Dare2Wear" in Shopify automatically appears

**2. Add DJ Promo Video link** (`src/components/Navigation.tsx`, `src/pages/DJServices.tsx`)
- Add external link to `https://mcmysterious.lovable.app` on the DJ Services page as a prominent CTA button ("Watch DJ Promo Video")
- Optionally add it to the Navigation as well under DJ Services or as a standalone link

### Files Changed
| File | Change |
|------|--------|
| `src/pages/Dare2Wear.tsx` | Use `getProducts(50, "tag:Dare2Wear")` instead of fetching all + client-side filter |
| `src/pages/DJServices.tsx` | Add external link/CTA to mcmysterious.lovable.app |

