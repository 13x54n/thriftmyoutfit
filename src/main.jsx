import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import Router from "./utils/Routers.jsx";
import ProductProvider from "./providers/ProductProvider";
import { registerSW } from 'virtual:pwa-register';

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("ServiceWorker registration successful:", registration);
      },
      (error) => {
        console.log("ServiceWorker registration failed:", error);
      }
    );
  });
}

const updateSW = registerSW({
  onNeedRefresh() {
    // show a prompt to user
    console.log('New content available. Please refresh.');
  },
  onOfflineReady() {
    // show a ready to work offline to user
    console.log('Ready for offline use.');
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <Router />
  </ProductProvider>
);
