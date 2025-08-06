import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CiTrash } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {
  const [cashMethod, setCashMethod] = useState("COD");
  const {
    deleteFromCart,
    incrementItemFromCart,
    decrementItemFromCart,
    cartItems,
    numberofCartItems,
    clearCart,
    getTotalPrice,
  } = useCart();

  const currency = import.meta.env.VITE_PRICE;

  const handleBack = () => {
    window.history.go(-1);
  };

  return (
    <div className="custom-container mt-10   ">
      {numberofCartItems > 0 ? (
        <div className="flex justify-between gap-3 ">
          <div className="flex-3 p-5 shadow-md rounded-sm border-1 border-gray-300   ">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-1">
                  <h1 className="text-primary text-3xl font-semibold">
                    Shopping cart
                  </h1>
                  <span className="text-[16px] text-body-text self-end">
                    {numberofCartItems} items
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 text-body-text font-semibold mb-4">
                <span>Product Details</span>
                <span>Subtotal</span>
                <span>Action</span>
              </div>
              <div className="">
                {cartItems?.map((item) => (
                  <div
                    key={item._id}
                    className="grid grid-cols-3 items-center space-x-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image[0]}
                        alt="item image"
                        className="w-32 rounded-sm border-1 border-gray-200 "
                      />
                      <div className="flex flex-col gap-[3px] text-body-text">
                        <span>{item.name}</span>
                        <span>Qnt : {item.quantity}</span>
                        <div className="flex items-center gap-2 ">
                          <span
                            className="border-1 border-gray-200 h-6 w-6 justify-center  flex flex-col items-center rounded-sm cursor-pointer hover:bg-primary hover:text-white select-none "
                            onClick={(e) => {
                              decrementItemFromCart(item);
                              e.stopPropagation();
                            }}
                          >
                            -
                          </span>
                          <span className="select-none text-[17px]">
                            {item.quantity}
                          </span>

                          <span
                            className="border-1 border-gray-200 h-6 w-6 justify-center  flex flex-col items-center rounded-sm cursor-pointer hover:bg-primary hover:text-white select-none "
                            onClick={(e) => {
                              incrementItemFromCart(item);
                              e.stopPropagation();
                            }}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-body-text">
                      $ {item.quantity * item.price}{" "}
                    </span>
                    <span
                      onClick={() => deleteFromCart(item)}
                      className="cursor-pointer text-body-text "
                    >
                      <CiTrash className="text-red-500" size={20} />
                    </span>
                  </div>
                ))}
              </div>
              <span
                className="text-orange-500  flex items-center gap-2 underline cursor-pointer underline-offset-4 mt-6"
                onClick={handleBack}
              >
                <FaArrowLeft /> Continue Shopping
              </span>
              <button
                className="bg-orange-300 px-6 py-2 cursor-pointer hover:bg-orange-400 rounded-md self-start"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="border-1 border-gray-300 p-4 flex-1 shadow-md rounded-sm ">
            <div>
              <h2 className="text-primary text-2xl font-medium  ">
                Order Summary
              </h2>
              <div className="h-[2px] bg-gray-200 mt-2"></div>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <span className="text-body-text font-semibold text-[16px]">
                DELIVERY ADDRESS
              </span>
              <select className="outline-1 outline-gray-200 py-2 cursor-pointer rounded-sm">
                <option value="Shiekh abad" className="cursor-pointer">
                  Shiekh abad
                </option>
                <option value="ahamd abad" className="cursor-pointer">
                  ahamad abad
                </option>
                <option value="shabir abad" className="cursor-pointer">
                  Shabir abad
                </option>
              </select>
            </div>
            <div className="flex flex-col mt-6 gap-2">
              <span className="text-body-text font-semibold text-[16px]">
                PAYMENT METHOD
              </span>
              <select
                className="outline-1 outline-gray-200 py-2 cursor-pointer rounded-sm"
                onChange={(e) => setCashMethod(e.target.value)}
              >
                <option value="COD" className="cursor-pointer">
                  Cash on Delivery
                </option>
                <option value="ONLINE" className="cursor-pointer">
                  Online
                </option>
              </select>
              <div className="h-[2px] bg-gray-200 mt-4"></div>

              <div className="mt-6 flex flex-col gap-1  ">
                <div className="flex justify-between">
                  <span className="text-body-text">Product price</span>
                  <span className="text-body-text">
                    {currency}
                    {getTotalPrice()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-body-text">Shipping Fee</span>
                  <span className="text-body-text">{currency}2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body-text text-[18px] font-bold">
                    Total Amount
                  </span>
                  <span className="text-body-text  text-[18px] font-bold">
                    {currency}
                    {getTotalPrice() + 2}
                  </span>
                </div>
              </div>
              <button className="bg-primary py-2 text-white hover:bg-green-600 cursor-pointer my-4 rounded-md">
                {cashMethod === "COD" ? "Place Order" : "Proceed with Order"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[80vh] flex flex-col gap-2 items-center justify-center">
          <span className="text-orange-500 text-3xl underline underline-offset-8">
            {" "}
            No item is in cart
          </span>
          <span
            className="flex items-center  gap-2  cursor-pointer text-2xl text-primary mt-4"
            onClick={handleBack}
          >
            <FaArrowLeft /> Go Back
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
