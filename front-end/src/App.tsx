import React, { Component } from "react";

import "./App.css";
import Content from "./components/Content";

export default class App extends Component {
  componentDidMount(): void {
    // console.log("Hello world");
  }

  render(): React.ReactNode {
    return (
      <div>
        <Content />
      </div>
    );
  }
}
