const API_KEY = 'TW8IRNPbb5h7mc4WKaRhcEnt5UIlekPO';
const app = document.querySelector("#app");
const search = document.querySelector('#search');
const grid = document.querySelector('.grid');

function removeAllImages() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

async function getResult() {
    try {
        removeAllImages();
        const searchQuery = search.value;
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=9&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
                            { 
                                mode: "cors",
                            }
                        );
        let data = await response.json();
        // console.log(data);
        data.data.forEach((gif) => {
            const gridItem = document.createElement('div');
            const img = document.createElement("img");
            img.src = gif.images.original.url;
            gridItem.classList.add('grid-item');
            gridItem.append(img);
            grid.appendChild(gridItem);
        });
    }
    catch(error) {
        console.error('Error: ', error.message);
    }
}

search.addEventListener('search', getResult);
