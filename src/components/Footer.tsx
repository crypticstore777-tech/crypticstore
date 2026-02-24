import { Link } from "react-router-dom";
import logo from "@/assets/cryptic-store-logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Cryptic Store Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold">Cryptic Store</span>
            </Link>
            <p className="text-primary text-sm font-bold tracking-widest">Dream Dare Drip</p>
            <p className="text-muted-foreground text-sm mt-1">
              Online Boutique by Mysterious Enterprise
            </p>
            <p className="text-muted-foreground text-xs mt-1">#Youknowwedomagic</p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/collections/dare2wear" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dare2Wear Collection
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dj-services" className="text-muted-foreground hover:text-foreground transition-colors">
                  DJ Services
                </Link>
              </li>
              <li>
                <Link to="/youknowwedomagic" className="text-muted-foreground hover:text-foreground transition-colors">
                  Spiritual Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mysterious Enterprise LLC. All rights reserved.
          </p>
          <a 
            href="https://mysteriousenterprise.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            MysteriousEnterprise.com
          </a>
        </div>
      </div>
    </footer>
  );
};
