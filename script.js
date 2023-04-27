function convertToRoman(num) {
  const obj = {
    0:['M',1000], 
    1:['D', 500], 
    2:['C', 100], 
    3:['L', 50], 
    4:['X', 10], 
    5:['V', 5], 
    6:['I', 1]
  };
  
  let result = '';
  let remainder = num;

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];
    const quotient = Math.floor(remainder / value);
    
    if (quotient === 0) {
      continue;
    }
    
    if (symbol === 'M') {
      result += symbol.repeat(quotient);
    } else if (quotient === 4) {
      result += symbol + obj[i - 1][0];
    } else if (remainder >= value * 9 / 10) {
      result += obj[i + 2][0] + symbol;
      remainder -= value * 9 / 10;
      continue;
    } else {
      result += symbol.repeat(quotient);
    }
    
    remainder -= quotient * value;
  }
  
  return result;
}

console.log(convertToRoman(36)); // XXXVI

module.exports = convertToRoman;
