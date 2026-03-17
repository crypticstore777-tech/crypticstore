

## Plan: Stripe Integration with DJ Booking Form and Subscriptions

This is a multi-step implementation. The first critical step is enabling Stripe, which will unlock additional Stripe-specific tools and context for creating products, prices, and checkout sessions.

### Step 1: Enable Stripe Integration
- Call `stripe--enable_stripe` to connect Stripe and store the API key
- This will reveal the full Stripe toolset (create products, prices, checkout sessions, etc.)

### Step 2: Database Migration
- Create `stripe_payments` table to track all Stripe transactions:
  - `id`, `user_id` (nullable for guest checkout), `stripe_session_id`, `stripe_customer_id`, `payment_type` (booking/payment/subscription), `amount`, `currency`, `status`, `metadata` (jsonb for event details), `created_at`
- RLS: authenticated users can read their own payments; public insert for webhook writes via service role

### Step 3: Edge Functions
- **`create-stripe-checkout`** — Creates Stripe Checkout Sessions
  - Accepts: `mode` (payment/subscription), `line_items` or `price_id`, `success_url`, `cancel_url`, `metadata` (event details from booking form)
  - Uses `STRIPE_SECRET_KEY` secret
  - `verify_jwt = false` in config.toml, validates auth in code (optional for guest bookings)
- **`stripe-webhook`** — Handles Stripe webhook events
  - Processes `checkout.session.completed`, `invoice.paid`
  - Inserts into `stripe_payments` table using service role
  - `verify_jwt = false`, validates Stripe webhook signature

### Step 4: Frontend — Stripe Helper
- **`src/lib/stripe.ts`** — Helper function `createStripeCheckout()` that calls the edge function and redirects to Stripe Checkout URL

### Step 5: Update DJ Services Page (`src/pages/DJServices.tsx`)
- Add a **DJ Booking Inquiry Form** section between services grid and wedding section:
  - Fields: Name, Email, Phone, Event Type (dropdown: Wedding, Corporate, Party, Club, Other), Event Date (date picker), Venue/Location, Estimated Guest Count, Special Requests (textarea)
  - Package selection: Basic ($300), Premium ($500), Wedding ($800) — each with feature list
  - On submit: creates Stripe Checkout Session with event details in metadata, redirects to Stripe
- Keep the external MysteriousEnterprise.com link as a secondary "Custom Quote" option

### Step 6: Create Subscription Page (`src/pages/Subscriptions.tsx`)
- VIP membership tiers with recurring Stripe payments:
  - **Cryptic Insider** ($9.99/mo) — Early access to drops, 10% discount
  - **VIP Mystic** ($24.99/mo) — All Insider perks + exclusive merch + priority DJ booking
  - **Elite Circle** ($49.99/mo) — All VIP perks + monthly mystery box + free event entry
- Each tier has a "Subscribe" button triggering Stripe Checkout in subscription mode
- Add `/subscriptions` route in App.tsx

### Step 7: Payment Success Page (`src/pages/PaymentSuccess.tsx`)
- Confirmation page showing payment details
- Different messaging for bookings vs subscriptions
- Add `/payment/success` route in App.tsx

### Step 8: Update Cart Drawer
- Add a "Checkout with Stripe" button below the existing Shopify checkout button in `CartDrawer.tsx`
- Converts cart items to Stripe line items and creates a checkout session

### Step 9: Navigation Updates
- Add "Subscriptions" link to navigation

### Files to Create/Modify
| File | Action |
|------|--------|
| `supabase/functions/create-stripe-checkout/index.ts` | Create |
| `supabase/functions/stripe-webhook/index.ts` | Create |
| `src/lib/stripe.ts` | Create |
| `src/pages/PaymentSuccess.tsx` | Create |
| `src/pages/Subscriptions.tsx` | Create |
| `src/pages/DJServices.tsx` | Modify — add booking form + packages |
| `src/components/CartDrawer.tsx` | Modify — add Stripe checkout button |
| `src/App.tsx` | Modify — add new routes |
| `supabase/config.toml` | Add edge function JWT config |
| Database migration | `stripe_payments` table |

