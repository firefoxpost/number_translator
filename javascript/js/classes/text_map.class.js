console.log("TextMap component is connected");

/*
  Map of text values for translation
*/
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
    return this[textRank][value];
  }

};
