import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";

export default class Content extends Component {
  render() {
    return (
      <div className="">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    );
  }
}
