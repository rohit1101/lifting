import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { BoilingVerdict } from "./BoilingVerdict.js";
import { TempInput } from "./TempInput.js";

export class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TempInput scale="c" />
        <TempInput scale="f" />
      </div>
    );
  }
}
