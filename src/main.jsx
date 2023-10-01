import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import Router from "./utils/Routers.jsx";
import ProductProvider from "./providers/ProductProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ProductProvider>
      <Router />
      </ProductProvider>
);
