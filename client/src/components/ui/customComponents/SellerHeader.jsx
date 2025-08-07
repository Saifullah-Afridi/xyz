import { assets } from "../../../assets/assets";

const SellerHeader = () => {
  return (
    <div className="px-10 py-5 shadow-md flex justify-between">
      <img src={assets.logo} alt="" />
      <div className="flex items-center gap-4">
        <span>Hello Admin!</span>
        <button className="px-6 py-2 bg-amber-600 hover:bg-white hover:text-body-text hover:outline-2 hover:outline-amber-600 cursor-pointer translate-0 duration-200 ease-in-out rounded-md text-white ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SellerHeader;
