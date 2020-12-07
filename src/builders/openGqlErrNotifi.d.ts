/**
 * Выводит gql ошибку
 * @param {string} title title
 * @param {string} description description
 * @param {string} type can be: success info warning error
 */
declare const openGqlErrNotifi: (error: any) => any;
export { openGqlErrNotifi };
