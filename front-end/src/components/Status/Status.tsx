import React, { Component } from "react";
import profile from "../../assets/man.png";

export default class Status extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center overflow-auto scrollbar-thin">
        <div className="flex flex-row gap-3 h-[200px] mx-auto cursor-pointer">
          <div className="flex justify-center items-end h-[95%] w-[120px] bg-[#FFFFFF] rounded-[10px]">
            <div className="mb-4">
              <div className="flex justify-center items-center">
                <img src={profile} alt="profile" />
              </div>
              <h1 className="font-semibold">Jone</h1>
            </div>
          </div>
          <div className="flex justify-center items-end h-[95%] w-[120px] bg-[#FFFFFF] rounded-[10px]">
            <div className="mb-4">
              <div className="flex justify-center items-center">
                <img src={profile} alt="profile" />
              </div>
              <h1 className="font-semibold">Jone</h1>
            </div>
          </div>
          <div className="flex justify-center items-end h-[95%] w-[120px] bg-[#FFFFFF] rounded-[10px]">
            <div className="mb-4">
              <div className="flex justify-center items-center">
                <img src={profile} alt="profile" />
              </div>
              <h1 className="font-semibold">Jone</h1>
            </div>
          </div>
          <div className="flex justify-center items-end h-[95%] w-[120px] bg-[#FFFFFF] rounded-[10px]">
            <div className="mb-4">
              <div className="flex justify-center items-center">
                <img src={profile} alt="profile" />
              </div>
              <h1 className="font-semibold">Jone</h1>
            </div>
          </div>
          <div className="flex justify-center items-end h-[95%] w-[120px] bg-[#FFFFFF] rounded-[10px]">
            <div className="mb-4">
              <div className="flex justify-center items-center">
                <img src={profile} alt="profile" />
              </div>
              <h1 className="font-semibold">Jone</h1>
            </div>
          </div>
          <div className="flex justify-center items-end h-[95%] w-[120px] bg-[#FFFFFF] rounded-[10px]">
            <div className="mb-4">
              <div className="flex justify-center items-center">
                <img src={profile} alt="profile" />
              </div>
              <h1 className="font-semibold">Jone</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
