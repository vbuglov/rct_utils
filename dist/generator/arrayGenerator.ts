import { randomElement } from './randomElement'
import { random } from './random'

/**
  * Функция гененрирует случайный массив
  *
  * @category generator
  * @method
  * @since v0.1.0
  * @param {Number} - запас для генерации массива
  * @return {String}
  */
const arrayGenerator = (reserve: number) => {
  const max = random(Math.floor(reserve / 2));
  let array: any = [];
  for (let i = 0; i < max; i++) {
    array = [...array, randomElement(max)];
  }
  return array;
};

export { arrayGenerator }