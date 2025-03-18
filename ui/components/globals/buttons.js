export function RemoveButton(itemId) {
  const btn = document.createElement("button");

  btn.className = "btn btn__remove";

  btn.type = "button";
  btn.id = "remove-button";
  btn.setAttribute("aria-label", "Remove item");
  btn.setAttribute("title", "Click to remove");
  btn.setAttribute("data-item-id", itemId);

  btn.textContent = "x";

  return btn;
}
