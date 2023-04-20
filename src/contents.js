import { getWeatherData, getForecastData } from './functions/weatherAPI';

const renderContents = (city, units) => {
  const contents = document.createElement('div');
  contents.classList.add('contents');

  const location = document.createElement('div');
  location.classList.add('location');
  getWeatherData(city).then((data) => { location.textContent = `${data.location.name}, ${data.location.country}`; });

  // CURRENT WEATHER ELEMENT
  const currentWeather = document.createElement('div');
  currentWeather.classList.add('current-weather');

  const temperature = document.createElement('div');
  temperature.classList.add('temp-now');
  if (units === 'c') {
    getWeatherData(city).then((data) => { temperature.textContent = `${Math.round(data.current.temp_c)}°C`; });
  } else if (units === 'f') {
    getWeatherData(city).then((data) => { temperature.textContent = `${Math.round(data.current.temp_f)}°F`; });
  }

  const condition = document.createElement('div');
  condition.classList.add('codition');
  getWeatherData(city).then((data) => { condition.textContent = data.current.condition.text; });

  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('weather-icon');
  getWeatherData(city).then((data) => { weatherIcon.src = data.current.condition.icon; });

  currentWeather.appendChild(temperature);
  currentWeather.appendChild(condition);
  currentWeather.appendChild(weatherIcon);

  // WEEKLY WEATHER ELEMENT
  const forecastWeek = document.createElement('div');
  forecastWeek.classList.add('forecast-week');

  getForecastData(city).then((data) => {
    data.forecast.forecastday.forEach((day) => {
      const weatherRow = document.createElement('div');
      weatherRow.classList.add('weather-row');

      const date = new Date(day.date);
      const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      weatherRow.appendChild(Object.assign(
        document.createElement('div'),
        { textContent: weekday[date.getDay()] },
      ));
      weatherRow.appendChild(Object.assign(
        document.createElement('div'),
        { textContent: ` 💧 ${day.day.daily_chance_of_rain}%`, classList: 'rain-chance' },
      ));
      weatherRow.appendChild(Object.assign(
        document.createElement('img'),
        { src: day.day.condition.icon, classList: 'row-weather-icon' },
      ));
      if (units === 'c') {
        weatherRow.appendChild(Object.assign(
          document.createElement('div'),
          { textContent: `High: ${Math.round(day.day.maxtemp_c)}° Low: ${Math.round(day.day.mintemp_c)}°` },
        ));
      } else if (units === 'f') {
        weatherRow.appendChild(Object.assign(
          document.createElement('div'),
          { textContent: `High: ${Math.round(day.day.maxtemp_f)}° Low: ${Math.round(day.day.mintemp_f)}°` },
        ));
      }

      forecastWeek.appendChild(weatherRow);
    });
  });

  contents.appendChild(location);
  contents.appendChild(currentWeather);
  contents.appendChild(forecastWeek);

  return contents;
};

export default renderContents;
