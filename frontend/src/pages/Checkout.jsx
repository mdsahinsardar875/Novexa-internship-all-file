import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import api from "../api/axios";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ customerName: "", customerEmail: "", shippingAddress: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setSubmitting(true);
    try {
      const items = cart.map((item) => ({ product: item._id, quantity: item.qty }));
      const res = await api.post("/orders", { ...form, items });
      clearCart();
      toast.success("Order placed successfully! 🎉");
      navigate("/orders", { state: { newOrderId: res.data.data._id } });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to place order");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-display font-bold text-gray-800 mb-6">📦 Checkout</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 sm:p-8 border border-purple-100 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
          <input
            required
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input
            required
            type="email"
            name="customerEmail"
            value={form.customerEmail}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Shipping Address</label>
          <textarea
            required
            name="shippingAddress"
            value={form.shippingAddress}
            onChange={handleChange}
            rows={3}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            placeholder="123 Main St, Springfield, USA"
          />
        </div>

        <div className="bg-purple-50 rounded-xl p-4 flex justify-between items-center">
          <span className="text-gray-600">Total ({cart.length} items)</span>
          <span className="text-xl font-bold gradient-text">${cartTotal.toFixed(2)}</span>
        </div>

        <button
          type="submit"
          disabled={submitting || cart.length === 0}
          className="w-full flex items-center justify-center gap-2 bg-card-gradient text-white font-semibold py-3 rounded-full shadow hover:opacity-90 active:scale-95 transition-all disabled:opacity-40"
        >
          <CheckCircle className="w-5 h-5" />
          {submitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
