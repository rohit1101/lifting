export function toCelcius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

export function toFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

export function converter(temp, convert) {
  const input = parseFloat(temp);
  if (isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
