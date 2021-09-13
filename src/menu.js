import { menu } from "./data";

function loadMenu() {
  const content = document.querySelector("#content");
  const menuContainer = document.createElement('main');
  content.append(menuContainer);
  menuContainer.classList.add('menu');

  for (let item in menu) {
    const img = menu[item].img;
    const name = menu[item].name;
    const price = menu[item].price;

    const food = MenuItem(img, name, price);
    menuContainer.append(food);
  }
}

const MenuItem = (img, name, price) => {
  const itemContainer = document.createElement('div');

  const ItemImg = document.createElement('img');
  ItemImg.src = img;
  const ItemName = document.createElement('h3');
  ItemName.textContent = name;
  const ItemPrice = document.createElement('p');
  ItemPrice.textContent = price;
  itemContainer.append(ItemImg, ItemName, ItemPrice);

  return itemContainer;
}



export {loadMenu}