import { randomElement } from './randomElement'
import { random } from './random'
const faker = require("faker");

export const objectGenerator = (reserve: number) => {
  const max = random(Math.floor(reserve / 2));
  let array: any = [];
  for (let i = 0; i < max; i++) {
    array = [...array, [[faker.random.word()], randomElement(max)]];
  }
  //@ts-ignore
  return Object.fromEntries(array);
}