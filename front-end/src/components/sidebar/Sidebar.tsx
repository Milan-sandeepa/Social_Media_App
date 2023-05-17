import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="drop-shadow left-0 fixed  ps-5 pe-2 w-[320px] h-full overflow-y-scroll  scrollbar-thumb-gray-200 scrollbar-track-gray-50 scrollbar-thin">
        <div className="bg-[#FFFFFF] drop-shadow  block   h-[600px] mt-2 rounded-[15px]">
          <nav className="flex justify-center items-center"></nav>
        </div>
        <div className="bg-[#FFFFFF] drop-shadow block  mb-20  h-[400px] mt-2 rounded-[15px] "></div>
      </div>
    );
  }
}
