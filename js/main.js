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


const getRandomArrayElement = (elements) => elements[getRndInteger(0, elements.length - 1)];

/**
*Функция создания объекта описания фото
*@param {int} id – проверяемая строка
*/
const createPhotoObjeck = () => ({
  id: 'getRndInteger(1,25)',
  url: 'photos/'+getRndInteger(1, 25)+'.jpg',
  description: 'getRandomArrayElement(DESCRIPTION)',
  likes: 'getRndInteger(15,200)',
  comments: '',
});
