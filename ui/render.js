import { europeanCountries } from "../services/data/countries.js"

import Main from "./components/common/main.js";
import Wrapper from "./components/globals/wrapper.js";
import Header from "./components/common/header.js";
import Hero from "./components/common/hero.js";
import ItemsGrid from "./components/fetures/items-grid.js";
import Form from "./components/fetures/form.js";

import {setupEventListeners, setupFormSubmit} from "./events.js";

export default function renderDom() {

  const app = document.createElement("div");

  const main = Main();
  const wrapper = Wrapper();
  const itemsToRender = ItemsGrid(europeanCountries);
  const form = Form();

  app.className = "app";

  app.appendChild(Header());
  main.appendChild(Hero());
  
  wrapper.appendChild(itemsToRender);
  wrapper.appendChild(form);

  main.appendChild(wrapper);
  app.appendChild(main);

  document.body.appendChild(app);

  setupEventListeners(itemsToRender);
  setupFormSubmit(itemsToRender);
}
