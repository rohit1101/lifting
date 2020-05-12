import React from "react";
// import ReactDOM from "react";

const scaleNames = {
  c: "Celcius:",
  f: "Fahrenheit:",
};

export class TempInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // this.setState({ temperature: e.target.value });
    this.props.onTempChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]} </legend>
        <input
          type="number"
          value={this.state.temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
