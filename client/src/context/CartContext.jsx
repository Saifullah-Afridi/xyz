import { createContext, useContext, useState } from "react";

item = {
  name,
  price,
  description,
  quantity,
  _id,
};

const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [numberofCartItems, setNumberOfCartItems] = useState(0);

  const updateCartItemCount = (items) => {
    const totalCount = items?.reduce((sum, item) => sum + item.quantity, 0);
    setNumberOfCartItems(totalCount);
  };

  const addToCart = (newCartItems) => {
    const existingItem = cartItems?.find(
      (citem) => newCartItems._id === citem._id
    );
    let newItems;
    if (existingItem) {
      newItems = cartItems?.map((citem) =>
        newCartItems._id === citem._id
          ? { ...citem, quantity: citem.quantity + newCartItems.quantity }
          : citem
      );
    } else {
      newItems = [...cartItems, newCartItems];
    }
    setCartItems(newItems);
    updateCartItemCount(newItems);
  };

  const deleteFromCart = (item) => {
    const filteredItems = cartItems?.filter((citem) => citem._id !== item._id);
    setCartItems(filteredItems);
    updateCartItemCount(filteredItems);
  };

  const decrementItemFromCart = (itemToBeDecrement) => {
    const updateCart = cartItems?.map((item) => {
      if (item?._id === itemToBeDecrement?._id && item?.quantity === 1) {
        return item;
      }
      return item._id === itemToBeDecrement._id
        ? { ...item, quantity: item?.quantity - 1 }
        : item;
    });
    setCartItems(updateCart);
    updateCartItemCount(updateCart);
  };

  const incrementItemFromCart = (itemToBeIncrement) => {
    const updatedItems = cartItems.map((citem) =>
      citem._id === itemToBeIncrement._id
        ? { ...citem, quantity: citem.quantity + 1 }
        : citem
    );
    setCartItems(updatedItems);
    updateCartItemCount(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
    setNumberOfCartItems(0);
  };

  const getTotalPrice = () => {
    return cartItems?.reduce(
      (total, citem) => total + citem?.price * citem?.quantity,
      0
    );
  };

  const value = {
    addToCart,
    deleteFromCart,
    incrementItemFromCart,
    decrementItemFromCart,
    cartItems,
    numberofCartItems,
    clearCart,
    getTotalPrice,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

const cart = () => {
  return useContext(cartContext);
};

export { cartContext, CartContextProvider, cart };
