// Assignment: Project 4
// Author: Peter Brummel (online section)

const renderGiphy = giphy => {
    const img = document.createElement("img")
    img.src = giphy.images.downsized.url;
    img.setAttribute("class", "flex-wrap");
    document.querySelector("#giphyOutput").appendChild(img);
}

async function fetchResults(url) {
  await fetch(url)
    .then(response => response.json())
    .then(({ data }) => data.map(renderGiphy))
    .then(urlResults => console.log(urlResults))
    .catch(err => {
      console.error(err);
    });
}

const init = () => {
    document.querySelector("#search").addEventListener('click', () => {
        document.querySelector("#giphyOutput").innerHTML = "";
        let input = document.querySelector("#input").value;
        console.log(input);
        let url = `http://api.giphy.com/v1/gifs/search?q=${input}&limit=10&api_key=KbRF3CDN3nJFjyYFl0PYZ1Twwwm0c2yk`;
        fetchResults(url);
    });

    document.querySelector("#clear").addEventListener('click', () => {
        document.querySelector("#giphyOutput").innerHTML = "";
        document.querySelector("#input").value = "";
    })
}

window.addEventListener('load', init);
// safe from here
