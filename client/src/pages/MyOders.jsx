import { useCart } from "../context/CartContext";
import { useOrderContext } from "../context/OrderContext";

const Orders = () => {
  const { orders } = useOrderContext();

  return (
    <div className="custom-container mt-10">
      <h1 className="text-3xl font-bold text-primary mb-6">All Orders</h1>

      {orders.length === 0 ? (
        <p className="text-red-500 text-lg">No orders have been placed yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-300 p-4 rounded-md shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700">
                  Order #{order._id}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(order.placementDate).toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <p>
                  <strong>Payment Method:</strong> {order.cashMethod}
                </p>
                <p>
                  <strong>Delivery Address:</strong> {order.deliveryAddress}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="text-yellow-500 font-medium">
                    {order.status}
                  </span>
                </p>
                <p>
                  <strong>Total:</strong> ${order.totalAmount}
                </p>
              </div>

              <div className="mt-3">
                <p className="font-medium mb-2">Ordered Items:</p>
                <ul className="space-y-3">
                  {order.items?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 border p-2 rounded"
                    >
                      <img
                        src={item.image?.[0]}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p>Qty: {item.quantity}</p>
                        <p>
                          Price: ${item.offerPrice} x {item.quantity} = $
                          {item.offerPrice * item.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
