const ftoc = function(fahren) {
  celsius = (fahren - 32) * 0.5556;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function(celsius) {
  fahren = (celsius * 1.8) + 32;
  fahren = Math.round(fahren * 10) / 10
  return fahren
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
