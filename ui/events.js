export default function setupEventListeners() {
  const itemsGrid = document.querySelector(".items-grid");

  if(!itemsGrid) return

  itemsGrid.addEventListener("click", (event) => {
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
      const items = Array.from(itemsGrid.querySelectorAll(".item-card"));
      console.log(items)
      const itemIndex = items.findIndex((el) => el.dataset.nameId === itemId);

      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        itemsGrid.innerHTML = "";
        items.forEach((el) => itemsGrid.appendChild(el));
      }

    }
  });
}


