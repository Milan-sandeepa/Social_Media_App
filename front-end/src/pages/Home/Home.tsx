import React, { Component } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Status from "../../components/Status/Status";
import AddIcon from "@mui/icons-material/Add";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex flex-row justify-around items-start mt-16 h-screen ">
          <Sidebar />
          <div className="flex justify-between w-[76%] h-full mt-2 rounded-md ml-[314px]">
            <div className="w-[65%]">
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

              <div className="h-72 mt-5 mr-5 bg-[#FFFFFF] rounded-[10px]">
                <div className="flex ml-7 pt-6">
                  <BorderColorRoundedIcon />
                  <h1 className="ml-2 font-medium text-slate-600">
                    Create Post
                  </h1>
                </div>

                <div className="w-full mt-3 h-[60%]">
                  <div className="ml-5 w-[95%] h-[60%]">
                    <form>
                      <div className="w-full h-40 mb-4 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="px-4 h-full py-2 bg-white rounded-b-lg ">
                          <label htmlFor="editor" className="sr-only">
                            Publish post
                          </label>
                          <textarea
                            id="editor"
                            className="block w-full h-32 mt-2 px-0 text-sm text-black bg-white outline-none ps-2"
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
            <div className="w-[35%] bg-slate-700">
              <h1></h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
