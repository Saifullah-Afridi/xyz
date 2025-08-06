import { createContext, useContext, useState } from "react";

const orderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);

  const placeOrder = (items, totalAmount, cashMethod, deliveryAddress) => {
    const order = {
      _id: Math.random() * 10000,
      totalAmount: totalAmount,
      cashMethod: cashMethod,
      deliveryAddress: deliveryAddress,
      placementDate: new Date().toISOString(),
      status: "pending",
      items,
    };
    setCurrentOrder(order);
    setOrders([...orders, order]);
  };

  const value = { orders, placeOrder };
  return (
    <orderContext.Provider value={value}>{children}</orderContext.Provider>
  );
};

const useOrderContext = () => {
  return useContext(orderContext);
};

export { OrderContextProvider, useOrderContext };
