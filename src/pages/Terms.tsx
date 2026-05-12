import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Terms & Conditions | Cryptic Store - Mysterious Enterprise</title>
        <meta name="description" content="Terms and Conditions for Cryptic Store by Mysterious Enterprise. Read our terms of service before making a purchase. Dream Dare Drip." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://crypticstore.lovable.app/terms" />
      </Helmet>

      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Cryptic Store (operated by Mysterious Enterprise LLC), you agree to be 
              bound by these Terms and Conditions. If you do not agree with any part of these terms, you 
              may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Products and Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cryptic Store offers apparel, merchandise, and various services including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Streetwear and fashion apparel (Dare2Wear, Imitable Lives collections)</li>
              <li>DJ and entertainment services</li>
              <li>Spiritual and mystical services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All products are subject to availability. We reserve the right to limit quantities, 
              discontinue products, or modify prices at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Orders and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By placing an order, you represent that you are at least 18 years old and have the legal 
              authority to enter into this agreement. All orders are subject to acceptance and availability.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Prices are displayed in USD and include applicable taxes where required</li>
              <li>Payment must be received in full before order processing</li>
              <li>We accept major credit cards and other payment methods as displayed at checkout</li>
              <li>We reserve the right to refuse or cancel any order for any reason</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              Shipping times and costs vary based on destination and selected shipping method. We are not 
              responsible for delays caused by shipping carriers, customs, or circumstances beyond our control. 
              Risk of loss transfers to you upon delivery to the carrier.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Free shipping is available on orders over $75 within the United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, 
              designs, and software, is the property of Mysterious Enterprise LLC and is protected by 
              copyright, trademark, and other intellectual property laws. The "Cryptic Store," "Dare2Wear," 
              "Imitable Lives," and "#Youknowwedomagic" marks are trademarks of Mysterious Enterprise LLC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Submit false or misleading information</li>
              <li>Resell products without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our products and services are provided "as is" without warranties of any kind, either express 
              or implied. We do not warrant that our website will be uninterrupted, error-free, or free of 
              viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Mysterious Enterprise LLC shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your use of our 
              services or products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Mysterious Enterprise LLC and its officers, directors, 
              employees, and agents from any claims, damages, or expenses arising from your use of our services 
              or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of 
              the United States. Any disputes shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
              immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <p className="font-medium">Mysterious Enterprise LLC</p>
              <p className="text-muted-foreground">Email: legal@crypticstore.shop</p>
              <p className="text-muted-foreground">Website: MysteriousEnterprise.com</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
