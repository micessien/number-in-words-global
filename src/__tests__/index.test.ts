import { NumberToWords, LangCodes } from '../index';

const ntw = new NumberToWords();

// English test
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

// French test
test('supports french', () => {
  expect(ntw.toWords(0, LangCodes.FR)).toEqual('zero');
  expect(ntw.toWords('0.0', LangCodes.FR)).toEqual('zero');
  expect(ntw.toWords('0.6', LangCodes.FR)).toEqual('zero virgule soixante');
  expect(ntw.toWords('0.01', LangCodes.FR)).toEqual('zero virgule un');
  expect(ntw.toWords('0.06', LangCodes.FR)).toEqual('zero virgule six');
  expect(ntw.toWords(123, LangCodes.FR)).toEqual('un cent vingt trois');
  expect(ntw.toWords(1001, LangCodes.FR)).toEqual('un mille un');
  expect(ntw.toWords(1002, LangCodes.FR)).toEqual('un mille deux');
  expect(ntw.toWords(25025, LangCodes.FR)).toEqual('vingt cinq mille vingt cinq');
  expect(ntw.toWords(3025025, LangCodes.FR)).toEqual('trois million vingt cinq mille vingt cinq');
  expect(ntw.toWords(109434034, LangCodes.FR)).toEqual(
    'un cent neuf million quatre cent trente quatre mille trente quatre',
  );
  expect(ntw.toWords('35.55', LangCodes.FR)).toEqual('trente cinq virgule cinquante cinq');
  expect(ntw.toWords('12.4', LangCodes.FR)).toEqual('douze virgule quarante');
  expect(ntw.toWords('123', LangCodes.FR)).toEqual('un cent vingt trois');
  expect(ntw.toWords('1,234,345', LangCodes.FR)).toEqual(
    'un million deux cent trente quatre mille trois cent quarante cinq',
  );
});
