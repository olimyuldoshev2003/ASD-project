import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

//For Images and Videos

import logoHeader from "../assets/ASD logo.jpg";
import Switcher from "../components/Switch UI/Switcher";
import { Box, Modal } from "@mui/material";
function Layout() {
  const location = useLocation();

  const [modal, setModal] = useState<boolean>(false);

  function openModal() {
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }

  return (
    <div className="p-[30px_100px] sm:p-[30px_10px] bg-[#fff] dark:bg-[#333333]">
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
        <ul className="block_2 flex items-center gap-5 ">
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? " dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                  : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline hover:underline"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/volunteers"
              className={
                location.pathname === "/volunteers"
                  ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                  : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
              }
            >
              Volunteers
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              className={
                location.pathname === "/location"
                  ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                  : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
              }
            >
              Our Location
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "dark:text-[#b6b6b6] text-[16px] font-[700] underline"
                  : "text-[16px] font-[700] text-[#000] dark:text-[#fff] dark:hover:text-[#b6b6b6] hover:underline"
              }
            >
              About Us
            </Link>
          </li>
        </ul>
        <div className="block_3 flex items-center gap-3">
          <Switcher />
          <select
            name=""
            id=""
            className="outline-none bg-transparent text-[#333] dark:text-[#fff]"
          >
            <option value="" className="dark:bg-[#000]">
              Lang
            </option>
            <option value="" className="dark:bg-[#000]">
              En
            </option>
            <option value="" className="dark:bg-[#000]">
              Ru
            </option>
            <option value="" className="dark:bg-[#000]">
              Tj
            </option>
          </select>
          <div className="for_btn_login">
            <button
              className="p-[5px_40px] bg-[green] shadow-2xl text-[white] rounded-[20px] outline-none"
              onClick={() => openModal()}
            >
              Login
            </button>
          </div>
        </div>
        <div className="menu_for_mobile_size sm:block md:hidden"></div>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="bg-[#fff]  rounded-[20px] flex justify-center items-center p-[20px_30px] outline-none">
            <form action="" className="flex flex-col items-center gap-[20px]">
              <h2 className="text-[25px] text-[red]">Login</h2>
              <div className="for_inputs flex flex-col gap-5 mt-3">
                <div className="email_input flex flex-col gap-2">
                  <label htmlFor="email" className="text-[18px]">
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id="email"
                    className="outline-none border-[1px] border-[solid] border-[#000] p-[5px_20px] rounded-[20px] placeholder:text-[#000] shadow-2xl"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="password_input flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name=""
                    id="password"
                    className="outline-none border-[1px] border-[solid] border-[#000] p-[5px_20px] rounded-[20px] placeholder:text-[#000]"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <button className="p-[5px_40px] bg-[blue] text-[#fff] rounded-[50px]">
                Submit
              </button>
            </form>
          </Box>
        </Modal>
      </header>
      <Outlet />
      <footer className="footer"></footer>
    </div>
  );
}

export default Layout;
