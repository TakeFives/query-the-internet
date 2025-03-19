import { RemoveButton } from "../globals/buttons.js";

export default function ItemsGrid(items) {

 if (items.length === 0) {
    const message = document.createElement("p");
    message.className = "message info__message";
    message.textContent = "Nothing to show";
    return message;
  }

  const grid = document.createElement("section");
  grid.className = "items-grid section";

  items.forEach((item) => {
    const card = itemCard(item);
    grid.appendChild(card);
  });

  return grid;
}

function itemCard(item) {
  const itemName = item.name.common;
  const ItemCapital = item.capital[0];

  const removeBtn = RemoveButton(itemName);

  const card = document.createElement("div");
  card.className = "item-card";
  card.dataset.nameId = itemName;

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = itemName;

  const cardParagraph = document.createElement("p");
  cardParagraph.textContent = `The capital of ${itemName} is ${ItemCapital}`;

  card.appendChild(cardTitle);
  card.appendChild(cardParagraph);
  card.appendChild(removeBtn);

  return card;
}
