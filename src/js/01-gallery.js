// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
const galleryEl = galleryItems
  .map(
    ({ preview, original, description}) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryEl);

let lightbox = new SimpleLightbox('.gallery a', { 
    fadeSpeed:800,
    captionsData: 'alt',
    signmentPosition: 'bottom',
    signmentDelay: 250
});
