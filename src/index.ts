// Language code
export enum LangCodes {
  EN = 'EN',
  FR = 'FR',
}

export class NumberToWords {
  private wordsGeneral: { [langCode: string]: string[] } = {
    EN: ['hundred', 'and', 'point'],
    FR: ['cent', 'et', 'virgule'],
  };
  private words1To19: { [langCode: string]: string[] } = {
    EN: [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ],
    FR: [
      'zero',
      'un',
      'deux',
      'trois',
      'quatre',
      'cinq',
      'six',
      'sept',
      'huit',
      'neuf',
      'dix',
      'onze',
      'douze',
      'treize',
      'quatorze',
      'quinze',
      'seize',
      'dix-sept',
      'dix-huit',
      'dix-neuf',
    ],
  };
  private wordsTens: { [langCode: string]: string[] } = {
    EN: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    FR: [
      '',
      '',
      'vingt',
      'trente',
      'quarante',
      'cinquante',
      'soixante',
      'soixante-dix',
      'quatre-vingts',
      'quatre-vingt-dix',
    ],
  };
  private wordsBig: { [langCode: string]: string[] } = {
    EN: [
      '',
      'thousand',
      'million',
      'billion',
      'trillion',
      'quadrillion',
      'quintillion',
      'sextillion',
      'septillion',
      'octillion',
      'nonillion',
      'decillion',
    ],
    FR: [
      '',
      'mille',
      'million',
      'milliard',
      'trillion',
      'quadrillion',
      'quintillion',
      'sextillion',
      'septillion',
      'octillion',
      'nonillion',
      'décillion',
    ],
  };

  // Function to words
  public toWords = (num: string | number, langCode = 'EN'): string => {
    let val: number;
    // Clean value if it is number or string
    if (typeof num === 'string') {
      val = Number(num.replace(/,/g, ''));
    } else {
      val = num;
    }
    // console.log('Val-----', val);

    // Separate integer to decimal part
    const integerPart = parseInt(val.toString()); // Extracts the integer part
    const decimalPartMatch = val.toString().match(/\.\d*$/); // Extracts the decimal part
    const decimalPartStartByZero = decimalPartMatch ? decimalPartMatch[0].substring(1).startsWith('0') : false; // Return true if decimal start by 0
    const decimalPart = decimalPartMatch ? parseInt(decimalPartMatch[0].substring(1)) : 0; // Assign the decimal value
    // console.log('🚀 ~ decimalPart:', decimalPart);

    if (integerPart === 0 && decimalPart === 0) {
      return this.words1To19[langCode][0];
    }

    let numWords: string = this.convertToWords(integerPart, langCode);
    numWords =
      numWords +
      (decimalPart !== 0
        ? ` ${this.wordsGeneral[langCode][2]} ` +
          this.convertDecimalToWords(decimalPart, langCode, decimalPartStartByZero)
        : '');
    return numWords;
  };

  // Function convertor number
  private convertToWords = (n: number, langCode: string): string => {
    let convertedWords;
    if (n < 20) {
      convertedWords = this.words1To19[langCode][n];
    } else if (n < 100) {
      convertedWords =
        this.wordsTens[langCode][Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + this.words1To19[langCode][n % 10] : '');
    } else if (n < 1000) {
      convertedWords =
        this.words1To19[langCode][Math.floor(n / 100)] +
        ` ${this.wordsGeneral[langCode][0]}` +
        (n % 100 !== 0
          ? `${langCode === 'EN' ? ` ${this.wordsGeneral[langCode][1]} ` : ' '}` +
            this.convertToWords(n % 100, langCode)
          : '');
    } else {
      let words = '';
      // const numLength = n.toString().length;
      // console.log(`numLength----`, numLength);
      for (let i = 0; n > 0; i++) {
        const part = n % 1000;
        const partLength = part.toString().length;
        let localLengthHundred = false;
        if (i === 0 && partLength <= 2) {
          localLengthHundred = true;
        }
        // console.log(`n---- ${i}`, n);
        // console.log(`n % 1000---- ${i}`, part.toString().length);
        // console.log(`n % 1000 val---- ${i}`, part);
        if (part !== 0) {
          words =
            `${localLengthHundred ? `${langCode === 'EN' ? `${this.wordsGeneral[langCode][1]} ` : ''}` : ''}` +
            this.convertToWords(part, langCode) +
            (this.wordsBig[langCode][i] ? ' ' + this.wordsBig[langCode][i] : ' ') +
            ' ' +
            words;
        }
        n = Math.floor(n / 1000);
      }
      convertedWords = words.trim();
    }

    return convertedWords;
  };

  // Function convertor decimal
  private convertDecimalToWords = (n: number, langCode: string, decimalPartStartByZero: boolean = false): string => {
    let convertedWords;
    const numberLength = n.toString().length;
    // console.log('🚀~ numberLength:', numberLength);
    // Check if length is one
    if (numberLength === 1 && !decimalPartStartByZero) {
      switch (n) {
        case 1:
          convertedWords = this.words1To19[langCode][10];
          break;
        case 2:
          convertedWords = this.wordsTens[langCode][2];
          break;
        case 3:
          convertedWords = this.wordsTens[langCode][3];
          break;
        case 4:
          convertedWords = this.wordsTens[langCode][4];
          break;
        case 5:
          convertedWords = this.wordsTens[langCode][5];
          break;
        case 6:
          convertedWords = this.wordsTens[langCode][6];
          break;
        case 7:
          convertedWords = this.wordsTens[langCode][7];
          break;
        case 8:
          convertedWords = this.wordsTens[langCode][8];
          break;
        case 9:
          convertedWords = this.wordsTens[langCode][9];
          break;
        default:
          convertedWords = this.words1To19[langCode][0];
          break;
      }
    } else {
      if (n < 20) {
        convertedWords = this.words1To19[langCode][n];
      } else if (n < 100) {
        convertedWords =
          this.wordsTens[langCode][Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + this.words1To19[langCode][n % 10] : '');
      } else if (n < 1000) {
        convertedWords =
          this.words1To19[langCode][Math.floor(n / 100)] +
          ` ${this.wordsGeneral[langCode][0]}` +
          (n % 100 !== 0
            ? `${langCode === 'EN' ? ` ${this.wordsGeneral[langCode][1]} ` : ' '}` +
              this.convertToWords(n % 100, langCode)
            : '');
      } else {
        let words = '';
        // const numLength = n.toString().length;
        // console.log(`numLength----`, numLength);
        for (let i = 0; n > 0; i++) {
          const part = n % 1000;
          const partLength = part.toString().length;
          let localLengthHundred = false;
          if (i === 0 && partLength <= 2) {
            localLengthHundred = true;
          }
          // console.log(`n---- ${i}`, n);
          // console.log(`n % 1000---- ${i}`, part.toString().length);
          // console.log(`n % 1000 val---- ${i}`, part);
          if (part !== 0) {
            words =
              `${localLengthHundred ? `${langCode === 'EN' ? `${this.wordsGeneral[langCode][1]} ` : ''}` : ''}` +
              this.convertToWords(part, langCode) +
              (this.wordsBig[langCode][i] ? ' ' + this.wordsBig[langCode][i] : ' ') +
              ' ' +
              words;
          }
          n = Math.floor(n / 1000);
        }
        convertedWords = words.trim();
      }
    }

    return convertedWords;
  };
}
