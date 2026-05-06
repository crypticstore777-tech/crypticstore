import { Link } from "react-router-dom";
import { Instagram, Youtube, Music2, Facebook } from "lucide-react";
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
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.facebook.com/RiseCrypticProductions" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/mc_mysterious" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@mcmysterous999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@mcmysterious" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.88a8.28 8.28 0 004.76 1.5V6.93a4.85 4.85 0 01-1-.24z"/></svg>
              </a>
              <a href="https://soundcloud.com/mcmysterious" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="SoundCloud">
                <Music2 className="h-5 w-5" />
              </a>
              <a href="https://www.mixcloud.com/mcmysterious/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Mixcloud">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2.462 8.596C1.192 9.387.4 10.717.4 12.208s.792 2.82 2.062 3.611l.46-.706c-1.014-.633-1.62-1.716-1.62-2.905s.606-2.272 1.62-2.905l-.46-.707zm3.077 1.924c-.635.397-1.014 1.074-1.014 1.818s.379 1.422 1.014 1.818l.46-.706a1.33 1.33 0 01-.572-1.112c0-.45.216-.826.572-1.112l-.46-.706zm14.999-2.616c-.635.397-1.014 1.074-1.014 1.818V12h-2.5V9.722c0-.744-.38-1.421-1.015-1.818l-.46.706c.357.287.573.663.573 1.112V12h-2.5V9.722c0-.744-.38-1.421-1.015-1.818l-.46.706c.357.287.573.663.573 1.112V12h-2.5V9.722c0-.744-.38-1.421-1.015-1.818l-.46.706c.357.287.573.663.573 1.112v2.278c0 .744.38 1.421 1.015 1.818l.46-.706a1.33 1.33 0 01-.573-1.112h2.5c0 .45-.216.826-.573 1.112l.46.706c.636-.397 1.015-1.074 1.015-1.818h2.5c0 .45-.216.826-.573 1.112l.46.706c.636-.397 1.015-1.074 1.015-1.818h2.5c0 .45-.216.826-.573 1.112l.46.706c.636-.397 1.015-1.074 1.015-1.818V9.722c0-.45.216-.826.572-1.112l-.46-.706z"/></svg>
              </a>
            </div>
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
                <Link to="/collections/imitable-lives" className="text-muted-foreground hover:text-foreground transition-colors">
                  Imitable Lives Collection
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
