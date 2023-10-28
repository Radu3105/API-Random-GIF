const API_KEY = 'TW8IRNPbb5h7mc4WKaRhcEnt5UIlekPO';
// const API_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

const app = document.querySelector("#app");
const search = document.querySelector('#search');
const grid = document.querySelector('.grid');

function removeAllImages() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

search.addEventListener('search', () => {
    console.log("Searching for " + search.value);
    removeAllImages();
    const searchQuery = search.value;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=9&offset=0&rating=g&lang=en&bundle=messaging_non_clips`, { mode: "cors" })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            response.data.forEach((gif) => {
                const gridItem = document.createElement('div');
                const img = document.createElement("img");
                img.src = gif.images.original.url;
                gridItem.classList.add('grid-item');
                gridItem.append(img);
                grid.appendChild(gridItem);
            });
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
});


