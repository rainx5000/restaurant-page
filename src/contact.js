function loadContact() {
  const content = document.querySelector("#content");
  const contactContainer = document.createElement('main');
  const test = document.createElement('p');
  test.textContent = 'This is contact';
  content.append(contactContainer);
  contactContainer.append(test);
  
}

export {loadContact};