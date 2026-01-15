import { photoCardHTML } from "./PhotoCard.js";

export function renderGallery(container, photos) {
  container.innerHTML = photos.map(photoCardHTML).join("");
}
