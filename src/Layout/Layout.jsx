import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/Scrolltotop/Scrolltotop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-grow pt-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}