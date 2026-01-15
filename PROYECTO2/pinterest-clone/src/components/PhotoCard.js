export function photoCardHTML(photo) {
  const utmSource = import.meta.env.VITE_UTM_SOURCE || "fp_daw_pinterest";
  const profileUrl = `${photo.user.links.html}?utm_source=${utmSource}&utm_medium=referral`;
  const unsplashUrl = `https://unsplash.com/?utm_source=${utmSource}&utm_medium=referral`;

  return `
    <article class="card">
      <a href="${photo.links.html}" target="_blank" rel="noreferrer">
        <img
          src="${photo.urls.regular}"
          alt="${photo.alt_description ?? "Foto de Unsplash"}"
          loading="lazy"
        />
      </a>

      <div class="meta">
        <div class="user">
          <img class="avatar" src="${photo.user.profile_image.small}" alt="${photo.user.name}" loading="lazy" />
          <div class="userText">
            <a href="${profileUrl}" target="_blank" rel="noreferrer">${photo.user.name}</a>
            <span class="sub">en <a href="${unsplashUrl}" target="_blank" rel="noreferrer">Unsplash</a></span>
          </div>
        </div>

        <div class="stats">❤ ${photo.likes}</div>
      </div>
    </article>
  `;
}
