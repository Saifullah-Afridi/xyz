import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "/home",
          Component: Home,
        },
        {
          path: "/about",
          Component: About,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
