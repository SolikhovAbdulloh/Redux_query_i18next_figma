import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Products from "../components/Products";
import Liked from "../pages/Liked";
import Shop from "../pages/Shop";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "Like_page",
        element: <Liked />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
    ],
  },
]);
