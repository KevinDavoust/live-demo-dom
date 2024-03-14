export let container = document.getElementById("cards");

export function createCard(house) {
  // This function should create a card item
  const card = document.createElement("div");
  card.classList.add("card");
  container.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  if (house.img) {
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = house.img;
    cardHeader.appendChild(img);
  }

  const cardBody = createAnElement("div", card, "card-body");

  const cardTitle = createAnElement("h2", cardBody, "card-title");
  cardTitle.innerText = house.name;

  const cardDesc = document.createElement("p");
  cardDesc.classList.add("card-description");
  cardDesc.innerText = house.desc;
  cardBody.appendChild(cardDesc);

  const button = document.createElement("button");
  button.classList.add("card-button");
  button.type = "button";
  button.innerText = "I want it!";
  cardBody.appendChild(button);
}

function createAnElement(tag, parent, classname = null) {
  const element = document.createElement(tag);
  element.classList.add(classname);
  parent.appendChild(element);
  return element;
}

/* export function createCardFactorized(houses) {
  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];

    const card = createAnElement("article", container, "card");

    const cardHeader = createAnElement("div", card, "card-header");

    const img = createAnElement("img", cardHeader, "card-img");
    img.src = house.img;

    const cardBody = createAnElement("div", card, "card-body");

    const title = createAnElement("h2", cardBody, "card-title");
    title.innerText = house.name;

    const description = createAnElement("p", cardBody, "card-description");
    description.innerText = house.desc;

    const button = createAnElement("button", cardBody, "card-button");
    button.type = "button";
    button.innerText = "I want it!";
  }
} */
