import {home as homeData} from './data';

function loadHome() {
  const content = document.querySelector("#content");
  const homeContainer = document.createElement('main');
  const storeName = document.createElement('h1');
  const storeDisc = document.createElement('p');
  storeName.textContent = homeData.title;
  storeDisc.textContent = homeData.description;
  content.append(homeContainer);
  homeContainer.append(storeName, storeDisc);
  homeContainer.classList.add('home');
  
}

export {loadHome};