let beersArray = [];

document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, assignBeerData);
});

const assignBeerData = function() {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  beersArray = beers;

  const button = document.querySelector('#displayButton');
  button.addEventListener('click', () => {
    populateList(beersArray);
  });
}

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}

const populateList = function(beers){
  // console.log(countries);
  const ul = document.querySelector('#beer-list')

  beers.forEach((beer) => {
    const li = document.createElement('li');
    li.textContent = beer.name;
    ul.appendChild(li);
    const image = document.createElement('img');
    image.width = 200;
    image.src = beer.image_url;
    ul.appendChild(image);
  });
}
