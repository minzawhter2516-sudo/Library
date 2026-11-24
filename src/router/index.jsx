import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layouts/Layout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Create from "../pages/Create";
import BookDetail from "../pages/BookDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <Search />,
      },
      {
        path: "Create",
        element: <Create />,
      },
      ,
      {
        path: "/books/:id",
        element: <BookDetail />,
      },
    ],
  },
]);

export default router;
