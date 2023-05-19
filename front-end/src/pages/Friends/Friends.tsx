import React, { Component } from "react";
import profile from "../../assets/pro.png";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default class Friends extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex flex-row justify-end items-start mt-16 h-screen ">
          <Sidebar />
          <div className="flex justify-center w-[80%] h-full me-2 mt-5 rounded-md]">
            <div className="pt-4 w-[70%] h-[50%]">
              <div className=" bg-[#FFFFFF]  rounded-[10px] h-full w-full">
                <div className="flex flex-row  justify-center">
                  <img src={profile} alt="" className="mt-4" />
                </div>
                <div className="flex flex-row justify-center font-Montserrat font-semibold text-[38px]">
                  <h1>Milan Sandeepa</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
