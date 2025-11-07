import { Store } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Store className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Sparkle Shop</span>
          </Link>
          
          <CartDrawer />
        </div>
      </div>
    </nav>
  );
};
