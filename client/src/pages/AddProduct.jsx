import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    description: "",
    productPrice: 0,
    offerPrice: 0,
  });

  const [images, setImages] = useState({
    picture1: null,
    picture2: null,
    picture3: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const id = e.target.id;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => ({
          ...prev,
          [id]: { file: file, preview: reader.result },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (id) => {
    setImages((prev) => ({ ...prev, [id]: null }));
  };

  const validate = () => {
    const newError = {};
    if (!formData.productName.trim()) {
      newError.productName = "Product Name is required";
    }

    if (!formData.description.trim()) {
      newError.description = "Please provide product description";
    }
    if (!formData.category) {
      newError.category = "Product must have a category";
    }

    if (!formData.productPrice || formData.productPrice <= 0) {
      newError.productPrice = "Product Price must be greader then 0 ";
    }

    if (
      formData.offerPrice < 0 ||
      formData.offerPrice < formData.productPrice
    ) {
      newError.offerPrice =
        "Offer Price must be greader then 0 and lesser then product price ";
    }
    const hasAtLeastOneImage = Object.values(images).some((img) => img?.file);
    if (!hasAtLeastOneImage) {
      newError.images = "At least one image is required";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    Object.entries(images).forEach(([key, value]) => {
      if (value?.file) {
        data.append("images", value.file);
      }
    });
  };

  return (
    <div className=" px-10 w-[50%]">
      <h1 className=" text-3xl underline underline-offset-8 text-primary font-semibold">
        Add Product
      </h1>
      <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <div className="border-2 border-gray-300 relative w-[150px] h-[90px] flex items-center justify-center    rounded-md">
            {images.picture1 ? (
              <div className="relative h-full w-full">
                <img
                  src={images.picture1.preview}
                  alt="images  preivew"
                  className="h-full w-full"
                />
                <button
                  className="text-red-500  bg-gray-200 rounded-full w-6 h-6 absolute top-1 right-1 hover:bg-gray-100 hover:shadow-2xl cursor-pointer"
                  onClick={() => {
                    removeImage("picture1");
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <>
                <label
                  htmlFor="picture1"
                  className="flex justify-center items-center flex-col w-full h-full cursor-pointer text-body-text  "
                >
                  <span>
                    <FiUploadCloud />
                  </span>
                  <span>Upload</span>
                </label>
                <input
                  type="file"
                  id="picture1"
                  className="hidden"
                  onChange={handleImage}
                />
              </>
            )}
          </div>
          <div className="border-2 border-gray-300 relative w-[150px] h-[90px] flex items-center justify-center    rounded-md">
            {images.picture2 ? (
              <div className="relative h-full w-full">
                <img
                  src={images.picture2.preview}
                  alt="images  preivew"
                  className="h-full w-full"
                />
                <button
                  className="text-red-500  bg-gray-200 rounded-full w-6 h-6 absolute top-1 right-1 hover:bg-gray-100 hover:shadow-2xl cursor-pointer"
                  onClick={() => {
                    removeImage("picture2");
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <>
                <label
                  htmlFor="picture2"
                  className="flex justify-center items-center flex-col w-full h-full cursor-pointer text-body-text  "
                >
                  <span>
                    <FiUploadCloud />
                  </span>
                  <span>Upload</span>
                </label>
                <input
                  type="file"
                  id="picture2"
                  className="hidden"
                  onChange={handleImage}
                />
              </>
            )}
          </div>
          <div className="border-2 border-gray-300 relative w-[150px] h-[90px] flex items-center justify-center    rounded-md">
            {images.picture3 ? (
              <div className="relative h-full w-full">
                <img
                  src={images.picture3.preview}
                  alt="images  preivew"
                  className="h-full w-full"
                />
                <button
                  className="text-red-500  bg-gray-200 rounded-full w-6 h-6 absolute top-1 right-1 hover:bg-gray-100 hover:shadow-2xl cursor-pointer"
                  onClick={() => {
                    removeImage("picture3");
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <>
                <label
                  htmlFor="picture3"
                  className="flex justify-center items-center flex-col w-full h-full cursor-pointer text-body-text  "
                >
                  <span>
                    <FiUploadCloud />
                  </span>
                  <span>Upload</span>
                </label>
                <input
                  type="file"
                  id="picture3"
                  className="hidden"
                  onChange={handleImage}
                />
              </>
            )}
          </div>
        </div>
        {errors.images && (
          <div className="text-red-400 text-sm">{errors.images}</div>
        )}
        <div className="flex flex-col gap-1">
          <label htmlFor="productName" className="text-body-text font-semibold">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            id="productName"
            value={formData.productName}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="border-2 border-gray-300 h-10 p-1"
          />
          {errors.productName && (
            <div className="text-red-400 text-sm ">{errors.productName}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-body-text font-semibold">
            Description
          </label>
          <textarea
            type="text"
            value={formData.description}
            onChange={handleInputChange}
            name="description"
            id="description"
            placeholder="Description"
            className="border-2 border-gray-300 h-22 p-1"
          ></textarea>
          {errors.description && (
            <div className="text-red-400 text-sm">{errors.description}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-body-text font-semibold">
            Select Category
          </label>
          <select
            value={formData.category}
            onChange={handleInputChange}
            id="category"
            name="category"
            className="border-2 border-gray-300 h-10 p-1 text-body-text"
          >
            <option value="FRUIT">Fruit</option>
            <option value="FRUIT">Fruit</option>
            <option value="FRUIT">Fruit</option>
          </select>
          {errors.category && (
            <div className="text-red-400 text-sm">{errors.category}</div>
          )}
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 flex-1">
            <label
              htmlFor="productPrice"
              className="text-body-text font-semibold"
            >
              ProductPrice
            </label>
            <input
              type="number"
              value={formData.productPrice}
              onChange={handleInputChange}
              name="productPrice"
              id="productPrice"
              placeholder="0"
              className="border-2 border-gray-300 h-10 p-1"
            />
            {errors.productPrice && (
              <div className="text-red-400 text-sm">{errors.productPrice}</div>
            )}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label
              htmlFor="offer-price"
              className="text-body-text font-semibold"
            >
              Offer price
            </label>
            <input
              type="number"
              value={formData.offerPrice}
              onChange={handleInputChange}
              name=""
              id="offerPrice"
              placeholder="0"
              className="border-2 border-gray-300 h-10 p-1"
            />
            {errors.offerPrice && (
              <div className="text-red-400 text-sm">{errors.offerPrice}</div>
            )}
          </div>
        </div>
        <button
          type="select"
          className="bg-primary hover:bg-green-700 hover:shadow-md px-10 py-3 self-start text-white cursor-pointer shadow-sm rounded-sm"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
