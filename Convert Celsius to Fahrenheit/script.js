function convertToFahrenheit(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;

  if (typeof fahrenheit !== "undefined") {
    return fahrenheit;
  } else {
    return "fahrenheit not defined";
  }
}

// Change the inputs below to test the code
convertToFahrenheit(30);