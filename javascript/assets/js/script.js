let startTranslation = () => {
  let numberValue = document.getElementById('number').value;
  let textResult = '';
  let checkNumberValue = new RegExp(/[0-9]/).test(numberValue);

  if(checkNumberValue) {
    let TranslatorInstance = new Translator(numberValue);
    document.getElementById('text_result').innerHTML = TranslatorInstance.getTextResult();
  } else {
    console.log("The number has wrong value!");
  }
};

document.getElementById('button').addEventListener("click", startTranslation);

/*
  Map of text values for translation
*/

console.log("TextMap component is connected");

class TextMap {
  constructor() {
    this.integers = {
      '1': {
        'male': 'один',
        'female': 'одна'
      },
      '2': {
        'male': 'два',
        'female': 'две'
      },
      '3': {
        'male': 'три'
      },
      '4': {
        'male': 'четыре'
      },
      '5': {
        'male': 'пять'
      },
      '6': {
        'male': 'шесть'
      },
      '7': {
        'male': 'семь',
      },
      '8': {
        'male': 'восемь'
      },
      '9': {
        'male': 'девять'
      },
      '10': {
        'male': 'десять'
      },
      '11': {
        'male': 'одиннадцать'
      },
      '12': {
        'male': 'двенадцать'
      },
      '13': {
        'male': 'тринадцать'
      },
      '15': {
        'male': 'четырнадцать'
      },
      '15': {
        'male': 'пятнадцать'
      },
      '16': {
        'male': 'шестнадцать'
      },
      '17': {
        'male': 'семнадцать'
      },
      '18': {
        'male': 'восемнадцать'
      },
      '19': {
        'male': 'девятнадцать'
      }
    };

    this.dozens = {
      '1': 'десять',
      '2': 'двадцать',
      '3': 'тридцать',
      '4': 'сорок',
      '5': 'пятьдесят',
      '6': 'шестьдесят',
      '7': 'семьдесят',
      '8': 'восемьдесят',
      '9': 'девяносто'
    };

    this.hundreds = {
      '1': 'сто',
      '2': 'двести',
      '3': 'триста',
      '4': 'четыреста',
      '5': 'пятьсот',
      '6': 'шестьсот',
      '7': 'семьсот',
      '8': 'восемьсот',
      '9': 'девятьсот'
    };

    this.thousands = {
      '1': 'тысяча',
      '2': 'тысячи',
      '3': 'тысячи',
      '4': 'тысячи',
      '5': 'тысяч',
      '6': 'тысяч',
      '7': 'тысяч',
      '8': 'тысяч',
      '9': 'тысяч'
    };

    this.millions =  {
      '1': 'миллион',
      '2': 'миллиона',
      '3': 'миллиона',
      '4': 'миллиона',
      '5': 'миллионов',
      '6': 'миллионов',
      '7': 'миллионов',
      '8': 'миллионов',
      '9': 'миллионов'
    };

    this.billions = {
      '1': 'миллиард',
      '2': 'миллиарда',
      '3': 'миллиарда',
      '4': 'миллиарда',
      '5': 'миллиардов',
      '6': 'миллиардов',
      '7': 'миллиардов',
      '8': 'миллиардов',
      '9': 'миллиардов'
    };

    this.rubleMap = {
      '1': 'рубль',
      '2': 'рубля',
      '3': 'рубля',
      '4': 'рубля',
      '5': 'рублей',
      '6': 'рублей',
      '7': 'рублей',
      '8': 'рублей',
      '9': 'рублей'
    };

    this.genderList = ['male', 'female'];

    this.rankList = ['integers', 'dozens', 'hundreds', 'thousands', 'millions', 'billions'];

    console.log("Class TextMap is initialized!");
  }

  getTextValueForNumber(value, subRank, rank) {
    let textSubRank = this.rankList[subRank];

    if(textSubRank === 'integers') {
      let textGender = rank === 1 && (value === '1' || value === '2') ? 'female' : 'male';

      return this[textSubRank][value][textGender];
    } else {
      return this[textSubRank][value];
    }
  }

  getTextValueForCurrency(value) {
    return this.rubleMap[value];
  }

  getRankName(rank, value) {
    let textRank = this.rankList[rank];
    if(value === '0') {
      value = '9';
    }
    return this[textRank][value];
  }

};

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
