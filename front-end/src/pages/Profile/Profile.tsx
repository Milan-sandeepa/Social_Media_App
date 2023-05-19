import React, { Component } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import profile from "../../assets/pro.png";
import Post from "../../components/Post/Post";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";

export default class extends Component {
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
                <div className="flex flex-row justify-center font-Montserrat font-semibold items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800"
                  >
                    Add Friend
                  </button>
                </div>
              </div>

              <div className=" bg-[#FFFFFF]  rounded-[10px] h-[70%] w-full">
                <div className="h-60 mt-5  bg-[#FFFFFF] rounded-[10px]">
                  <div className="flex ml-7 pt-6">
                    <BorderColorRoundedIcon />
                    <h1 className="ml-2 font-medium text-slate-600">
                      Create Post
                    </h1>
                  </div>

                  <div className="w-full mt-3 h-full">
                    <div className="ml-5 w-[95%] h-full">
                      <form className="h-[45%]">
                        <div className="w-full h-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                          <div className="px-4 h-full py-2 bg-white rounded-b-lg ">
                            <label htmlFor="editor" className="sr-only">
                              Publish post
                            </label>
                            <textarea
                              id="editor"
                              className="block w-full h-full mt-2 px-0 text-sm text-black bg-white outline-none ps-2"
                              placeholder="Write an article..."
                              required
                            ></textarea>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800"
                        >
                          Publish post
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <Post />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
