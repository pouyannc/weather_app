import searchIcon from './images/search (1).png';

const renderHeader = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  const headerLeft = document.createElement('div');

  const headerRight = document.createElement('form');
  headerRight.classList.add('header-right');
  headerRight.appendChild(Object.assign(
    document.createElement('img'),
    { for: 'search', id: 'search-icon', src: searchIcon },
  ));
  headerRight.appendChild(Object.assign(
    document.createElement('input'),
    {
      type: 'text',
      name: 'search',
      placeholder: 'Enter a City',
      required: true,
    },
  ));

  header.appendChild(headerLeft);
  header.appendChild(headerRight);
  return header;
};

export default renderHeader;
