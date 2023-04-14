const getWeatherData = async (city) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=20630273159d48e4a09192602231204&q=${city}`);
  const responseJSON = await response.json();
  return responseJSON;
};

const getForecastData = async (city) => {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=20630273159d48e4a09192602231204&q=${city}&days=3`);
  const responseJSON = await response.json();
  return responseJSON;
};

export { getWeatherData, getForecastData };
