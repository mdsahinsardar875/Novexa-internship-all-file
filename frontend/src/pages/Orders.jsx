import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import api from "../api/axios";

const statusColors = {
  Pending: "bg-amber-100 text-amber-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-indigo-100 text-indigo-700",
  Delivered: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-red-100 text-red-700",
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/orders")
      .then((res) => setOrders(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-display font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Package className="w-6 h-6 text-brand-purple" /> My Orders
      </h1>

      {loading ? (
        <p className="text-gray-400 text-center py-10">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-400 text-center py-10">No orders yet. Go place one! 🛍️</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white rounded-2xl shadow p-5 border border-purple-100">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <div>
                  <p className="font-semibold text-gray-800">Order #{order._id.slice(-6).toUpperCase()}</p>
                  <p className="text-xs text-gray-400">{new Date(order.createdAt).toLocaleString()}</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                {order.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center border-t pt-3">
                <span className="text-gray-500 text-sm">Shipping to: {order.shippingAddress}</span>
                <span className="font-bold gradient-text text-lg">${order.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
