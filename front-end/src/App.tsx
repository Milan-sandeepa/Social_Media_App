import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import Content from "./components/Content";

export default class App extends Component {
  componentDidMount(): void {
    // console.log("Hello world");
  }

  render(): React.ReactNode {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Frendify</title>
        </Helmet>
        <Content />
      </div>
    );
  }
}
