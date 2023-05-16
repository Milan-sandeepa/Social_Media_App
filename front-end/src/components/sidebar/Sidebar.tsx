import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="drop-shadow left-0 fixed  ps-5 pe-2 w-[320px] h-full overflow-y-scroll  scrollbar-thumb-gray-200 scrollbar-track-gray-50 scrollbar-thin">
        <div className="bg-[#FFFFFF] block opacity-90  h-[400px] mt-2 rounded-md "></div>
        <div className="bg-[#FFFFFF] block opacity-90  h-[400px] mt-2 rounded-md "></div>
      </div>
    );
  }
}
