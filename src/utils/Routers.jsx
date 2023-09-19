import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DesktopLayout from "../layouts/DesktopLayout";
import Home from "../pages/Home";
import ProductOverview from "../pages/Products/ProductOverview";
import ShoppingCart from "../pages/Products/Cart";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <DesktopLayout>
          <Home />
        </DesktopLayout>
      ),
    },
    {
      path: "/product",
      element: (
        <DesktopLayout>
          <ProductOverview />
        </DesktopLayout>
      ),
    },
    {
      path: "/cart",
      element: (
        <DesktopLayout>
          <ShoppingCart />
        </DesktopLayout>
      ),
    },
    // {
    //   path: "/user",
    //   children: [
    //     {
    //       path: "login",
    //       element: !isAuthenticated ? (
    //         <UserAuthentication />
    //       ) : (
    //         <Navigate to="/" replace />
    //       ),
    //     },
    //     {
    //       path: "register",
    //       element: !isAuthenticated ? (
    //         <UserRegistration />
    //       ) : (
    //         <Navigate to="/" replace />
    //       ),
    //     },
    //     {
    //       path: "recovery",
    //       element: !isAuthenticated ? (
    //         <UserAccountRecovery />
    //       ) : (
    //         <Navigate to="/" replace />
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/send-money",
    //   element: <SendMoney />,
    // },
    // {
    //   path: "/transaction-history",
    //   element: <TransactionHistory />,
    // },
    // {
    //   path: "/profile",
    //   element: <Profile />,
    // },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // }
  ]);

  return <RouterProvider router={router} />;
}
