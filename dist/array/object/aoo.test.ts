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

const array = [
  { id: 64, name: "42942-5693", county: "Borders" },
  { id: 4, name: "23465-7870", county: "Berkshire" },
  { id: 13, name: "19616-0095", county: "Cambridgeshire" },
  { id: 31, name: "79350", county: "Berkshire" }
];

const object = {
  quantifying: {
    Towels: [
      { feed: {}, id: 1 },
      { id: 2 },
      { id: 3 },
      { Chair: "Reyes.Lebsack@hotmail.com", Oklahoma: {}, id: 4 },
      { utilize: {}, engage: "747-776-1611", id: 5 }
    ],
    Electronics: "239-934-8977 x1217",
    Assurance: { Configurable: "607-385-4573 x0039" }
  }
};

describe('tests of finderList function', () => {
  test('[{ foo: "hello", bar: 17, isCheck: true }, { foo: "bye", bar: 21 }, { foo: "world", isCheck: true }] by key "bar"', () => {
    const testArray = [{ foo: "hello", bar: 17, isCheck: true }, { foo: "bye", bar: 21 }, { foo: "world", isCheck: true }];
    const newList = AOO.finderList(testArray, 'bar');
    //@ts-ignore
    expect(newList).toContainObject({ foo: "hello", bar: 17, isCheck: true });
    //@ts-ignore
    expect(newList).toContainObject({ foo: "bye", bar: 21 });
  });
});

describe('tests of findValues function', () => {
  test('[{foo: "hello", bar: 17, isCheck: true}, {foo: "bye", bar: 21, isCheck: false}] by key "foo"', () => {
    const testArray = [{ foo: "hello", bar: 17, isCheck: true }, { foo: "bye", bar: 21, isCheck: false }];
    const newList = AOO.findValues(testArray, 'foo');
    expect(newList).toEqual(['hello', 'bye']);
  });
});

describe('tests of paths', () => {
  test('find value in array by path', () => {
    const val1 = AOO.paths(array, [["id", 4], "name"]);
    expect(val1).toEqual("23465-7870");
  });
  test('find value in object by path', () => {
    const val1 = AOO.paths(object, ['quantifying', 'Towels', ['id', 4], 'Chair']);
    expect(val1).toEqual("Reyes.Lebsack@hotmail.com");
  });
});

describe('tests of update', () => {
  test('update arr -> element to number', () => {
    const updArr = AOO.update(array, { key: 'id', value: 4 }, 1)
    expect(updArr).toEqual([
      { id: 64, name: "42942-5693", county: "Borders" },
      1,
      { id: 13, name: "19616-0095", county: "Cambridgeshire" },
      { id: 31, name: "79350", county: "Berkshire" }
    ])
  });
  test('update arr -> element to object', () => {
    const updArr = AOO.update(array, { key: 'id', value: 4 }, {
      id: 5, name: "23123-22", county: "Berkshire", address: "gh#21-2"
    })
    expect(updArr).toEqual([
      { id: 64, name: "42942-5693", county: "Borders" },
      {
        id: 5, name: "23123-22", county: "Berkshire", address: "gh#21-2"
      },
      { id: 13, name: "19616-0095", county: "Cambridgeshire" },
      { id: 31, name: "79350", county: "Berkshire" }
    ])
  });
});

describe('tests of pUpdate', () => {
  const object = {
    quantifying: {
      Towels: [
        { feed: {}, id: 1 },
        { id: 2 },
        { id: 3 },
        { Chair: "Reyes.Lebsack@hotmail.com", Oklahoma: {}, id: 4 },
        { utilize: {}, engage: "747-776-1611", id: 5 }
      ],
      Electronics: "239-934-8977 x1217",
      Assurance: { Configurable: "607-385-4573 x0039" }
    }
  };
  const array = [
    {
      id: 2,
      gnom: 222
    },
    {
      id: 4,
      gnom: {
        c: [
          { id: 1, c: 2 },
          { id: 2, b: 2 },
          { id: 4, v: 2 }
        ],
        a: 3
      }
    }
  ];
  test('test update array by path', () => {
    const updArr = AOO.pUpdate(array, [["id", 4], "gnom", "c", ["id", 2], "b"], { c: 2, d: 3 });
    expect(updArr).toEqual([
      { id: 2, gnom: 222 },
      {
        id: 4,
        gnom: {
          c: [
            { id: 1, c: 2 },
            { id: 2, b: { c: 2, d: 3 } },
            { id: 4, v: 2 }
          ],
          a: 3
        }
      }
    ])
  });
  test('test update object by path', () => {
    const updArr = AOO.pUpdate(object, ["quantifying", "Towels", ["id", 4], "Chair"], "friend@gmail.com");
    expect(updArr).toEqual({
      quantifying: {
        Towels: [
          { feed: {}, id: 1 },
          { id: 2 },
          { id: 3 },
          { Chair: "friend@gmail.com", Oklahoma: {}, id: 4 },
          { utilize: {}, engage: "747-776-1611", id: 5 }
        ],
        Electronics: "239-934-8977 x1217",
        Assurance: { Configurable: "607-385-4573 x0039" }
      }
    });
  });
});