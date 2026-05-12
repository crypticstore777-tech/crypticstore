import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Refund Policy | Cryptic Store - Mysterious Enterprise</title>
        <meta name="description" content="Refund and Return Policy for Cryptic Store by Mysterious Enterprise. Learn about our return process, exchanges, and refund eligibility." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Refund & Return Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-primary">Our Commitment</h2>
            <p className="text-muted-foreground">
              At Cryptic Store, we want you to be completely satisfied with your purchase. If you're not 
              happy with your order, we're here to help. #Youknowwedomagic
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Return Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Items may be returned within <strong>30 days</strong> of delivery if they meet the following conditions:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Item is unworn, unwashed, and in original condition</li>
              <li>All original tags are attached</li>
              <li>Item is in original packaging</li>
              <li>Proof of purchase (order confirmation or receipt) is provided</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Non-Returnable Items</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The following items cannot be returned or exchanged:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Items marked as "Final Sale" or purchased during clearance events</li>
              <li>Customized or personalized items</li>
              <li>Intimate apparel and swimwear (for hygiene reasons)</li>
              <li>Items that have been worn, washed, altered, or damaged by the customer</li>
              <li>Gift cards</li>
              <li>Digital products or services (DJ bookings, spiritual services)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How to Initiate a Return</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-medium">Contact Us</h3>
                  <p className="text-muted-foreground">Email us at returns@crypticstore.shop with your order number and reason for return.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-medium">Receive Return Authorization</h3>
                  <p className="text-muted-foreground">We'll provide you with a Return Merchandise Authorization (RMA) number and shipping instructions within 2-3 business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-medium">Ship Your Return</h3>
                  <p className="text-muted-foreground">Pack items securely and ship to the provided address. Include the RMA number on the outside of the package.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="font-medium">Receive Your Refund</h3>
                  <p className="text-muted-foreground">Once we receive and inspect your return, we'll process your refund within 5-7 business days.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Refund Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Approved refunds will be credited to your original payment method:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Credit/Debit Cards:</strong> 5-10 business days after refund is processed</li>
              <li><strong>PayPal:</strong> 3-5 business days after refund is processed</li>
              <li><strong>Store Credit:</strong> Immediately upon approval (optional alternative)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Original shipping charges are non-refundable unless the return is due to our error or a defective product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Exchanges</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer exchanges for different sizes or colors of the same item, subject to availability. 
              To request an exchange, follow the same process as returns and specify your preferred 
              replacement item. If the exchanged item has a price difference, we'll either charge or 
              refund the difference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Defective or Damaged Items</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you receive a defective or damaged item, please contact us within <strong>7 days</strong> of 
              delivery with photos of the damage. We will provide a prepaid return label and send a 
              replacement at no additional cost, or issue a full refund including original shipping charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Shipping Costs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead className="bg-card">
                  <tr>
                    <th className="text-left p-4 border-b border-border">Return Reason</th>
                    <th className="text-left p-4 border-b border-border">Who Pays Shipping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-border text-muted-foreground">Change of mind / Wrong size ordered</td>
                    <td className="p-4 border-b border-border text-muted-foreground">Customer</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border text-muted-foreground">Defective or damaged item</td>
                    <td className="p-4 border-b border-border text-muted-foreground">Cryptic Store</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border text-muted-foreground">Wrong item shipped</td>
                    <td className="p-4 border-b border-border text-muted-foreground">Cryptic Store</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-muted-foreground">Exchange for different size/color</td>
                    <td className="p-4 text-muted-foreground">Customer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. International Orders</h2>
            <p className="text-muted-foreground leading-relaxed">
              International customers are responsible for return shipping costs and any customs duties or 
              taxes. We recommend using a trackable shipping method. Refunds for international orders will 
              be processed in the original currency of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Have questions about returns or refunds? We're here to help:
            </p>
            <div className="p-4 bg-card rounded-lg border border-border">
              <p className="font-medium">Cryptic Store Returns Department</p>
              <p className="text-muted-foreground">Email: returns@crypticstore.shop</p>
              <p className="text-muted-foreground">Response time: 24-48 hours</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
