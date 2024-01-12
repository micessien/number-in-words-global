// Language code
export enum LangCodes {
  EN = 'EN',
  FR = 'FR',
}

export class NumberToWords {
  private words1To19: string[] = [
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
  ];
  private wordsTens: string[] = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  private wordsBig: string[] = [
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
  ];

  // Function to words
  public toWords = (num: string | number): string => {
    let val: number;
    if (typeof num === 'string') {
      val = Number(num.replace(/,/g, ''));
    } else {
      val = num;
    }
    // console.log('Val-----', val);

    if (val === 0) {
      return this.words1To19[0];
    }

    const numWords = this.convertToWords(val);
    return numWords;
  };

  // Function convertor
  private convertToWords = (n: number, isAndNecessary: boolean = true): string => {
    let convertedWords;
    if (n < 20) {
      convertedWords = this.words1To19[n];
    } else if (n < 100) {
      convertedWords = this.wordsTens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + this.words1To19[n % 10] : '');
    } else if (n < 1000) {
      convertedWords =
        this.words1To19[Math.floor(n / 100)] +
        ' hundred' +
        (n % 100 !== 0 ? `${isAndNecessary ? ' and ' : ' '}` + this.convertToWords(n % 100) : '');
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
            `${localLengthHundred ? 'and ' : ''}` +
            this.convertToWords(part) +
            (this.wordsBig[i] ? ' ' + this.wordsBig[i] : ' ') +
            ' ' +
            words;
        }
        n = Math.floor(n / 1000);
      }
      convertedWords = words.trim();
    }

    return convertedWords;
  };
}
