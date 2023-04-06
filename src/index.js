import './style.css';
import renderContents from './contents';
import renderHeader from './header';

const body = document.querySelector('body');

let city = 'Toronto';

body.appendChild(renderHeader());
body.appendChild(renderContents(city));

const searchForm = document.querySelector('.header-right');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  city = e.target.lastChild.value;
  body.replaceChild(renderContents(city), body.lastChild);
});
