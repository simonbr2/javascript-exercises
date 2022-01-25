const sumAll = function(num, top) {
  if (num < 0 || top < 0 || typeof num != "number" || typeof top != "number"){
    return "ERROR";
  } else if (num > top){
    newNumber = top
    newTop = num
    sum = newNumber
    for (let i = newNumber + 1; i <= newTop; i++) {
      sum = sum + i;
    }
    return sum;
  } else {
    sum = num
  for (let i = num + 1; i <= top; i++) {
    sum = sum + i;
  }
  if (sum < 0){
    return "ERROR";
  } else {
    return sum;
  }  
  }  
};

// Do not edit below this line
module.exports = sumAll;
