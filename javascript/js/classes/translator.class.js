/*(() => {

  'use strict'
*/
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
      this.textResult = translateValueToText();

      console.log("Class Translator is initialized!");
    }

    setValueArr() {
      let arr = [];
      let i = 0;

      while(i < this.valueLength) {
        var subNumber = null;
        if(i === 0 && this.divisionRemainder !== 0) {
          subNumber = this.integerValue.slice(i, i + this.divisionRemainder);
          i += this.divisionRemainder;
        } else {
          subNumber = this.integerValue.slice(i, i + 3);;
          i += 3;
        }
        arr.push(subNumber);
      }

      console.log(arr);

      return arr;
    }

    translateValueToText() {
      let TextMap = new TextMap();

      for(let i = 0; i < this.valueArr.length; i++) {
        let subNumber = this.valueArr[i];

      }

      TextMap.textResult = 'TEST TEST';
    }

    get textResult() {
      return this.textResult;
    }

    set textResult(text) {
      this.textResult = text;
    }
  }
//})();
