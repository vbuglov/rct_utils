import { iError } from '../errorWrapper/errorWrapper';
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
export declare const aooFactory: (snapshot: any[], amount: number, errorMod?: boolean) => undefined | iError | Array<Object>;
