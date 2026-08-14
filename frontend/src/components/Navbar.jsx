import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Store, Package, LayoutGrid } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-2 rounded-full font-medium transition-all ${
      isActive
        ? "bg-white text-brand-purple shadow-md"
        : "text-white/90 hover:bg-white/15"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-hero-gradient shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-display font-extrabold text-2xl">
          <Store className="w-7 h-7" />
          Novexa<span className="text-amber-200">Shop</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>
            <LayoutGrid className="w-4 h-4" /> Shop
          </NavLink>
          <NavLink to="/orders" className={linkClass}>
            <Package className="w-4 h-4" /> My Orders
          </NavLink>
        </div>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline font-medium">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-400 text-brand-purple text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
