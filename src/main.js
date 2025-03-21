import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { createCardsMarkup } from './js/render-functions';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchForm: document.querySelector('.js-search-from'),
  gallery: document.querySelector('.gallery'),
  notFoundText: document.querySelector('.js-not-found-text'),
};

import { getImages } from './js/pixabay-api';

refs.searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.elements.query.value.trim();
  getImages(query)
    .then(photos => {
      if (!photos.total) {
        refs.gallery.innerHTML = '';
        iziToast.error({
          message: `No results for query <span>${query}</span>`,
          position: 'topRight',
        });
        return;
      }

      refs.gallery.innerHTML = createCardsMarkup(photos.hits);
      new SimpleLightbox('.gallery_link');
    })
    .catch(error => console.log(error));
});
