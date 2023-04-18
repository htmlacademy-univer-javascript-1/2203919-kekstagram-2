/**
*Генерация случайного числа
*@param {int} a,b – числа, определяющие диапазон значений
*@param {int} lower – нижняя граница диапазона
*@param {int} upper – верхняя граница диапазона
*@return {int} result – случайное число
*/
function getRndInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
/**
*Проверка максимальной длины строки
*@param {int} string – проверяемая строка
*@param {int} maxLength– максимальная длина
*/
function checkLength(string, maxLength) {
  return string.length <= maxLength;
}
/**
*Функция выбора рандомного элемента массива
*@param {Array} - исходный массив
*@return {*} - случайный элемент массива
*/
function getRandomArrayElement(elements) {
  return elements[getRndInteger(0, elements.length - 1)];
}
function getUniqueNumber () {
  let i = 1;
  return () => i++;
}
export {getRandomArrayElement, getUniqueNumber, getRndInteger};
