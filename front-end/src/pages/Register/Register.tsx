import { Button, TextField } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div className="flex flex-row justify-center bg-white">
        <div className="h-screen md:w-1/2 ">
          <img
            src="/background.jpg"
            alt="logo"
            className="hidden md:block h-screen bg-cover bg-no-repeat"
          />
          <h1 className="hidden absolute top-10  font-Montserrat font-semibold md:block text-slate-50 text-[72px] left-5">
            waarfia
          </h1>
          <p className="hidden absolute top-[150px] font-Montserrat font-semibold md:text-[14px] lg:text-[20px] xl:text-[28px] md:block text-slate-50  left-5">
            waarfia helps you <br /> connect and share with the people in your
            life.
          </p>
        </div>
        <div className="h-screen flex justify-center items-center md:w-1/2 ">
          {/* <div className="hidden md:flex flex-row justify-end mt-5 me-5">
            <Button variant="contained">Register</Button>
          </div> */}
          <div className="flex flex-row items-center justify-center">
            <div className="md:w-[100%] ">
              <h1 className="font-Montserrat font-semibold mb-10 text-slate-950 md:hidden text-[72px] left-5">
                waarfia
              </h1>
              <h1 className="font-bold text-[30px] sm:text-[35px] md:text-[45px]">
                Create <br /> Your Account
              </h1>
              <div className="flex flex-col mt-2">
                <TextField
                  id="standard-basic"
                  label="Enter Your Name"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Email Address"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type="password"
                />
                <TextField
                  id="standard-basic"
                  label="Confirm Password"
                  variant="standard"
                  type="password"
                />
              </div>

              <div className="flex items-center mb-4 mt-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-Montserrat font-medium text-gray-900 dark:text-gray-300"
                >
                  Accept our agreement
                </label>
              </div>

              <div className="flex flex-col mt-5">
                <Button variant="contained" className="mt-5">
                  Create Account
                </Button>
                <div className="mt-5">
                  <p>
                    Already have account{" "}
                    <Link to={"/login"}>
                      <span className="text-blue-navy-200 cursor-pointer">
                        Login
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
