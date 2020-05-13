import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BoilingVerdict } from "./BoilingVerdict.js";
import { TempInput } from "./TempInput.js";
import { converter, toFahrenheit, toCelcius } from "./logic.js";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelciusChange(temperature) {
    this.setState({ temperature, scale: "c" });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ temperature, scale: "f" });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcius =
      scale === "f" ? converter(temperature, toCelcius) : temperature;
    const fahrenheit =
      scale === "c" ? converter(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TempInput
          scale="c"
          temperature={celcius}
          onTempChange={this.handleCelciusChange}
        />
        <TempInput
          scale="f"
          temperature={fahrenheit}
          onTempChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celcius={parseFloat(celcius)} />
      </div>
    );
  }
}
