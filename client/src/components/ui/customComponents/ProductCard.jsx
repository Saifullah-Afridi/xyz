import { useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../../context/CartContext";

const ProductCard = ({ product }) => {
  const { _id, name, category, price, image, numberOfReviews, offerPrice } =
    product;
  const [numberOfItems, setNumberOfItems] = useState(1);
  const { addToCart, cartItems } = useCart();
  const currency = import.meta.env.VITE_PRICE;

  const incrementNumberOfItems = () => {
    setNumberOfItems((prev) => prev + 1);
  };

  const DecrementNumberOfItems = () => {
    if (numberOfItems === 1) {
      return;
    }
    setNumberOfItems((prev) => prev + 1);
  };

  const addItem = (numberOfItems) => {
    const updatedItem = { ...product, quantity: numberOfItems };
    addToCart(updatedItem);
  };

  console.log(cartItems);

  return (
    <div className="border-[1px] border-gray-200 p-3  rounded-sm hover:shadow-xl cursor-pointer transition-all duration-150 ease-in-out ">
      <div className=" flex flex-col items-center">
        <img
          src={image[0]}
          alt="Food image"
          className="w-[200px] object-center"
        />
      </div>
      <div className="self-start flex flex-col gap-1">
        <span className="text-primary ">{category}</span>
        <span className="text-body-text font-semibold text-[18px]">{name}</span>
        <div className="flex items-center justify-between gap">
          <div className="flex items-center gap-1 ">
            <span className="flex">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
            </span>
            <span className="text-sm">{`(${numberOfReviews})`}</span>
          </div>
        </div>
        <div className="flex  items-center gap-1 ">
          <span className="font-semibold text-[17px] text-primary">{`${currency}${price}`}</span>
          <span className="text-[13px] line-through text-[#6b7280] ">{`${currency}${offerPrice}`}</span>
        </div>

        <div className="flex justify-between ">
          <div className="flex items-center gap-1">
            <span
              className="border-1 border-gray-200 h-5 w-5 justify-center  flex flex-col items-center rounded-sm cursor-pointer hover:bg-primary hover:text-white select-none "
              onClick={DecrementNumberOfItems}
            >
              -
            </span>
            <span className="select-none text-[17px]">{numberOfItems}</span>

            <span
              className="border-1 border-gray-200 h-5 w-5 justify-center  flex flex-col items-center rounded-sm cursor-pointer hover:bg-primary hover:text-white select-none "
              onClick={incrementNumberOfItems}
            >
              +
            </span>
          </div>
          <button
            className="flex gap-1 items-center bg-primary  px-6 py-1 rounded-md cursor-pointer hover:bg-[#16a34a]  text-white "
            onClick={() => {
              addItem(numberOfItems);
            }}
          >
            <IoCartOutline />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
