import { useState } from "react";
import { Link } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";
import { NavLink } from "./NavLink";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Menu, ChevronDown } from "lucide-react";
import logo from "@/assets/cryptic-store-logo.jpg";
import { cn } from "@/lib/utils";

interface DropdownGroup {
  label: string;
  items: { to: string; label: string; description?: string }[];
}

const dropdownGroups: DropdownGroup[] = [
  {
    label: "Collections",
    items: [
      { to: "/collections/dare2wear", label: "Dare2Wear", description: "Bold streetwear collection" },
      { to: "/collections/imitable-lives", label: "Imitable Lives", description: "Egyptian-inspired luxury" },
      { to: "/youknowwedomagic", label: "#YouKnowWeDoMagic", description: "Spiritual & creative services" },
    ],
  },
  {
    label: "Entertainment",
    items: [
      { to: "/dj-services", label: "DJ Services", description: "Mobile DJ & events" },
      { to: "/music", label: "Music", description: "Tracks, mixes & live sets" },
      { to: "/sync-hub", label: "Sync Hub", description: "Sync licensing" },
    ],
  },
  {
    label: "Explore",
    items: [
      { to: "/sacramento", label: "Sacramento", description: "Sac-town culture & events" },
      { to: "/blog", label: "Blog", description: "The Cryptic Chronicles" },
    ],
  },
];

const standaloneLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About", exact: false },
  { to: "/contact", label: "Contact", exact: false },
];

// All links flat (for mobile)
const allNavLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About", exact: false },
  { to: "/collections/dare2wear", label: "Dare2Wear", exact: false },
  { to: "/collections/imitable-lives", label: "Imitable Lives", exact: false },
  { to: "/dj-services", label: "DJ Services", exact: false },
  { to: "/music", label: "Music", exact: false },
  { to: "/sync-hub", label: "Sync Hub", exact: false },
  { to: "/sacramento", label: "Sacramento", exact: false },
  { to: "/youknowwedomagic", label: "#YouKnowWeDoMagic", exact: false },
  { to: "/blog", label: "Blog", exact: false },
  { to: "/contact", label: "Contact", exact: false },
];

// Mobile grouped links for accordion-style sections
const mobileGroups = [
  { label: null, items: [{ to: "/", label: "Home", exact: true }, { to: "/about", label: "About", exact: false }] },
  { label: "Collections", items: [{ to: "/collections/dare2wear", label: "Dare2Wear", exact: false }, { to: "/collections/imitable-lives", label: "Imitable Lives", exact: false }, { to: "/youknowwedomagic", label: "#YouKnowWeDoMagic", exact: false }] },
  { label: "Entertainment", items: [{ to: "/dj-services", label: "DJ Services", exact: false }, { to: "/music", label: "Music", exact: false }, { to: "/sync-hub", label: "Sync Hub", exact: false }] },
  { label: "Explore", items: [{ to: "/sacramento", label: "Sacramento", exact: false }, { to: "/blog", label: "Blog", exact: false }] },
  { label: null, items: [{ to: "/contact", label: "Contact", exact: false }] },
];

const DropdownItem = ({ to, label, description, onSelect }: { to: string; label: string; description?: string; onSelect?: () => void }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        to={to}
        onClick={onSelect}
        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{label}</div>
        {description && (
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1.5">
            {description}
          </p>
        )}
      </Link>
    </NavigationMenuLink>
  </li>
);

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to="/"
                      end
                      activeClassName="bg-primary/10 text-primary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Button variant="ghost" size="sm" className="pointer-events-none">
                        Home
                      </Button>
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to="/about"
                      activeClassName="bg-primary/10 text-primary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Button variant="ghost" size="sm" className="pointer-events-none">
                        About
                      </Button>
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Dropdown groups */}
                {dropdownGroups.map((group) => (
                  <NavigationMenuItem key={group.label}>
                    <NavigationMenuTrigger className="bg-transparent">{group.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[220px] gap-1 p-2">
                        {group.items.map((item) => (
                          <DropdownItem key={item.to} {...item} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to="/contact"
                      activeClassName="bg-primary/10 text-primary"
                      className="hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Button variant="ghost" size="sm" className="pointer-events-none">
                        Contact
                      </Button>
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search Bar */}
            <div className="hidden md:block">
              <SearchBar />
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="flex flex-col gap-1 mt-8">
                  {/* Mobile Search */}
                  <div className="mb-4">
                    <SearchBar />
                  </div>

                  {mobileGroups.map((group, gi) => (
                    <div key={gi}>
                      {group.label ? (
                        <>
                          <button
                            onClick={() => setExpandedGroup(expandedGroup === group.label ? null : group.label!)}
                            className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                          >
                            {group.label}
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                expandedGroup === group.label && "rotate-180"
                              )}
                            />
                          </button>
                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-200",
                              expandedGroup === group.label ? "max-h-60" : "max-h-0"
                            )}
                          >
                            {group.items.map((link) => (
                              <NavLink
                                key={link.label}
                                to={link.to}
                                end={link.exact}
                                onClick={() => setMobileMenuOpen(false)}
                                activeClassName="bg-primary/10 text-primary"
                                className="hover:bg-accent rounded-md transition-colors"
                              >
                                <Button variant="ghost" size="default" className="w-full justify-start pointer-events-none pl-8 text-sm">
                                  {link.label}
                                </Button>
                              </NavLink>
                            ))}
                          </div>
                        </>
                      ) : (
                        group.items.map((link) => (
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
                        ))
                      )}
                    </div>
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
