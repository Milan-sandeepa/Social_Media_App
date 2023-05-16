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

export default class Header extends Component {
  render() {
    const active = "border-b-2 cursor-pointer";
    const normalLink = "cursor-ponter";

    return (
      <div className="bg-[#FFFFFF] drop-shadow h-16 w-full fixed top-0 ">
        <div className="flex flex-row justify-between">
          <div className="p-0 flex items-center">
            <img className="w-[200px]" src={logo} alt="logo" />
          </div>
          <div className="p-0 flex items-center gap-20">
            <HomeRoundedIcon />
            <ElectricBoltRoundedIcon />
            <VideoCameraBackRoundedIcon />
            <Diversity1RoundedIcon />
          </div>
          <div className="p-0 pe-5 flex items-center gap-10">
            <NotificationsRoundedIcon />
            <ChatBubbleRoundedIcon />
            <AccountCircleRoundedIcon />
            <img className="" src={profile} alt="pro" />
          </div>
        </div>
      </div>
    );
  }
}
