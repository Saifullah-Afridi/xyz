// import React, { useState } from "react";
// import { FiUploadCloud } from "react-icons/fi";

// const AddProduct = () => {
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
import React from "react";

const AddProduct = () => {
  return <div>AddProduct</div>;
};

export default AddProduct;
