import { date } from 'faker';
import { pipe } from 'ramda';
import { dateTime } from './index';

describe('tests of prepSec function', () => {
  test('test by 60 sec', () => {
    const answer = dateTime.prepSec(60);
    expect(dateTime.getTime(answer)).toEqual({
      hr: "00",
      min: "01",
      sec: "00"
    });
  });

  test('test by 3661 sec', () => {
    const answer = dateTime.prepSec(3661);
    expect(dateTime.getTime(answer)).toEqual({
      hr: "01",
      min: "01",
      sec: "01"
    });
  });
});

describe('tests of addHours function', () => {
  test('test by 60 sec', () => {
    const answer = pipe(
      dateTime.prepSec,
      //@ts-ignore
      (date) => dateTime.addHours(date, 2),
      dateTime.getTime
      //@ts-ignore
    )(7200)
    expect(answer).toEqual({
      hr: "04",
      min: "00",
      sec: "00"
    })
  });
});