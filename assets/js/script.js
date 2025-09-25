
function loadAlbums() {
    const year = document.getElementById("yearSelect").value;
    fetch(`data/${year}.json`)
        .then(response => response.json())
        .then(albums => {
            const container = document.getElementById("albumsContainer");
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
