import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Minus, Plus, ArrowLeft } from "lucide-react";
import api from "../api/axios";
import StarRating from "../components/StarRating";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data.data));
  }, [id]);

  if (!product) return <div className="text-center py-20 text-gray-400">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <Link to="/" className="inline-flex items-center gap-1 text-brand-purple font-medium mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg p-6 sm:p-10 border border-purple-100">
        <img
          src={product.image || "https://placehold.co/500x400?text=Novexa+Shop"}
          alt={product.name}
          className="w-full h-80 object-cover rounded-2xl shadow"
        />

        <div className="flex flex-col">
          {product.category?.name && (
            <span
              className="self-start text-xs font-semibold px-3 py-1 rounded-full text-white mb-3"
              style={{ backgroundColor: product.category?.color || "#7C3AED" }}
            >
              {product.category?.icon} {product.category?.name}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-gray-800 mb-2">{product.name}</h1>
          <StarRating rating={product.rating} size={18} />
          <p className="text-gray-500 mt-4 leading-relaxed">{product.description}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-extrabold gradient-text">${product.price?.toFixed(2)}</span>
            <span className={`text-sm font-medium ${product.quantity > 0 ? "text-emerald-600" : "text-red-500"}`}>
              {product.quantity > 0 ? `${product.quantity} in stock` : "Out of stock"}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border-2 border-gray-200 rounded-full">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-2.5 hover:bg-gray-100 rounded-full"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(product.quantity, q + 1))}
                className="p-2.5 hover:bg-gray-100 rounded-full"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => addToCart(product, qty)}
              disabled={product.quantity === 0}
              className="flex-1 flex items-center justify-center gap-2 bg-card-gradient text-white font-semibold py-3 rounded-full shadow hover:opacity-90 active:scale-95 transition-all disabled:opacity-40"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
