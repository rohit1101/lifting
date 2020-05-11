import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BoilingVerdict } from "./BoilingVerdict.js";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celcius:</legend>
        <input type="number" value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celcius={this.state.temperature} />
      </fieldset>
    );
  }
}

// export function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }
