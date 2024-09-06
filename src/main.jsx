import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import App from "./App"
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Products />
      },
      {
        path:"/product/:id",
        element: <SingleProduct />
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"/cart",
        element: <Cart />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
