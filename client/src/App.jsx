import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import MyOders from "./pages/MyOders";
import SellerDashboard from "./pages/SellerDashboard";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import OrderList from "./pages/OrderList";

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
          path: "product-detail/:category/:name",
          Component: ProductDetail,
        },
        {
          path: "cart",
          Component: Cart,
        },
        {
          path: "my-orders",
          Component: MyOders,
        },
        {
          path: "/seller-dashboard",
          Component: SellerDashboard,
          children: [
            {
              index: true,
              Component: AddProduct,
            },
            {
              path: "add-product",
              Component: AddProduct,
            },
            {
              path: "product-list",
              Component: ProductList,
            },
            {
              path: "orders-list",
              Component: OrderList,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
