import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import ProductByCategory from "./pages/ProductByCategory";

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
          path: "all-products/:category",
          Component: ProductByCategory,
        },
        {
          path: "cart",
          Component: Cart,
        },
        {
          path: "my-orders",
          Component: Cart,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
