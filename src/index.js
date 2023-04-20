import './style.css';
import renderContents from './contents';
import renderHeader from './header';

const container = document.querySelector('.container');

let city = 'Toronto';
let units = 'c';

const footer = document.createElement('div');
footer.classList.add('footer');

container.appendChild(renderHeader());
container.appendChild(renderContents(city, units));
container.appendChild(footer);

const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  city = e.target.lastChild.value;
  container.replaceChild(renderContents(city, units), container.childNodes[1]);
});

const unitSwitch = document.querySelector('.unit-switch');
unitSwitch.firstChild.addEventListener('click', () => {
  units = 'c';
  container.replaceChild(renderContents(city, units), container.childNodes[1]);
  unitSwitch.firstChild.classList.add('unit-bordered');
  unitSwitch.lastChild.classList.remove('unit-bordered');
});
unitSwitch.lastChild.addEventListener('click', () => {
  units = 'f';
  container.replaceChild(renderContents(city, units), container.childNodes[1]);
  unitSwitch.firstChild.classList.remove('unit-bordered');
  unitSwitch.lastChild.classList.add('unit-bordered');
});
