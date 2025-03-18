export default function setupEventListeners() {
  const itemsGrid = document.querySelector(".items-grid");

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
      item.remove();
    }
  });
}
