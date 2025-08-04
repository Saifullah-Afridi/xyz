import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productContextValue } from "../context/ProductContext";
import { IoCartOutline, IoStar } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [mainImagePath, setMainImagePath] = useState("");

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const { category, name } = useParams();
  const { addToCart, cartItems } = useCart();

  const currency = import.meta.env.VITE_PRICE;

  const { getSingleProduct } = productContextValue();

  const handleImagePath = (image) => {
    setMainImagePath(image);
  };
  useEffect(() => {
    const singleProduct = getSingleProduct(name);
    setMainImagePath(singleProduct.image[0]);
    setProduct(singleProduct);
  }, []);

  const incrementNumberOfItems = () => {
    setNumberOfItems((prev) => prev + 1);
  };

  const DecrementNumberOfItems = () => {
    if (numberOfItems === 1) {
      return;
    }
    setNumberOfItems((prev) => prev - 1);
  };

  const addItem = (numberOfItems) => {
    const updatedItem = { ...product, quantity: numberOfItems };
    addToCart(updatedItem);
    setNumberOfItems(1);
  };

  return (
    <div>
      {/* desktop view */}
      <div className="mt-10 custom-container  sm:flex gap-5 min-h-[75vh] ">
        {product && (
          <div className="sm:flex hidden flex-col gap-4 h-full ">
            {product?.image?.map((image, index) => (
              <img
                onClick={() => handleImagePath(image)}
                key={index}
                src={image}
                alt={image}
                className="w-[190px] border-1 border-gray-300 cursor-pointer"
              />
            ))}
          </div>
        )}

        {product && (
          <img
            src={mainImagePath}
            alt="main image"
            className="w-full  border-1 border-gray-300 sm:w-[600px] sm:flex-1  "
          />
        )}
        {product && (
          <div className="flex flex-col gap-4   flex-1 p-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-primary text-4xl font-semibold">
                {product.name}
              </h1>
              <div className="flex items-center gap-1">
                <div className="flex gap-[1px] text-yellow-400">
                  <IoStar size={20} />
                  <IoStar size={20} />
                  <IoStar size={20} />
                  <IoStar size={20} />
                </div>
                <span className="text-body-text  text-[16px]">
                  {product?.numberOfReivews}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="line-through text-body-text text-[20px] ">
                {product?.price} {currency}
              </span>
              <span className="text-[22px] text-body-text">
                {product?.offerPrice}
                {currency}
              </span>
              <span className="text-body-text text-[16px]">
                inclusive of all taxes
              </span>
            </div>
            <div>
              <span className="text-primary text-[20px] font-semibold">
                About product
              </span>
              <ul className="flex flex-col mt-1 ml-7">
                {product?.description?.map((desc, index) => (
                  <li key={index} className="text-body-text list-disc">
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between  gap-3 mt-4">
                <div className="flex items-center justify-between gap-1 flex-1">
                  <span
                    className="border-2 border-gray-300 w-[100px] py-4  justify-center  flex flex-col items-center rounded-sm cursor-pointer hover:bg-primary hover:text-white select-none "
                    onClick={DecrementNumberOfItems}
                  >
                    -
                  </span>
                  <span className="select-none text-[17px]">
                    {numberOfItems}
                  </span>

                  <span
                    className="border-2 border-gray-300 w-[100px] py-4 justify-center  flex flex-col items-center rounded-sm cursor-pointer hover:bg-primary hover:text-white select-none "
                    onClick={incrementNumberOfItems}
                  >
                    +
                  </span>
                </div>
                <button
                  className=" flex-1 flex gap-4 items-center justify-center bg-primary  px-6 py-3 rounded-md cursor-pointer hover:bg-[#16a34a] text-[18px]  text-white "
                  onClick={() => {
                    addItem(numberOfItems);
                    toast.success("item added successfully");
                  }}
                >
                  <IoCartOutline />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* related section  */}
      <div>
        <h2 className="text-2xl text-center underline underline-offset-8 font-semibold mt-10 text-primary">
          Related Products{" "}
        </h2>
      </div>
    </div>
  );
};

export default ProductDetail;
