//@ts-ignore
import { notification } from 'antd';

/**
 * Показывает алерт с информацией.
 * @param {string} title title
 * @param {string} description description
 * @param {string} type value can be one of: "success | info | warning | error"
 */

const openNotifi = (title: string, description: string, type: string) => {
  notification[type]({
    message: title,
    description,
    placement: 'bottomRight'
  });
};

export { openNotifi };