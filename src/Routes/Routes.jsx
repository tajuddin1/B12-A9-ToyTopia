import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
const porductJSON = fetch("/toys.json");
export const router = new createBrowserRouter([
  {
    path: "/", Component: Root,
    children: [
      {
        index: true,
        loader: () => porductJSON,
        Component: Home
      }
    ]
   }
]);