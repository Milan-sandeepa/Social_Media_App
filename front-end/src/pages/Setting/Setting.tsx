import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import profile from "../../assets/pro.png";
import { Button, TextField } from "@mui/material";

export default class Setting extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex flex-row justify-end items-start mt-16 h-screen ">
          <Sidebar />
          <div className="flex justify-center w-[80%] h-full me-2 mt-5 rounded-md]">
            <div className="pt-4 w-[70%] h-[80%]">
              <div className=" bg-[#FFFFFF]  rounded-[10px] h-full w-full">
                <div className="flex flex-row  justify-center">
                  <img src={profile} alt="" className="mt-4" />
                </div>
                <div className="flex flex-row justify-center font-Montserrat font-semibold text-[38px]">
                  <h1>Milan Sandeepa</h1>
                </div>
                <div className="flex flex-row justify-around font-Montserrat font-semibold text-[38px]">
                  <div className="flex flex-col justify-start items-center">
                    <TextField
                      id="standard-basic"
                      label="Your Name"
                      variant="standard"
                    />
                    <TextField
                      id="standard-basic"
                      label="Your Email Address"
                      variant="standard"
                    />
                    <TextField
                      id="standard-basic"
                      label="Your Email Address"
                      variant="standard"
                    />
                    <TextField
                      id="standard-basic"
                      label="Your Email Address"
                      variant="standard"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center">
                    <TextField
                      id="standard-basic"
                      label="Your Email Address"
                      variant="standard"
                    />
                    <TextField
                      id="standard-basic"
                      label="Your Email Address"
                      variant="standard"
                    />
                    <TextField
                      id="standard-basic"
                      label="Your Email Address"
                      variant="standard"
                    />
                    <TextField
                      id="standard-basic"
                      label="Your Email Address"
                      variant="standard"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center mt-9 font-Montserrat font-semibold text-[38px]">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
