import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

//For Images and Videos

import logoHeader from "../assets/ASD logo.jpg";
function Layout() {
  return (
    <div className="p-[30px_100px]">
      <header className="header flex justify-between items-center">
        <div className="block_1">
          <Link to="/">

          <img
            src={logoHeader}
            alt=""
            className="w-[80px] h-[80px] rounded-full"
            />
            </Link>
        </div>
        <ul className="block_2 flex items-center gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/volunteers">Volunteers</Link>
          </li>
          <li>
            <Link to="/location">Our Location</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <div className="block_3">
          <select name="" id="">
            <option value="">Lang</option>
            <option value="">En</option>
            <option value="">Ru</option>
            <option value="">Tj</option>
          </select>
        </div>
      </header>
      <Outlet />
      <footer className="footer"></footer>
    </div>
  );
}

export default Layout;
