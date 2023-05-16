import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    const active = "border-b-2 cursor-pointer";
    const normalLink = "cursor-ponter";

    return (
      <div className="bg-[#FFFFFF] drop-shadow h-16 w-full fixed top-0 ">
        <div className="flex flex-row justify-between">
          <div className="p-5 flex items-center">
            <img src="" alt="logo" />
          </div>
          <div>
            <nav className="flex justify-center cursor-pointer h-full"></nav>
          </div>
        </div>
      </div>
    );
  }
}
