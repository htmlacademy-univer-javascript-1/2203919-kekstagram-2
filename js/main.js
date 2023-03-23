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
const NAMES = [
  'Олег',
  'Сергей',
  'Ангелина',
  'Александр',
  'Света',
  'Элина',
  'Ярослав',
  'Елизавета',
  'Николай',
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTION = [
  'nature',
  'mood',
  'animal',
  'people',
  'world',
  'travel',
  'family',
  'my life',
];
/**
*Функция выбора рандомного элемента массива
*@param {Array} - исходный массив
*@return {*} - случайный элемент массива
*/
function getRandomArrayElement(elements) {
  return elements[getRndInteger(0, elements.length - 1)];
}
const getUniqueNumber = (() => {
  let i = 1;
  return () => i++;
})();
/**
*Функция создания объекта комментария
*@return {int} id - уникальный номер комментария
*@return {string} avatar - ссылка на аватар комментирующего
*@return {string} message - рандомный элемент массива-текст комментария
*@return {string} name - имя комментирующего
*/
function createComments() {
  return ({
    id: getUniqueNumber(),
    avatar: `img/avatar-${getRndInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
  });
}
/**
*Функция создания объекта описания фото
*@return {int} id - уникальный номер описания фото
*@return {string} url - ссылка на фото
*@return {string} description - рандомный элемент массива-описание фото
*@return {int} likes - колличество лайков
*@return {Array} comments - комментарий
*/
function createPhotoObject () {
  return ({
    id: getUniqueNumber(),
    url: `photos/${getRndInteger(1,25)}.jpg`,
    description: 'getRandomArrayElement(DESCRIPTION)',
    likes: getRndInteger(15, 200),
    comments: Array.from({length:2}, createComments),
  });
}
const createPhotoObjects = Array.from({length:25}, createPhotoObject);
