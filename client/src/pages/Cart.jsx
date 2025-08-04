import { useState } from "react";

const Cart = ({ initialCartItems }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const incrementQuantity = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item._id !== itemId));
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => incrementQuantity(item._id)}>+</button>
            <button onClick={() => decrementQuantity(item._id)}>-</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button
          onClick={resetCart}
          style={{ marginTop: "20px", background: "red", color: "white" }}
        >
          Reset Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
