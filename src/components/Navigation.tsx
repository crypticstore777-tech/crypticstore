import { useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/cryptic-store-logo.jpg";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/", label: "Shop" },
    { to: "/collections/dare2wear", label: "Dare2Wear Collection" },
    { to: "/youknowwedomagic", label: "Services" },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Cryptic Store Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold">Cryptic Store</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.to}>
                  <Button variant="ghost" size="sm">{link.label}</Button>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.label} 
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button variant="ghost" size="lg" className="w-full justify-start">
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};
