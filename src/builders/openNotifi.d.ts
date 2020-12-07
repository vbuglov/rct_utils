/**
 * Показывает алерт с информацией.
 * @param {string} title title
 * @param {string} description description
 * @param {string} type value can be one of: "success | info | warning | error"
 */
declare const openNotifi: (title: string, description: string, type: string) => void;
export { openNotifi };
