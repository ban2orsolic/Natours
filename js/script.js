import { version } from '../package.json'; // čitanje broja verzije iz package.json
console.log('hello!', version);

// set version number on page
const verEl = document.querySelector('.ver');
verEl.textContent = version;

// set current year on page
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

// potrebno za development kada se koristi Parcel da bi se stranica ispravno refreshala
if (module.hot) {
  module.hot.accept();
}
