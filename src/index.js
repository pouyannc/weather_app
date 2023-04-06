import './style.css';
import renderContents from './contents';
import renderHeader from './header';

const container = document.querySelector('.container');

let city = 'Toronto';

const footer = document.createElement('div');
footer.classList.add('footer');

container.appendChild(renderHeader());
container.appendChild(renderContents(city));
container.appendChild(footer);

const searchForm = document.querySelector('.header-right');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  city = e.target.lastChild.value;
  container.replaceChild(renderContents(city), container.lastChild);
});
