export default function Hero() {
  const hero = document.createElement("section");
  hero.className = "hero section";

  const mainHeading = document.createElement("h1");
  const mainHeadingParagraph = document.createElement("p");
  mainHeading.textContent = "Query The Internet";
  mainHeadingParagraph.textContent =
    "Here we are fetching the list of Countries from the https://restcountries.com/ API";
  mainHeading.className = "hero__heading";
  mainHeadingParagraph.className = "hero__paragraph";

  hero.appendChild(mainHeading);
  hero.appendChild(mainHeadingParagraph);

  return hero;
}
