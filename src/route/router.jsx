import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: '/allProducts',
          element: <AllProducts />
        }
      ]
    },
  ]);
  

export default router;