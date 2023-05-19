import React, { Component } from "react";
import profile from "../../assets/man.png";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

export default class Post extends Component {
  render() {
    return (
      <div className="h-auto mt-5  bg-[#FFFFFF] rounded-[10px]">
        <div className="flex ml-7 pt-6">
          <img src={profile} alt="logo" />
          <h1 className="ml-2 font-medium text-slate-600">Milan Sandeepa</h1>
          <p className="ms-4 font-light">just now</p>
        </div>

        <div className="p-6">
          <div className="pb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem
              at in eaque facilis,Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Velit quaerat obcaecati, id repudiandae fugiat
              ullam repellendus non blanditiis corrupti? Eaque voluptates ea
              veritatis quod sed sequi nostrum eum dolorem quisquam?
            </p>
          </div>

          <hr />
          <div className="flex flex-row justify-start items-center gap-7 mt-2 mb-2">
            <ThumbUpOffAltRoundedIcon />
            <h1 className="font-semibold">3.2k</h1>
            <h1 className="font-semibold">like</h1>

            <ChatBubbleRoundedIcon />
            <h1 className="font-semibold">1k</h1>
            <h1 className="font-semibold">comments</h1>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
