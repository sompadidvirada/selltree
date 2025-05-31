import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SellTreekoff from "../sell_treekoff/SellTreekoff";
import Customer from "../sell_treekoff/component/menu-compo/Customer"
import ProductDetail from "../sell_treekoff/component/menu-compo/ProductDetail"
import CheckBill from "../sell_treekoff/component/menu-compo/CheckBill"
import Test from "../sell_treekoff/component/test";
import ComponentToPrint from "../sell_treekoff/component/print-component/ComponentToPrint";
import BarestarBill from "../sell_treekoff/component/print-component/BarestarBill";
import CustomerBill from "../sell_treekoff/component/print-component/CustomerBill";
import CustomerDisplay from "../sell_treekoff/component/menu-compo/CustomerDisplay";
import TestQR from "../testqrcode/TestQR";
import Success from "../testqrcode/Success";

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
    path: "/customerbill",
    element: <ComponentToPrint />
  },
  {
    path: "/customerbill",
    element: <CustomerBill />
  },
  {
    path: "/baristabill",
    element: <BarestarBill />
  },
  {
    path: "/screencustomer",
    element: <CustomerDisplay />
  },
  {
    path: "/testqr",
    element: <TestQR />
  },
  {
    path: "/success",
    element: <Success />
  },
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
