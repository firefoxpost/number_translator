/*
  Translator component
*/

console.log("Translator component is connected");

class Translator {
  constructor(value) {
    this.value = value;
    this.integerValue = parseInt(value);
    this.valueLength = value.length;
    this.divisionRemainder = this.valueLength % 3;
    this.valueArr = this.setValueArr();
    this.valueArrLength = this.valueArr.length;
    this.textResult = this.translateValueToText();

    console.log("Class Translator is initialized!");
  }

  setValueArr() {
    let arr = [];
    let i = 0;

    while(i < this.valueLength) {
      var subNumber = null;
      if(i === 0 && this.divisionRemainder !== 0) {
        subNumber = this.value.slice(i, i + this.divisionRemainder);
        i += this.divisionRemainder;
      } else {
        subNumber = this.value.slice(i, i + 3);;
        i += 3;
      }
      arr.push(subNumber);
    }

    return arr;
  }

  translateValueToText() {
    let TextMapInstance = new TextMap();
    let result = '';

    for(let i = 0; i < this.valueArrLength; i++) {
      let subNumber = this.valueArr[i];
      let subNumberLength = subNumber.length;
      let rank = this.valueArrLength - 1 - i;

      if (this.numberIsTeen(subNumber)) {
        result += TextMapInstance.getTextValueForNumber(subNumber, 0);
        result += ' ';
      } else {
        let subDozen = subNumber.slice(-2);

        for(let j = 0; j < subNumberLength; j++) {
          if(subNumber[j] === '0') {
            continue;
          }
          if (j === 1 && this.numberIsTeen(subDozen)) {
            result += TextMapInstance.getTextValueForNumber(subDozen, 0);
            result += ' ';
            break;
          }

          let subRank = subNumberLength - 1 - j;
          result += TextMapInstance.getTextValueForNumber(subNumber[j], subRank, rank);
          result += ' ';
        }

        // get text 'thousands', 'millions' etc.
        if(this.valueArrLength > 1 && i < this.valueArrLength - 1 && parseInt(subNumber) !== 0) {
          result += TextMapInstance.getRankName(rank + 2, subNumber[subNumberLength-1]);
          result += ' ';
        }
      }
    }

    // get text 'rubles'
    if(this.value[this.valueLength - 1] === '0' || this.value[this.valueLength - 2] === '1') {
      result += TextMapInstance.getTextValueForCurrency("9");
    } else {
      result += TextMapInstance.getTextValueForCurrency(this.value[this.valueLength - 1]);
    }


    return result;
  }

  numberIsTeen(number) {
    let num = parseInt(number);
    return num > 10 && num < 20;
  }

  getTextResult() {
    return this.textResult;
  }

}
