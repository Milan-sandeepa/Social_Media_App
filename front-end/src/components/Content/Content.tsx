import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile/Profile";
import Setting from "../../pages/Setting/Setting";
import Friends from "../../pages/Friends/Friends";
import Requests from "../../pages/Requests/Requests";

export default class Content extends Component {
  render() {
    return (
      <div className="">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/requests" element={<Requests />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
      </div>
    );
  }
}
