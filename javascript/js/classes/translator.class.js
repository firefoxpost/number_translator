
console.log("Translator component is connected");

/*
  Translator component
*/
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
      let subNumberInt = parseInt(subNumber);
      let subNumberLength = subNumber.length;
      let rank = this.valueArrLength - 1 - i;
      let isTeen = false;

      if (subNumberInt > 10 && subNumberInt < 20) {
        result += TextMapInstance.getTextValueForNumber(subNumber, 0);
        result += ' ';
      } else {
        for(let j = 0; j < subNumberLength; j++) {
          if(j === 1 && subNumber[j] === '1') {
            isTeen = true;
            break;
          }
          let subRank = subNumberLength - 1 - j;
          result += TextMapInstance.getTextValueForNumber(subNumber[j], subRank, rank);
          result += ' ';
        }
        if(isTeen) {
          let teen = subNumber.slice(-2);
          result += TextMapInstance.getTextValueForNumber(teen, 0);
          result += ' ';
          isTeen = false;
        }

        if(this.valueArrLength > 1 && i < this.valueArrLength - 1) {
          result += TextMapInstance.getRankName(rank + 2, subNumber[subNumberLength-1]);
          result += ' ';
        }
      }
    }

    if(this.value[this.valueLength - 2] === '1') {
      result += TextMapInstance.getTextValueForCurrency("9");
    } else {
      result += TextMapInstance.getTextValueForCurrency(this.value[this.valueLength - 1]);
    }


    return result;
  }

  getTextResult() {
    return this.textResult;
  }

}
