
console.log("Translator component is connected");

let TextMapInstance = new TextMap();

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

    console.log(arr);

    return arr;
  }

  translateValueToText() {
    for(let i = 0; i < this.valueArr.length; i++) {
      let subNumber = this.valueArr[i];

    }
    TextMapInstance.test = '123123123'
  }

  get textResult() {
    return this.textResult;
  }

  set textResult(text) {
    this.textResult = text;
  }
}
