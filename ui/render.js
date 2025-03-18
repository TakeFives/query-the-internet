import {
  loadAllCountries,
  loadAllEuropeCountries,
} from "../services/api/fetch.js";

import Main from "./components/common/main.js";
import Wrapper from "./components/globals/wrapper.js";
import Header from "./components/common/header.js";
import Hero from "./components/common/hero.js";
import ItemsGrid from "./components/fetures/items-grid.js";
import setupEventListeners from "./events.js";

// const countries = await loadAllCountries();
const countriesOfEurope = await loadAllEuropeCountries();

export default async function renderDom() {
  const app = document.createElement("div");
  const main = Main();
  const wrapper = Wrapper();

  app.className = "app";

  app.appendChild(Header());

  main.appendChild(Hero());

  if (countriesOfEurope.length === 0) {
    const message = document.createElement("p");
    message.className = "message info__message";
    message.textContent = "Nothing to show";
    wrapper.appendChild(message);
  } else {
    wrapper.appendChild(ItemsGrid(countriesOfEurope));
  }
  main.appendChild(wrapper);
  app.appendChild(main);

  document.body.appendChild(app);

  setupEventListeners();
}
