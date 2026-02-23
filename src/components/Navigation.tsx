import { useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { NavLink } from "./NavLink";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/cryptic-store-logo.jpg";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/collections/imitable-lives", label: "Imitable Lives", exact: false },
    { to: "/collections/dare2wear", label: "Dare2Wear", exact: false },
    { to: "/dj-services", label: "DJ Services", exact: false },
    { to: "/youknowwedomagic", label: "Services", exact: false },
    { to: "/music", label: "Music", exact: false },
    { to: "/contact", label: "Contact", exact: false },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Cryptic Store Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold">Cryptic Store</span>
          </NavLink>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.label} 
                  to={link.to}
                  end={link.exact}
                  activeClassName="bg-primary/10 text-primary"
                  className="hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Button variant="ghost" size="sm" className="pointer-events-none">
                    {link.label}
                  </Button>
                </NavLink>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:block">
              <SearchBar />
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col gap-4 mt-8">
                  {/* Mobile Search */}
                  <div className="mb-4">
                    <SearchBar />
                  </div>
                  
                  {navLinks.map((link) => (
                    <NavLink 
                      key={link.label} 
                      to={link.to}
                      end={link.exact}
                      onClick={() => setMobileMenuOpen(false)}
                      activeClassName="bg-primary/10 text-primary"
                      className="hover:bg-accent rounded-md transition-colors"
                    >
                      <Button variant="ghost" size="lg" className="w-full justify-start pointer-events-none">
                        {link.label}
                      </Button>
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            <UserMenu />
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};
