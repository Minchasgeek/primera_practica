export function renderHeader(container, { onSearch, onReset }) {
  container.innerHTML = `
    <div class="header">
      <button class="logo" aria-label="Volver al inicio">● PinterestCloneByPeter</button>

      <form class="search">
        <input class="search-input" placeholder="Buscar imágenes..." aria-label="Buscar" />
        <button type="submit">Buscar</button>
      </form>
    </div>
  `;

  const logoBtn = container.querySelector(".logo");
  const form = container.querySelector(".search");
  const input = container.querySelector(".search-input");

  //  volver al estado inicial
  logoBtn.addEventListener("click", () => onReset());

  //  buscar + limpiar input
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;

    onSearch(q);
    input.value = ""; // requisito: limpiar input
  });
}
