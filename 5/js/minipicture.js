import {createPhotoObjects} from './data';
const miniatureTemplate = document.querySelector('#picture').content;
const miniatureList = document.querySelector('.picture');
const miniatureObjects = createPhotoObjects ();
const miniatureListFragment = document.createDocumentFragment();
miniatureObjects.forEach(({url, description, likes, comments}) => {
  const miniatureElement = miniatureTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__info').textContent = description;
  miniatureElement.querySelector('.picture__comments').textContent = comments;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniatureListFragment.appendChild(miniatureElement);
});
miniatureList.appendChild(miniatureListFragment);
