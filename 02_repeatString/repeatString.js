const repeatString = function(str, multiplier) {
  if (multiplier < 0){
    return "ERROR"
  } else {
    return str.repeat([multiplier])
  }
};

// Do not edit below this line
module.exports = repeatString;
