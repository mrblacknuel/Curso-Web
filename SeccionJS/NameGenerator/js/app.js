let panelNombres = document.getElementById("resultado");
let generarBtn = document.querySelector(".button-primary[value='Generar']");
generarBtn.addEventListener("click", generarNombres);

function generarNombres() {
    const origen = document.getElementById("origen").value;
    const genero = document.getElementById("genero").value;
    const numero = document.getElementById("numero").value;
    let url = `https://randomuser.me/api/?inc=name&results=${numero}`;

    if (origen != "") {
        url += `&nat=${origen}`;
    }

    if (genero != "") {
        url += `&gender=${genero}`;
    }

    // Conexión con el API
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            let personas = JSON.parse(this.response).results.map((c) => c.name);

            let htmlNombres = '<label for="resultado">Nombres generados:</label>';
            htmlNombres += '<ul class="lista">';

            // Imprimir cada nombre
            personas.forEach(function (nombre) {
                htmlNombres += `
                                  <li>${nombre.first} ${nombre.last}</li>
                        `;
            })

            htmlNombres += '</ul>';
            panelNombres.innerHTML = htmlNombres;
        }
    };
    xhr.send();
}