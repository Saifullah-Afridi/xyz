import { useCart } from "../context/CartContext";
import { IoClose } from "react-icons/io5";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = +(subtotal * 0.02).toFixed(2);
  const shippingFee = 0; // Free
  const totalAmount = +(subtotal + tax + shippingFee).toFixed(2);

  return (
    <div className="custom-container mt-10 flex gap-8 min-h-[75vh]">
      {/* Left Side - Cart Items */}
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-6">
          Shopping Cart{" "}
          <span className="text-green-600">({cartItems.length} Items)</span>
        </h2>

        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between py-4 border-b"
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-[80px] h-[80px] object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Weight: N/A</p>
                <p className="text-sm">Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="text-lg font-medium">
              ${item.price * item.quantity}
            </div>
            <button onClick={() => removeFromCart(item._id)}>
              <IoClose className="text-red-500 text-2xl" />
            </button>
          </div>
        ))}
      </div>

      {/* Right Side - Order Summary */}
      <div className="w-[350px] p-6 border rounded-md shadow-md h-fit">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="text-sm mb-2">
          <p>DELIVERY ADDRESS</p>
          <p className="text-gray-600">
            Street 123, Main City, New State, IN{" "}
            <span className="text-green-600 cursor-pointer">Change</span>
          </p>
        </div>
        <div className="text-sm mb-4">
          <p>PAYMENT METHOD</p>
          <select className="border p-2 w-full mt-1">
            <option>Cash On Delivery</option>
          </select>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Price</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (2%)</span>
            <span>${tax}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>${totalAmount}</span>
          </div>
        </div>

        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
