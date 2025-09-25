
function loadAlbums() {
  const year = document.getElementById("year-select").value;
  fetch(`data/${year}.json`)
    .then(response => response.json())
    .then(albums => {
      const container = document.getElementById("albums-container");
      container.innerHTML = "";
      albums.forEach(album => {
        const div = document.createElement("div");
        div.className = "album";
        const img = document.createElement("img");
        img.src = `https://coverartarchive.org/release/${album.mbid}/front`;
        img.alt = album.title;
        const title = document.createElement("p");
        title.textContent = album.title;
        div.appendChild(img);
        div.appendChild(title);
        container.appendChild(div);
      });
    });
}
window.onload = loadAlbums;
