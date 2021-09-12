function loadHeader() {
  const page = document.querySelector('body');

  const navContainer = document.createElement("nav");
  const navigationList = document.createElement("ul");
  const navHome = document.createElement('li');
  const navMenu = document.createElement('li');
  const navContact = document.createElement('li');
  
  navigationList.classList.add("navigation-list");
  page.prepend(navContainer);
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
  // loadHome();
}

initialLoad()