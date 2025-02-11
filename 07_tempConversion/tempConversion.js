const convertToCelsius = function(fare) {
  let celsius = (fare - 32) * 5 / 9;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(cel) {
  let fare = (cel * 9 / 5) + 32;
  fare = Math.round(fare * 10) / 10 
  return fare;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
