const convertToCelsius = function(f) {
  let celcius = (f-32) / 1.8;
  return celcius;
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c*1.8) + 32;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
