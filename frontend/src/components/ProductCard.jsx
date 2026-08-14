import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import StarRating from "./StarRating";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card-hover bg-white rounded-2xl shadow-md overflow-hidden border border-purple-100 flex flex-col">
      <Link to={`/product/${product._id}`} className="block relative">
        <img
          src={product.image || "https://placehold.co/400x300?text=Novexa+Shop"}
          alt={product.name}
          className="w-full h-44 object-cover"
        />
        {product.category?.name && (
          <span
            className="absolute top-2 left-2 text-xs font-semibold px-2.5 py-1 rounded-full text-white shadow"
            style={{ backgroundColor: product.category?.color || "#7C3AED" }}
          >
            {product.category?.icon} {product.category?.name}
          </span>
        )}
        {product.quantity === 0 && (
          <span className="absolute top-2 right-2 text-xs font-bold px-2.5 py-1 rounded-full bg-red-500 text-white shadow">
            Out of Stock
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link to={`/product/${product._id}`}>
          <h3 className="font-semibold text-gray-800 line-clamp-1 hover:text-brand-purple transition-colors">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} />
        <p className="text-xs text-gray-400 mt-1">Qty available: {product.quantity}</p>

        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-lg font-bold gradient-text">${product.price?.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            disabled={product.quantity === 0}
            className="flex items-center gap-1 bg-card-gradient text-white text-sm font-medium px-3 py-2 rounded-full shadow hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
