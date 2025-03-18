import { loadAllCountries, loadAllEuropeCountries }from "../services/api/fetch.js";

import Main from "./components/common/main.js";
import Header from "./components/common/header.js";
import Hero from "./components/common/hero.js";
import ItemsGrid from "./components/fetures/items-grid.js";

export default async function renderDom() {
    const app = document.createElement('div');
    const main = Main();
    
    app.className = 'app';
    
    app.appendChild(Header());

    main.appendChild(Hero());
    
    // const countries = await loadAllCountries();
    const countriesOfEurope = await loadAllEuropeCountries();
    main.appendChild(ItemsGrid(countriesOfEurope));

    app.appendChild(main);

    document.body.appendChild(app);
}
