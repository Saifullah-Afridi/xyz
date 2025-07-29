const NewsLetter = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 my-10">
      <h2 className="text-[#6b7280]  text-2xl  sm:text-3xl font-bold text-center flex ">
        Never Miss a Deal!
      </h2>
      <p className="text-center text-body-text">
        Subscribe to get the latest offers,new arrivals,and exculsive discounts
      </p>
      <div className="self-center">
        <form className="flex items-center  border-1 border-gray-300">
          <input
            type="text"
            placeholder="Enter your email"
            className="focus:outline-none px-6 py-0 sm:w-[500px] text-body-text "
          />
          <button className="flex items-center bg-[#22c55e] hover:bg-[#16a34a]  text-white  px-6 py-3 cursor-pointer  ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
