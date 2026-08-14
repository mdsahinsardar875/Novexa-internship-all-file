import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto text-brand-purple mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-400 mb-6">Looks like you haven't added anything yet.</p>
        <Link
          to="/"
          className="inline-block bg-card-gradient text-white font-semibold px-6 py-3 rounded-full shadow hover:opacity-90"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-display font-bold text-gray-800 mb-6">🛒 Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 bg-white rounded-2xl shadow p-4 border border-purple-100"
          >
            <img
              src={item.image || "https://placehold.co/100"}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-brand-purple font-bold">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center border-2 border-gray-200 rounded-full">
              <button
                onClick={() => updateQty(item._id, item.qty - 1)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center font-medium">{item.qty}</span>
              <button
                onClick={() => updateQty(item._id, item.qty + 1)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item._id)}
              className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow p-6 border border-purple-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-gray-500 text-sm">Order Total</p>
          <p className="text-3xl font-extrabold gradient-text">${cartTotal.toFixed(2)}</p>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full sm:w-auto bg-card-gradient text-white font-semibold px-8 py-3 rounded-full shadow hover:opacity-90 active:scale-95 transition-all"
        >
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default Cart;
