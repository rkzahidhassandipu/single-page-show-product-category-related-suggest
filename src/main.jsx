import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Products from "./components/Products";
import App from "./App";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { items } from "./components/Data";
import SearchItems from "./components/SearchItems"
items

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <SingleProduct />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/search/:term',
        element: <SearchItems />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);