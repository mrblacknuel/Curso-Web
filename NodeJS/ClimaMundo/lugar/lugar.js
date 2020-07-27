const axios = require("axios");

// Devuelve las coordenadas del lugar. Devuelve (0, 0) si no lo logra encontrar.
getCoordenadas = async (lugar) => {
  let res = await axios.get(`https://geocode.xyz/${encodeURI(lugar)}?json=1`);

  return res.data;
};

module.exports = {
  getCoordenadas,
};
