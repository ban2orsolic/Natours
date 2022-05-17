import { version, release } from '../package.json'; // čitanje broja verzije iz package.json

console.log('hello!', version);

// set version number on page
const verEl = document.querySelector('.ver');
verEl.textContent = version;

// set release date on page
const relEl = document.querySelector('.release-date');
relEl.textContent = release;

// set current year on page
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

// potrebno za development kada se koristi Parcel da bi se stranica ispravno refreshala
if (module.hot) {
  module.hot.accept();
}

//Unfortunately, you cannot target the parent of a CSS element (not currently, but there is some talk of a new feature to be added to the spec that will allow you to do this).  To close the navbar on click of a link, you can always use some simple Javascript ...

//First, we would need to add handlers to each of the link elements, so that when clicked, we uncheck the checkbox (navigation__checkbox ) and effectively close the navigation.  Here is the code to get you going:

// cache DOM
const navigation = document.querySelector('.navigation');
const navCheckbox = navigation.querySelector('.navigation__checkbox');
const navItems = navigation.querySelectorAll('.navigation__item');
navItems.forEach(item =>
  item.addEventListener('click', _ => (navCheckbox.checked = false))
);
