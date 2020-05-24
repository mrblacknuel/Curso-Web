let panelNombres = document.getElementById("resultado");
let generarBtn = document.querySelector(".button-primary[value='Generar']");
generarBtn.addEventListener("click", generarNombres);

function generarNombres() {
    const origen = document.getElementById("origen").value;
    const genero = document.getElementById("genero").value;
    const numero = document.getElementById("numero").value;

    /*if (origen == "" || genero == "" || numero == "") {
        alert("Rellene todos los campos para poder generar el nombre");
        return;
    }*/

    // Conexión con el API
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `//api.name-fake.com/random/random`, true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "null");
    xhr.onreadystatechange = () => {
        if (this.status === 200) {
            console.log("Correcto");
        } else {
            console.log("Incorrecto");
        }
    };
    xhr.send();
}