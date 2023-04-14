import searchIcon from './images/search (1).png';

const renderHeader = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  const headerLeft = document.createElement('div');
  const headerRight = document.createElement('div');
  headerRight.classList.add('header-right');

  const searchForm = document.createElement('form');
  searchForm.classList.add('search-form');
  searchForm.appendChild(Object.assign(
    document.createElement('img'),
    { for: 'search', id: 'search-icon', src: searchIcon },
  ));
  searchForm.appendChild(Object.assign(
    document.createElement('input'),
    {
      type: 'text',
      name: 'search',
      placeholder: 'Enter a City',
      required: true,
    },
  ));

  const unitSwitch = document.createElement('div');
  unitSwitch.classList.add('unit-switch');
  unitSwitch.appendChild(Object.assign(document.createElement('div'), { textContent: '°C' }));
  unitSwitch.appendChild(Object.assign(document.createElement('div'), { textContent: '°F' }));

  headerRight.appendChild(searchForm);
  headerRight.appendChild(unitSwitch);

  header.appendChild(headerLeft);
  header.appendChild(headerRight);
  return header;
};

export default renderHeader;
