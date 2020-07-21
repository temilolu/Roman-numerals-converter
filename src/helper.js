export const RomanNumerals = {
  toRoman: function(number) {
    let roman = "";
    const romanNumList = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XV: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let a;
    if (number < 1 || number > 5000) return "0";
    else {
      for (let key in romanNumList) {
        a = Math.floor(number / romanNumList[key]);
        if (a >= 0) {
          for (let i = 0; i < a; i++) {
            roman += key;
          }
        }
        number = number % romanNumList[key];
      }
    }

    return roman;
  },
  fromRoman: function(romanNumber) {
    romanNumber = romanNumber.toUpperCase();
    const romanNumList = [
      "CM",
      "M",
      "CD",
      "D",
      "XC",
      "C",
      "XL",
      "L",
      "IX",
      "X",
      "IV",
      "V",
      "I"
    ];
    const figures = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
    let index = 0,
      num = 0;
    for (let rn in romanNumList) {
      index = romanNumber.indexOf(romanNumList[rn]);
      while (index !== -1) {
        num += parseInt(figures[rn], 10);
        romanNumber = romanNumber.replace(romanNumList[rn], "-");
        index = romanNumber.indexOf(romanNumList[rn]);
      }
    }
    return num;
  }
};
