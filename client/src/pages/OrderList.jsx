import React, { useState } from "react";
import { dummyOrders } from "../assets/assets";

const orderStatuses = [
  "Order Placed",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

const SellerOrders = () => {
  const [orders, setOrders] = useState(dummyOrders);

  const handleStatusChange = (orderId, newStatus) => {
    const updated = orders.map((order) =>
      order._id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Seller Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">Order ID:</p>
                <p className="text-lg font-semibold text-gray-800">
                  {order._id}
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-sm text-gray-500">Order Date:</p>
                <p className="text-md text-gray-700">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-2">Items</h3>
              <div className="space-y-1 text-gray-700">
                {order.items.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
              <div>
                <p className="font-semibold text-gray-800">User ID</p>
                <p>{order.userId}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Payment</p>
                <p>
                  {order.paymentType} ({order.isPaid ? "Paid" : "Unpaid"})
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Total Amount</p>
                <p>${order.amount}</p>
              </div>
            </div>

            {/* Address */}
            <div className="mb-4">
              <p className="font-semibold text-gray-800">Shipping Address</p>
              <p className="text-sm text-gray-700">
                {order.address.street}, {order.address.city},{" "}
                {order.address.state} – {order.address.zip}
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3">
              <label htmlFor="status" className="font-semibold text-gray-800">
                Status:
              </label>
              <select
                id="status"
                value={order.status}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {orderStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Cancelled"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerOrders;
