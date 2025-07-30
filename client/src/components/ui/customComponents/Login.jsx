// import { useState } from "react";
// import { appContextValue } from "../../../context/AppContext";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [loginModal, setLoginModal] = useState(false);
//   const [registerModal, setRegisterModal] = useState(false);

//   const { setIsLogin, setUser } = appContextValue();

//   const handleLogin = () => {
//     setLoginModal(true);
//   };

//   const handleRegisterModal = () => {
//     setRegisterModal(true);
//   };

//   const handleClickOnOverlay = () => {
//     setLoginModal(false);
//     setRegisterModal(false);
//   };

//   return (
//     <div>
//       <button
//         className="bg-green-500 cursor-pointer px-6 py-2 text-white rounded-md hover:bg-green-600 transition-all duration-200 ease-in-out"
//         onClick={handleLogin}
//       >
//         Login
//       </button>
//       {loginModal && (
//         <div
//           className="fixed inset-0  bg-black/70 flex  justify-center items-center"
//           onClick={handleClickOnOverlay}
//         >
//           <div
//             className="bg-white z-[999] w-[40%] flex justify-center flex-col py-10 rounded-md shadow-md "
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h1 className="text-primary text-3xl tracking-wider text-center font-bold mb-10">
//               Login
//             </h1>
//             <form className="flex flex-col gap-4  w-[75%] mx-auto">
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="email" className="text-body-text">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   id="email"
//                   placeholder="Enter Your email"
//                   className="focus:outline-primary border-1 border-primary px-2 h-10 rounded-sm text-body-text"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="email" className="text-body-text">
//                   Password
//                 </label>
//                 <input
//                   type="text"
//                   id="password"
//                   placeholder="Enter Your Password"
//                   className="focus:outline-primary border-1 border-primary px-2 h-10 rounded-sm text-body-text"
//                 />
//               </div>
//             </form>
//             <div className="w-[75%] mx-auto mt-4 flex gap-1 ">
//               <span className="text-body-text">Create an account?</span>
//               <span onClick={handleRegisterModal} className="text-primary">
//                 Click here
//               </span>
//             </div>
//             <button className="bg-primary hover:bg-green-700 w-[75%] mx-auto py-2 mt-4 rounded-md mb-10">
//               Login
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { appContextValue } from "../../../context/AppContext";

const Login = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const { setIsLogin, setUser } = appContextValue();

  const handleLoginOpen = () => {
    setLoginModal(true);
    setRegisterModal(false);
  };

  const handleRegisterOpen = () => {
    setRegisterModal(true);
    setLoginModal(false);
  };

  const handleCloseModals = () => {
    setLoginModal(false);
    setRegisterModal(false);
  };

  return (
    <div>
      <button
        className="bg-green-500 cursor-pointer px-6 py-2 text-white rounded-md hover:bg-green-600 transition-all duration-200 ease-in-out"
        onClick={handleLoginOpen}
      >
        Login
      </button>

      {/* Login Modal */}
      {loginModal && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={handleCloseModals}
        >
          <div
            className="bg-white z-[999] w-[40%] flex justify-center flex-col py-10 rounded-md shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-primary text-3xl tracking-wider text-center font-bold mb-10">
              Login
            </h1>
            <form className="flex flex-col gap-4 w-[75%] mx-auto">
              <div className="flex flex-col gap-1">
                <label htmlFor="login-email" className="text-body-text">
                  Email
                </label>
                <input
                  type="email"
                  id="login-email"
                  placeholder="Enter your email"
                  className="focus:outline-primary border border-primary px-2 h-10 rounded-sm text-body-text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="login-password" className="text-body-text">
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  placeholder="Enter your password"
                  className="focus:outline-primary border border-primary px-2 h-10 rounded-sm text-body-text"
                />
              </div>
            </form>
            <div className="w-[75%] mx-auto mt-4 flex gap-1">
              <span className="text-body-text">Create an account?</span>
              <span
                onClick={handleRegisterOpen}
                className="text-primary cursor-pointer"
              >
                Click here
              </span>
            </div>
            <button className="bg-primary hover:bg-green-700 w-[75%] mx-auto py-2 mt-4 rounded-md mb-10 text-white">
              Login
            </button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {registerModal && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={handleCloseModals}
        >
          <div
            className="bg-white z-[999] w-[40%] flex justify-center flex-col py-10 rounded-md shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-primary text-3xl tracking-wider text-center font-bold mb-10">
              Register
            </h1>
            <form className="flex flex-col gap-4 w-[75%] mx-auto">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-body-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="focus:outline-primary border border-primary px-2 h-10 rounded-sm text-body-text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="register-email" className="text-body-text">
                  Email
                </label>
                <input
                  type="email"
                  id="register-email"
                  placeholder="Enter your email"
                  className="focus:outline-primary border border-primary px-2 h-10 rounded-sm text-body-text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="register-password" className="text-body-text">
                  Password
                </label>
                <input
                  type="password"
                  id="register-password"
                  placeholder="Enter your password"
                  className="focus:outline-primary border border-primary px-2 h-10 rounded-sm text-body-text"
                />
              </div>
            </form>
            <div className="w-[75%] mx-auto mt-4 flex gap-1">
              <span className="text-body-text">Already have an account?</span>
              <span
                onClick={handleLoginOpen}
                className="text-primary cursor-pointer"
              >
                Click here
              </span>
            </div>
            <button className="bg-primary hover:bg-green-700 w-[75%] mx-auto py-2 mt-4 rounded-md mb-10 text-white">
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
