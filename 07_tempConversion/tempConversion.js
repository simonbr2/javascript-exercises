const ftoc = function(fTemp) {
  celsius = (fTemp - 32) * 0.5556;
  roundCelsius = celsius.toFixed(1);
  return parseFloat(roundCelsius)
};

const ctof = function(cTemp) {
  faren = (cTemp * 9/5) + 32;
  roundFaren = faren.toFixed(1);
  return parseFloat(roundFaren)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
