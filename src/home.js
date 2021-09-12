function loadHome() {
  const content = document.querySelector("#content");
  const homeContainer = document.createElement('main');
  const test = document.createElement('p');
  test.textContent = 'This is home';
  content.append(homeContainer);
  homeContainer.append(test);
  
}

export {loadHome};