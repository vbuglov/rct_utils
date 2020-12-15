import { randomElement } from './randomElement'
import { random } from './random'

export const arrayGenerator = (reserve: number) => {
  const max = random(Math.floor(reserve / 2));
  let array: any = [];
  for (let i = 0; i < max; i++) {
    array = [...array, randomElement(max)];
  }
  return array;
};