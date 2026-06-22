import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Products/ProductDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Shop from "../pages/Shop/SHop";
import Profile from "../pages/Profile/Profile";
import Error404 from "../pages/Error/Error404";
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
        path: "/shop",
        loader: () => fetch(url),
        Component: Shop,
      },
      {
        path: "/shop/:productId",
        loader: () => fetch(url),
        element: <PrivateRoute><ProductDetails/></PrivateRoute>
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: '*',
        Component: Error404,
      }
    ]
  }
]);