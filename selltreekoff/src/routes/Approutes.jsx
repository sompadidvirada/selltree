import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SellTreekoff from "../sell_treekoff/SellTreekoff";
import Customer from "../sell_treekoff/component/menu-compo/Customer"
import ProductDetail from "../sell_treekoff/component/menu-compo/ProductDetail"
import CheckBill from "../sell_treekoff/component/menu-compo/CheckBill"
import Test from "../sell_treekoff/component/test";
import ComponentToPrint from "../sell_treekoff/component/inside-component/ComponentToPrint";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SellTreekoff />,
    children: [
      { index: true, element: <Customer /> },
      { path: "productdetail", element: <ProductDetail /> },
      { path: "checkbill", element: <CheckBill /> },
      { path: "test", element: <Test /> },
    ],
  },
  {
    path:"/customerbill",
    element: <ComponentToPrint/>  }
]);

const Approutes = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    />
  );
};

export default Approutes;
