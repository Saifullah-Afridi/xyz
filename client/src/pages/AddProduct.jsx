// import React, { useState } from "react";
// import { FiUploadCloud } from "react-icons/fi";

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     "product-name": "",
//     description: "",
//     category: "",
//     "product-price": 0,
//     "offer-price": 0,
//   });

//   const [images, setImages] = useState({
//     picture1: null,
//     picture2: null,
//     picture3: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const id = e.target.id;
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImages({ ...images, [id]: { file: file, preview: reader.result } });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   function removeImage(id) {
//     if (images[id]) {
//       URL.revokeObjectURL(images[id].preview);
//     }

//     setImages({
//       ...images,
//       [id]: null,
//     });
//   }
//   return (
//     <div className=" px-10 w-[50%]">
//       <h1 className=" text-3xl underline underline-offset-8 text-primary font-semibold">
//         Add Product
//       </h1>
//       <form className="mt-5 flex flex-col gap-4">
//         <div className="flex gap-3">
//           <div className="border-2 border-gray-300 relative w-[150px] h-[90px] flex items-center justify-center cursor-pointer rounded-md">
//             <label
//               htmlFor="picture1"
//               className="flex justify-center items-center flex-col w-full h-full cursor-pointer text-body-text  "
//             >
//               <span>
//                 <FiUploadCloud />
//               </span>
//               <span>Upload</span>
//             </label>
//             <input type="file" id="picture1" className="hidden" />
//           </div>
//           <div className="border-2 border-gray-300 relative w-[150px] h-[90px] flex items-center justify-center cursor-pointer rounded-md">
//             <label
//               htmlFor="picture2"
//               className="flex justify-center items-center flex-col w-full h-full cursor-pointer text-body-text  "
//             >
//               <span>
//                 <FiUploadCloud />
//               </span>
//               <span>Upload</span>
//             </label>
//             <input type="file" id="picture2" className="hidden" />
//           </div>
//           <div className="border-2 border-gray-300 relative w-[150px] h-[90px] flex items-center justify-center cursor-pointer rounded-md">
//             <label
//               htmlFor="picture3"
//               className="flex justify-center items-center flex-col w-full h-full cursor-pointer text-body-text  "
//             >
//               <span>
//                 <FiUploadCloud />
//               </span>
//               <span>Upload</span>
//             </label>
//             <input type="file" id="picture3" className="hidden" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-1">
//           <label
//             htmlFor="product-name"
//             className="text-body-text font-semibold"
//           >
//             Product Name
//           </label>
//           <input
//             type="text"
//             onChange={handleInputChange}
//             value={formData["product-name"]}
//             name=""
//             id="product-name"
//             placeholder="Product Name"
//             className="border-2 border-gray-300 h-10 p-1"
//           />
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="description" className="text-body-text font-semibold">
//             Description
//           </label>
//           <textarea
//             type="text"
//             onChange={handleInputChange}
//             value={formData["description"]}
//             name=""
//             id="description"
//             placeholder="Description"
//             className="border-2 border-gray-300 h-22 p-1"
//           ></textarea>
//         </div>
//         <div className="flex flex-col gap-1">
//           <label htmlFor="category" className="text-body-text font-semibold">
//             Select Category
//           </label>
//           <select
//             id="category"
//             onChange={handleInputChange}
//             value={formData["category"]}
//             className="border-2 border-gray-300 h-10 p-1 text-body-text"
//           >
//             <option value="FRUIT">Fruit</option>
//             <option value="FRUIT">Fruit</option>
//             <option value="FRUIT">Fruit</option>
//           </select>
//         </div>
//         <div className="flex gap-2">
//           <div className="flex flex-col gap-1 flex-1">
//             <label
//               htmlFor="product-price"
//               className="text-body-text font-semibold"
//             >
//               ProductPrice
//             </label>
//             <input
//               onChange={handleInputChange}
//               value={formData["product-price"]}
//               type="text"
//               name=""
//               id="product-price"
//               placeholder="0"
//               className="border-2 border-gray-300 h-10 p-1"
//             />
//           </div>
//           <div className="flex flex-col gap-1 flex-1">
//             <label
//               htmlFor="offer-price"
//               className="text-body-text font-semibold"
//             >
//               Offer price
//             </label>
//             <input
//               type="text"
//               onChange={handleInputChange}
//               value={formData["offer-price"]}
//               name=""
//               id="offer-price"
//               placeholder="0"
//               className="border-2 border-gray-300 h-10 p-1"
//             />
//           </div>
//         </div>
//         <button
//           type="select"
//           className="bg-primary hover:bg-green-700 hover:shadow-md px-10 py-3 self-start text-white cursor-pointer shadow-sm rounded-sm"
//         >
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    "product-name": "",
    description: "",
    category: "",
    "product-price": "",
    "offer-price": "",
  });

  const [images, setImages] = useState({
    picture1: null,
    picture2: null,
    picture3: null,
  });

  // Handle text input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle image upload with FileReader for preview
  const handleImageUpload = (e) => {
    const id = e.target.id;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => ({
          ...prev,
          [id]: { file, preview: reader.result },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (id) => {
    setImages((prev) => ({ ...prev, [id]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const uploadedFiles = Object.values(images)
      .filter(Boolean)
      .map((img) => img.file);
    console.log("Uploaded Images:", uploadedFiles);
  };

  return (
    <div className="px-10 w-[50%] ">
      <h1 className="text-3xl underline underline-offset-8 text-primary font-semibold">
        Add Product
      </h1>
      <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          {["picture1", "picture2", "picture3"].map((id) => (
            <div
              key={id}
              className="border-2 border-gray-300 relative w-[150px] h-[90px] flex items-center justify-center cursor-pointer rounded-md overflow-hidden"
            >
              {images[id] ? (
                <>
                  <img
                    src={images[id].preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(id)}
                    className="absolute top-1 right-1 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white"
                  >
                    &times;
                  </button>
                </>
              ) : (
                <label
                  htmlFor={id}
                  className="flex flex-col justify-center items-center w-full h-full text-body-text cursor-pointer"
                >
                  <FiUploadCloud size={24} />
                  <span>Upload</span>
                </label>
              )}
              <input
                type="file"
                id={id}
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="product-name"
            className="text-body-text font-semibold"
          >
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            placeholder="Product Name"
            value={formData["product-name"]}
            onChange={handleInputChange}
            className="border-2 border-gray-300 h-10 p-1"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-body-text font-semibold">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="border-2 border-gray-300 h-22 p-1"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="text-body-text font-semibold">
            Select Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={handleInputChange}
            className="border-2 border-gray-300 h-10 p-1 text-body-text"
          >
            <option value="">Select</option>
            <option value="FRUIT">Fruit</option>
            <option value="VEGETABLE">Vegetable</option>
            <option value="DAIRY">Dairy</option>
          </select>
        </div>

        {/* Prices */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 flex-1">
            <label
              htmlFor="product-price"
              className="text-body-text font-semibold"
            >
              Product Price
            </label>
            <input
              type="number"
              id="product-price"
              placeholder="0"
              value={formData["product-price"]}
              onChange={handleInputChange}
              className="border-2 border-gray-300 h-10 p-1"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label
              htmlFor="offer-price"
              className="text-body-text font-semibold"
            >
              Offer Price
            </label>
            <input
              type="number"
              id="offer-price"
              placeholder="0"
              value={formData["offer-price"]}
              onChange={handleInputChange}
              className="border-2 border-gray-300 h-10 p-1"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-green-700 hover:shadow-md px-10 py-3 self-start text-white cursor-pointer shadow-sm rounded-sm"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
