const convertToCelsius = function(val) {
  let toCel = (val -32) * 5/9;
  if(Number.isInteger(toCel)){
    return toCel
  }else{
    let roundCel = Math.round(toCel*10)/10;
    return roundCel;
  }
};

const convertToFahrenheit = function(val) {
  let toFahr = (val * 9/5)+32;  
  if(Number.isInteger(toFahr)){
    return toFahr
  }else{
    let roundFahr = Math.round(toFahr * 10)/10;
    return roundFahr;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
