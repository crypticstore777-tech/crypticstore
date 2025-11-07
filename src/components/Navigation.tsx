import { CartDrawer } from "./CartDrawer";
import { Link } from "react-router-dom";
import logo from "@/assets/cryptic-store-logo.jpg";

export const Navigation = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Cryptic Store Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold">Cryptic Store</span>
          </Link>
          
          <CartDrawer />
        </div>
      </div>
    </nav>
  );
};
