import React from "react";
import logo from "../../assets/logo-GdqARQRt.png";
import { Link, NavLink } from "react-router-dom";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
  bg-[#0a0a0a]/95 backdrop-blur-xl ${
    scrolled ? "border-b border-[#262626]" : "border-b border-transparent"
  }`}
      >
        <div className="w-[95%] mx-auto ">
          <div className="flex justify-between items-center h-20">
            <div className="flex justify-center items-center gap-3">
              <div className="w-12 h-12">
                <img src={logo} className="w-full" alt="Adasa logo" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  عدسة
                </span>
                <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <ul className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                <li>
                  <NavLink
                    to="/"
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                  >
                    الرئيسية
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/blog"
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                  >
                    المدونة
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
                  >
                    من نحن
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="hidden md:flex items-center gap-3">
                <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <Link
                  className="btn-primary text-sm"
                  to="/blog"
                  data-discover="true"
                >
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
