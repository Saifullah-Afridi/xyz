import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productContextValue } from "../context/ProductContext";

const ProductDetail = () => {
  const [mainImagePath, setMainImagePath] = useState("");
  const [product, setProduct] = useState(null);
  const { category, name } = useParams();

  const { getSingleProduct } = productContextValue();

  const handleImagePath = (image) => {
    setMainImagePath(image);
  };
  useEffect(() => {
    const singleProduct = getSingleProduct(name);
    setMainImagePath(singleProduct.image[0]);
    setProduct(singleProduct);
  }, []);

  return (
    <div>
      {/* desktop view */}
      <div className="mt-10 custom-container hidden sm:flex gap-4 min-h-[75vh] ">
        {product && (
          <div className="flex flex-col gap-4 h-full ">
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
            className="border-1 border-gray-300 w-[600px] "
          />
        )}
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetail;
