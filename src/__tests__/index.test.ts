import { NumberToWords } from '../index';

const ntw = new NumberToWords();

test('supports english', () => {
  expect(ntw.toWords(0)).toEqual('zero');
  expect(ntw.toWords('0.0')).toEqual('zero');
  expect(ntw.toWords('0.6')).toEqual('zero point sixty');
  expect(ntw.toWords('0.01')).toEqual('zero point one');
  expect(ntw.toWords('0.06')).toEqual('zero point six');
  expect(ntw.toWords(123)).toEqual('one hundred and twenty three');
  expect(ntw.toWords(1001)).toEqual('one thousand and one');
  expect(ntw.toWords(1002)).toEqual('one thousand and two');
  expect(ntw.toWords(25025)).toEqual('twenty five thousand and twenty five');
  expect(ntw.toWords(3025025)).toEqual('three million twenty five thousand and twenty five');
  expect(ntw.toWords(109434034)).toEqual(
    'one hundred and nine million four hundred and thirty four thousand and thirty four',
  );
  expect(ntw.toWords('35.55')).toEqual('thirty five point fifty five');
  expect(ntw.toWords('12.4')).toEqual('twelve point forty');
  expect(ntw.toWords('123')).toEqual('one hundred and twenty three');
  expect(ntw.toWords('1,234,345')).toEqual(
    'one million two hundred and thirty four thousand three hundred and forty five',
  );
});
