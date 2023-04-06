import getWeatherData from './functions/weatherAPI';

const renderContents = (city) => {
  const contents = document.createElement('div');
  contents.classList.add('contents');

  const location = document.createElement('div');
  location.classList.add('location');
  getWeatherData(city).then((data) => { location.textContent = `${data.location.name}, ${data.location.country}`; });

  const temperature = document.createElement('div');
  temperature.classList.add('temp-now');
  getWeatherData(city).then((data) => { temperature.textContent = `${data.current.temp_c}°C`; });

  contents.appendChild(location);
  contents.appendChild(temperature);

  return contents;
};

export default renderContents;
