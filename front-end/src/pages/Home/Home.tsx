import React, { Component } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex flex-row justify-evenly items-start mt-16 h-screen ">
          <Sidebar />
          <div className="bg-[#FFFFFF] w-96 h-96 mt-2 rounded-md ml-96">
            <h1>div-1</h1>
          </div>
          <div>
            <h1>div-2</h1>
          </div>
        </div>
      </>
    );
  }
}
