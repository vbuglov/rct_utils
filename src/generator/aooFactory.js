"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aooFactory = void 0;
const errorWrapper_1 = require("../errorWrapper/errorWrapper");
/**
  * Функция гененрирует массив по переданному слепку
  *
  * @category generator
  * @method
  * @since v0.1.0
  * @param  {array} snapshot - слепок по которому будет идти генерация
  * @param  {number} amount - необходимое количество элементов в массиве
  * @return {array}
  *
  * @example
  *   faker.seed(123);
  *
  *   const snapshotExample = [{
  *     key: "id",
  *     fn: faker.random.number,
  *     params: [100]
  *    },
  *    {
  *     key: "name",
  *     fn: faker.address.zipCode,
  *     params: []
  *    },
  *    {
  *     key: "county",
  *     fn: faker.address.county,
  *     params: []
  *    }];
  *
  *   const answer =  generator.aooFactory(snapshotExample, 10); //=>
  *   [
  *    { county: "Buckinghamshire", id: 70, name: "24265-7744" },
  *    { county: "Berkshire", id: 99, name: "65413" },
  *    { county: "Borders", id: 34, name: "73420-6357" },
  *    { county: "Berkshire", id: 18, name: "10575" },
  *    { county: "Berkshire", id: 64, name: "84776" },
  *    { county: "Bedfordshire", id: 72, name: "36332" },
  *    { county: "Avon", id: 29, name: "67074-0414" },
  *    { county: "Buckinghamshire", id: 43, name: "38478" },
  *    { county: "Buckinghamshire", id: 95, name: "54651-3344" },
  *    { county: "Buckinghamshire", id: 87, name: "21449-2546" }
  *   ]
  *
  */
const aooFactory = (snapshot, amount, errorMod = false) => {
    let answer = undefined;
    let error = null;
    try {
        let array = [];
        for (let i = 0; i < amount; i++) {
            const newObj = snapshot.reduce((acc, cur) => {
                return Object.assign(Object.assign({}, acc), { [cur.key]: cur.fn(...cur.params) });
            }, {});
            array = [...array, newObj];
        }
        answer = array;
    }
    catch (err) {
        error = err;
    }
    return errorWrapper_1.default(error, answer, errorMod);
};
exports.aooFactory = aooFactory;
