export function renderError(container, message) {
  container.innerHTML = `<div class="status error">⚠ ${message}</div>`;
}
