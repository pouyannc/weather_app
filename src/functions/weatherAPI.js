const getWeatherData = async (city) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3e8fd074dfaa4317a44203434232703&q=${city}`);
  const responseJSON = await response.json();
  return responseJSON;
};

export default getWeatherData;
