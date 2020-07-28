const hbs = require("hbs");

hbs.registerHelper("getAnyo", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("capitalizar", (texto) => {
  let palabras = texto.split(" ");
  palabras.forEach(
    (p, i) =>
      (palabras[i] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
  );

  return palabras.join(" ");
});
