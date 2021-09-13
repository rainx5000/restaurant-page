import {loadHome} from './home.js';
import {loadMenu} from './menu';
import {loadContact} from './contact';

function loadHeader() {
  const content = document.querySelector('#content');

  const navContainer = document.createElement("nav");
  const navigationList = document.createElement("ul");
  const navHome = document.createElement('li');
  const navMenu = document.createElement('li');
  const navContact = document.createElement('li');
  
  navigationList.classList.add("navigation-list");
  content.prepend(navContainer);
  navContainer.append(navigationList);

  navHome.textContent = "Home";
  navHome.classList.add('nav-home');
  navMenu.textContent = "Menu";
  navMenu.classList.add('nav-menu');
  navContact.textContent = "Contact";
  navContact.classList.add("nav-contact");
  
  navigationList.append(navHome, navMenu, navContact);
}

function initialLoad() {
  loadHeader();
  loadHome();
  tabHandler();
  isActive(document.querySelector('.nav-home'));
}

function clearContent () {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
}

function tabHandler () {
  const nav = document.querySelector('.navigation-list');
  nav.addEventListener('click', (e) => {
    const tab = e.target.textContent.toLowerCase();
    loadPage(tab);
    isActive(e.target);
  })
}

function loadPage(tab) {
  clearContent();
  switch(tab) {
    case 'menu':
      loadMenu();
      break;
    case 'home':
      loadHome();
      break;
    case 'contact':
      loadContact();
      break;
  }
}

function isActive(tabElement) {
  const nav = document.querySelector('.navigation-list');
  Array.from(nav.children).forEach(tab => tab.classList.remove('active'));
  tabElement.classList.add('active');
}

initialLoad()