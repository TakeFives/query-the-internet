export default function ItemsGrid (items) {
    const grid = document.createElement('section');
    grid.className = 'items-grid section';

    items.forEach(item => {
        const card = itemCard(item);
        grid.appendChild(card);
    }
    );

    return grid;
}

function itemCard (item) {
    const card = document.createElement('div');
    card.className = 'item-card';

    const title = document.createElement('h2');
    title.textContent = item.name.common;
    card.appendChild(title);

    return card;
}

