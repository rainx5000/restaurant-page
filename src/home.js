import {home as homeData} from './data';

function loadHome() {
  const content = document.querySelector("#content");
  const homeContainer = document.createElement('main');
  const storeName = document.createElement('h1');
  const storeImg = document.createElement('img');
  const storeDisc = document.createElement('p');
  storeName.textContent = homeData.title;
  storeImg.src = homeData.img;
  storeImg.alt = "First location that opened";
  storeDisc.textContent = homeData.description;
  content.append(homeContainer);
  homeContainer.append(storeName, storeImg, storeDisc);
  homeContainer.classList.add('home');
  
}

export {loadHome};