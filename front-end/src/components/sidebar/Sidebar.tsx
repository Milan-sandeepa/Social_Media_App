import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/home.png";
import userIcon from "../../assets/user.png";
import photosIcon from "../../assets/picture.png";
import settingIcon from "../../assets/wrench.png";
import logoutIcon from "../../assets/logout.png";
import friendsIcon from "../../assets/smiley.png";

export default class Sidebar extends Component {
  render() {
    const active = "border-b-2 cursor-pointer";
    const normalLink = "cursor-ponter";
    return (
      <div className="drop-shadow left-0 fixed  ps-5 pe-2 w-[280px] h-full overflow-y-scroll  scrollbar-thumb-gray-200 scrollbar-track-gray-50 scrollbar-thin">
        <div className="bg-[#FFFFFF] block   h-[400px] mt-2 rounded-[15px]">
          <nav className="flex justify-start pl-7 pt-10 items-center">
            <ul>
              <li>
                <NavLink to={"/home"} className="flex items-center gap-3 mt-3">
                  <img src={homeIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px] ">
                    NewsFeed
                  </h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/profile"}
                  className="flex items-center gap-3 mt-3"
                >
                  <img src={userIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px]">
                    Your Profile
                  </h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/friends"}
                  className="flex items-center gap-3 mt-3"
                >
                  <img src={friendsIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px]">
                    Friends
                  </h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/requests"}
                  className="flex items-center gap-3 mt-3"
                >
                  <img src={logoutIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px]">
                    Requests
                  </h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/photos"}
                  className="flex items-center gap-3 mt-3"
                >
                  <img src={photosIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px]">
                    Photos
                  </h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/setting"}
                  className="flex items-center gap-3 mt-3"
                >
                  <img src={settingIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px]">
                    Setting
                  </h1>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-[#FFFFFF] drop-shadow block  mb-20  h-[250px] mt-2 rounded-[15px] ">
          <nav className="flex justify-start pl-7 pt-10 items-center">
            <ul>
              <li>
                <NavLink to={"/login"} className="flex items-center gap-3 mt-3">
                  <img src={logoutIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px]">
                    LogOut
                  </h1>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/login"} className="flex items-center gap-3 mt-3">
                  <img src={logoutIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px]">
                    LogOut
                  </h1>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/login"} className="flex items-center gap-3 mt-3">
                  <img src={logoutIcon} alt="home" className="w-10 h-10" />
                  <h1 className="font-semibold opacity-80 text-[18px]">
                    LogOut
                  </h1>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
