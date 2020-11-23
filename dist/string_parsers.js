/**
  * Функция возвращает строку где первый символ становится заглавным
  *
  * @category String_Parser
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @return {string}
  * 
  * @example
  *
  *      lwFirstLett('string') //=> 'String'
  */
export const captlzFrstLett = (string) => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
  else {
    const error = `error by func capitalizeFirstLetter, ivalid string. string can't equal ${string}`
    console.error(error)
    return error;
  }
}

/**
  * Функция обрезает строку до необходимого количества символов, если в этом есть необходимость
  *
  * @category String_Parser
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @param {number} key - некоторое значение ключа
  * @return {string}
  * 
  * @example
  *
  *      lwFirstLett('String') //=> 'string'
  */
export const lwFirstLett = (string) => {
  if (string && string[0] && type(string) === "String") return string[0].toLowerCase() + string.slice(1);
  else {
    const error = `error by func lowerFirstLetter, ivalid string. string can't equal ${string}`
    console.error(error)
    return error;
  }
}


/**
  * Функция обрезает строку до необходимого количества символов, если в этом есть необходимость
  *
  * @category String_Parser
  * @method
  * @since v0.1.0
  * @param {string} array - название ключа из объекта
  * @param {number} key - некоторое значение ключа
  * @return {string}
  * 
  * @example
  *
  *      slicer()
  */
export const slicer = (string, length = 40) => {
  if (string && string.length > length) {
    return string.substring(0, length) + "...";
  }
  return string;
}