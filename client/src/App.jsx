import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Regsiter from "./pages/Regsiter";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "home",
          Component: Home,
        },
        {
          path: "contact",
          Component: Contact,
        },
        {
          path: "all-products",
          Component: AllProducts,
        },
        {
          path: "cart",
          Component: Cart,
        },
        {
          path: "my-orders",
          Component: Cart,
        },
        {
          path: "login",
          Component: Login,
        },
        {
          path: "register",
          Component: Regsiter,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
