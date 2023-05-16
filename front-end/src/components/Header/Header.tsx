import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/logo.png";
import profile from "../../assets/man.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import VideoCameraBackRoundedIcon from "@mui/icons-material/VideoCameraBackRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default class Header extends Component {
  render() {
    const active = "border-b-2 pb-[23px] border-blue-navy-200 cursor-pointer";
    const normalLink = "cursor-ponter";

    return (
      <div className="bg-[#FFFFFF] drop-shadow h-16 w-full fixed top-0 z-10">
        <div className="flex flex-row justify-between ">
          <div className="p-0 flex items-center">
            <NavLink to={"/home"}>
              <img className="w-[200px]" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="w-1/3 mt-[14px]">
            <nav className="flex justify-evenly md:gap-10 ">
              {/* <form action="">
                <TextField
                  id="search-bar"
                  className="text"
                  // onInput={(e) => {
                  //   );
                  // }}
                  label="Start typing to search"
                  variant="outlined"
                  placeholder="Search..."
                  size="small"
                />
                <IconButton type="submit" aria-label="search">
                  <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
              </form> */}
              <NavLink
                to={"/home"}
                className={({ isActive }) => (isActive ? active : normalLink)}
              >
                <HomeRoundedIcon />
              </NavLink>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? active : normalLink)}
              >
                <ElectricBoltRoundedIcon />
              </NavLink>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? active : normalLink)}
              >
                <VideoCameraBackRoundedIcon />
              </NavLink>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? active : normalLink)}
              >
                <Diversity1RoundedIcon />
              </NavLink>
            </nav>
          </div>
          <div className="p-0 pe-5 w-1/3 mt-[14px]">
            <nav className="flex  justify-end gap-10 ">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? active : normalLink)}
              >
                <NotificationsRoundedIcon />
              </NavLink>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? active : normalLink)}
              >
                <ChatBubbleRoundedIcon />
              </NavLink>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? active : normalLink)}
              >
                <AccountCircleRoundedIcon />
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
