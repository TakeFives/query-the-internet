import { queryRenderedItems } from "../services/utils/query-items.js"

export function setupEventListeners(renderedItems) {

  if (!renderedItems) return;

  renderedItems.addEventListener("click", (event) => {
    const isRemoveBtn = event.target.classList.contains("btn__remove");

    if (!isRemoveBtn) {
      return;
    }
    const item = event.target.closest(".item-card");
    if (!item) {
      return;
    }
    const itemId = item.getAttribute("data-name-id");
    const buttonId = event.target.getAttribute("data-item-id");

    if (itemId === buttonId) {
      // item.remove();
      const items = Array.from(renderedItems.querySelectorAll(".item-card"));
      const itemIndex = items.findIndex((el) => el.dataset.nameId === itemId);

      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        renderedItems.innerHTML = "";
        items.forEach((el) => renderedItems.appendChild(el));
      }
    }
  });
}

export function setupFormSubmit(renderedItems) {
  const form = document.querySelector(".user-form");
  const submitter = document.querySelector("button[type=submit]");
  
  if (!form) return; 

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const formData = new FormData(form); 
    const userData = Object.fromEntries(formData.entries());

    const items = Array.from(renderedItems.querySelectorAll(".item-card"));
    const queriedItems = queryRenderedItems(items, [userData['number-of-items'], userData['filter-name']]);
    
    renderedItems.innerHTML = "";
    queriedItems.forEach((el) => renderedItems.appendChild(el));
  });

}
