function loadContact() {
  const content = document.querySelector("#content");
  const contactContainer = document.createElement('main');

  const title = document.createElement('h2');
  const email = document.createElement('p');
  const phone = document.createElement('p');

  title.textContent = "Contact Us";
  email.textContent = "Email: customer@thespot.com"
  phone.textContent = "Phone: 413-445-7688";

  contactContainer.append(title, email, phone)
  content.append(contactContainer);
}

export {loadContact};