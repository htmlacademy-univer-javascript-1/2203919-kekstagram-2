const miniatureTemplate = document.querySelector('#picture').content;
const miniatureList = document.querySelector('.pictures');
const miniatureListFragment = document.createDocumentFragment();
function renderMiniature (miniature) {
  miniature.forEach(({url, description, likes, comments}) => {
    const miniatureElement = miniatureTemplate.cloneNode(true);
    const miniatureLikes = miniatureElement.querySelector('.picture__likes');
    const miniatureImg = miniatureElement.querySelector('.picture__img');
    const miniatureInfo = miniatureElement.querySelector('.picture__info');
    const miniatureComments = miniatureElement.querySelector('.picture__comments');

    miniatureLikes.textContent=likes;
    miniatureImg.src=url;
    miniatureInfo.textContent=description;
    miniatureComments.textContent=comments;

    miniatureListFragment.append(miniatureElement);
  });
  miniatureList.append(miniatureListFragment);
}
export {renderMiniature};
