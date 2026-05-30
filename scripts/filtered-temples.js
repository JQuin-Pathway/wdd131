const mainnav = document.querySelector('.hamburger');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona",
    dedicated: "2014, March, 2",
    area: 85326,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-lds-temple-1172166-wallpaper.jpg"
  },
  {
  templeName: "Rexbug Idaho",
  location: "Rexburg, Idaho",
  dedicated: "2008, February, 10",
  area: 57504,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-775365-wallpaper.jpg",
  },
   {
  templeName: "Kyiv Ukraine",
  location: "Kyivs'ka Oblast, Ukraine",
  dedicated: "2010, August, 29",
  area: 22184,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/400x250/kyiv-ukraine-lds-temple-1129616-wallpaper.jpg",
  }
]

createTempleCard(temples);

const oldLink = document.querySelector(".old");
const newLink = document.querySelector(".new");
const largeLink = document.querySelector(".large");
const smallLink = document.querySelector(".small");

oldLink.addEventListener("click", () => {
  const sortedTemples = [...temples].sort((a, b) => {
    const yearA = parseInt(a.dedicated.split(",")[0]);
    const yearB = parseInt(b.dedicated.split(",")[0]);
    return yearA - yearB;
  });
  createTempleCard(sortedTemples);
});

newLink.addEventListener("click", () => {
  const sorted = [...temples].sort((a, b) => {
    const yearA = parseInt(a.dedicated.split(","));
    const yearB = parseInt(b.dedicated.split(","));
    return yearB - yearA;
  });
  createTempleCard(sorted);
});

largeLink.addEventListener("click", () => {
  const sorted = [...temples].sort((a, b) => {
    return b.area - a.area;
  });
  createTempleCard(sorted);
});

smallLink.addEventListener("click", () => {
  const sorted = [...temples].sort((a, b) => {
    return a.area - b.area;
  });
  createTempleCard(sorted);
});

function createTempleCard(templesList) {
  const container = document.querySelector(".temple");
  container.innerHTML = "";
  
  templesList.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");
  
    name.textContent = temple.templeName;
    
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}