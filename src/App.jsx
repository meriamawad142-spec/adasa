import { useState } from "react";

import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Blogdetails from "./Pages/Blogdetails/Blogdetails";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Notfound from "./Pages/Notfound/Notfound";

import About from "./Pages/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <Blogdetails /> },
      { path: "about", element: <About /> },

      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
