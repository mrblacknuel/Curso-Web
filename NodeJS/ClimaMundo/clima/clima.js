const axios = require("axios");
const APP_ID = "4db2ea8f34ae646838d37c0135392eda";

printClima = async (longitud, latitud) => {
  let resp = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${APP_ID}&lang=es&units=metric`
  );

  return resp.data;
};

module.exports = {
  printClima,
};
