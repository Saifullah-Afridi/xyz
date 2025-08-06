import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { Toaster } from "sonner";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import { OrderContextProvider } from "./context/OrderContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <ProductContextProvider>
        <OrderContextProvider>
          <App />
        </OrderContextProvider>
      </ProductContextProvider>
      <Toaster richColors dir="ltr" position="top-center" closeButton />
    </CartContextProvider>
  </StrictMode>
);
