export default function Hero (){
    const hero = document.createElement('section');
    hero.className = 'hero section';
    const h1 = document.createElement('h1');
    h1.textContent = 'Query the Internet';
    hero.appendChild(h1);
    return hero;
}
