

## Plan: Integrate Stripe for Payments

I can see your Stripe restricted API key in the uploaded image. The current site uses Shopify Storefront API for product browsing and checkout. Here's the plan to add Stripe for DJ bookings, one-time payments, subscriptions, and as an alternative checkout.

### Step 1: Store the Stripe API Key
- Save the restricted key (`rk_live_51T8v...`) as a backend secret called `STRIPE_SECRET_KEY`

### Step 2: Enable the Stripe Integration
- Use the Stripe connector to link Stripe to the project, which will set up the necessary infrastructure

### Step 3: Create a Stripe Checkout Edge Function
- **`supabase/functions/create-stripe-checkout/index.ts`** — Creates Stripe Checkout Sessions for:
  - **DJ service bookings** (one-time payments with configurable amounts/packages)
  - **One-time payments** (digital products, donations, custom services)
  - **Subscriptions** (VIP memberships, recurring services)
- Accepts `mode` param (`payment` or `subscription`), line items, and success/cancel URLs
- Uses the stored `STRIPE_SECRET_KEY` secret

### Step 4: Create a Stripe Webhook Edge Function
- **`supabase/functions/stripe-webhook/index.ts`** — Handles `checkout.session.completed` and `invoice.paid` events
- Records completed payments/bookings in a new `stripe_payments` database table

### Step 5: Database Migration
- Create `stripe_payments` table with columns: `id`, `user_id`, `stripe_session_id`, `stripe_customer_id`, `payment_type` (booking/one-time/subscription), `amount`, `currency`, `status`, `metadata`, `created_at`
- RLS policies for authenticated users to read their own payments

### Step 6: Update DJ Services Page
- Replace the external "Book Now at MysteriousEnterprise.com" links with in-app booking buttons
- Add DJ package options (e.g., Basic $300, Premium $500, Wedding $800) that trigger Stripe Checkout
- Add a booking form collecting event date, venue, and event type before checkout

### Step 7: Update Cart/Checkout
- Add a "Checkout with Stripe" button alongside the existing Shopify checkout in `CartDrawer.tsx`
- Create **`src/lib/stripe.ts`** helper to call the edge function and redirect to Stripe Checkout

### Step 8: Create a Stripe Success Page
- **`src/pages/PaymentSuccess.tsx`** — Confirmation page after successful Stripe payment
- Add route `/payment/success` in `App.tsx`

### Files to Create/Modify
| File | Action |
|------|--------|
| `supabase/functions/create-stripe-checkout/index.ts` | Create |
| `supabase/functions/stripe-webhook/index.ts` | Create |
| `src/lib/stripe.ts` | Create |
| `src/pages/PaymentSuccess.tsx` | Create |
| `src/pages/DJServices.tsx` | Modify — add booking packages + Stripe checkout |
| `src/components/CartDrawer.tsx` | Modify — add Stripe checkout option |
| `src/App.tsx` | Modify — add payment success route |
| Database migration | Create `stripe_payments` table with RLS |

