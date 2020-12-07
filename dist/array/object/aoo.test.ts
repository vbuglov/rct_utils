import { AOO } from './index';

expect.extend({
  toContainObject(received, argument) {

    const pass = this.equals(received,
      expect.arrayContaining([
        expect.objectContaining(argument)
      ])
    )

    if (pass) {
      return {
        message: () => (`expected ${this.utils.printReceived(received)} not to contain object ${this.utils.printExpected(argument)}`),
        pass: true
      }
    } else {
      return {
        message: () => (`expected ${this.utils.printReceived(received)} to contain object ${this.utils.printExpected(argument)}`),
        pass: false
      }
    }
  }
})

const state = [
  { type: 'START', data: 'foo' },
  { type: 'START', data: 'baz' },
  { type: 'END', data: 'foo' },
]

test('adds 1 + 2 to equal 3', () => {
  const testArray = [{ foo: "hello", bar: 17, isCheck: true }, { foo: "bye", bar: 21 }, { foo: "world", isCheck: true }];
  const newList = AOO.finderList(testArray, 'bar');
  //@ts-ignore
  expect(newList).toContainObject({ foo: "hello", bar: 17, isCheck: true });
  //@ts-ignore
  expect(newList).toContainObject({ foo: "bye", bar: 21 });
});