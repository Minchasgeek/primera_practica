import "./styles/style.css";
import "./styles/masonry.css";

import { renderHeader } from "./components/Header.js";
import { renderGallery } from "./components/Gallery.js";
import { renderLoader } from "./components/Loader.js";
import { renderError } from "./components/ErrorMsg.js";

import { listPhotos, searchPhotos } from "./services/unsplash.js";

// 1) Pillamos los contenedores del HTML
const headerEl = document.querySelector("#header");
const titleEl = document.querySelector("#title");
const statusEl = document.querySelector("#status");
const galleryEl = document.querySelector("#gallery");

// 2) Guardamos la “primera petición” para el reset
let initialPhotos = null;

// Helpers para cambiar texto/estado
function setTitle(text) {
  titleEl.textContent = text;
}

function clearStatus() {
  statusEl.innerHTML = "";
}

function showPhotos(photos) {
  renderGallery(galleryEl, photos);
}

// 3) Carga inicial
async function loadInitial() {
  try {
    renderLoader(statusEl);

    const data = await listPhotos({ page: 1, perPage: 30 });

    initialPhotos = data; // ✅ guardamos la primera petición
    setTitle("Editorial");
    clearStatus();
    showPhotos(data);
  } catch (e) {
    renderError(statusEl, e.message || "Error cargando inicio");
  }
}

// 4) Buscar
async function doSearch(query) {
  try {
    renderLoader(statusEl);

    const data = await searchPhotos({ query, page: 1, perPage: 30 });

    setTitle(`Resultados: "${query}"`);
    clearStatus();
    showPhotos(data.results);
  } catch (e) {
    renderError(statusEl, e.message || "Error buscando");
  }
}

// 5) Reset
function resetToInitial() {
  if (initialPhotos) {
    setTitle("Editorial");
    clearStatus();
    showPhotos(initialPhotos); // ✅ vuelve al estado inicial
  }
}

// 6) Pintar header y conectar eventos
renderHeader(headerEl, {
  onSearch: doSearch,
  onReset: resetToInitial,
});

// 7) Arrancar la app cargando el inicio
loadInitial();
