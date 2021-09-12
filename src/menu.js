function loadMenu() {
  const content = document.querySelector("#content");
  const menuContainer = document.createElement('main');
  const test = document.createElement('p');
  test.textContent = 'This is menu';
  content.append(menuContainer);
  menuContainer.append(test);
}

export {loadMenu}