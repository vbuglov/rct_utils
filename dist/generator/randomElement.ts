import { cond, T, equals } from "ramda";
import { arrayGenerator } from './arrayGenerator'
import { objectGenerator } from './objectGenerator'
const faker = require("faker");

export const randomElement = (reserve: number) => {
  return cond([
    [equals(0), () => faker.phone.phoneNumber()],
    [equals(1), () => faker.address.country()],
    [equals(2), () => faker.internet.email()],
    [equals(3), () => faker.name.lastName()],
    [(el) => el > 3 && el < 6, () => objectGenerator(reserve)],
    [(el) => el >= 6, () => arrayGenerator(reserve)],
    [T, () => null]
    //@ts-ignore
  ])(random(10));
}