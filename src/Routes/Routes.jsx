import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Products/ProductDetails";
import Login from "../pages/Auth/Login";
const url = "/toys.json";
export const router = createBrowserRouter([
  {
    path: "/", Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch(url),
        Component: Home
      },
      {
        path: "/product/:productId",
        loader: () => fetch(url),
        Component: ProductDetails
      },
      {
        path: "/login",
        Component: Login
      }
    ]
  }
]);