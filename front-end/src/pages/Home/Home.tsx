import React, { Component } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Status from "../../components/Status/Status";
import AddIcon from "@mui/icons-material/Add";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import Post from "../../components/Post";
import profile from "../../assets/man.png";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex flex-row justify-end items-start mt-16 h-screen ">
          <Sidebar />
          <div className="flex justify-between w-[76%] h-full mt-2 rounded-md]">
            <div className="w-[58%] pl-[50px]">
              <div className="flex justify-normal">
                <div className="flex flex-row gap-3 h-[200px] mr-2 cursor-pointer">
                  <div className="flex justify-center items-center h-[95%] w-[120px] bg-[#FFFFFF] rounded-[10px]">
                    <div>
                      <AddIcon />
                    </div>
                  </div>
                </div>
                <Status />
              </div>

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

              <div className="flex flex-col">
                <Post />
              </div>
            </div>
            <div className="flex justify-center w-[40%] ">
              <div className=" w-[85%] flex flex-col">
                <div className=" h-1/3 bg-[#FFFFFF] rounded-[10px]">
                  <div className="flex justify-between ps-5 pe-5 mt-5">
                    <h1 className="opacity-75 font-bold">Friend Requests</h1>
                    <p className="font-Montserrat font-semibold text-blue-navy-200 ">
                      See all
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center ps-5 pe-5 mt-5">
                      <img src={profile} alt="img" />
                      <h1 className="font-bold opacity-70 ps-3">
                        Milan Sandeepa
                      </h1>
                    </div>
                    <div className="flex justify-center items-center ps-5 pe-5 mt-1 gap-2">
                      <button
                        type="button"
                        className="inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-blue-600 rounded-lg  hover:bg-blue-700"
                      >
                        Confirm
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white bg-slate-300 rounded-lg  hover:bg-slate-400"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
