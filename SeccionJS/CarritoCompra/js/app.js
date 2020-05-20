const CURSOS = "cursos";
let botonesCarrito = document.querySelectorAll(".agregar-carrito");
botonesCarrito.forEach((c) => c.addEventListener("click", addCarrito));
document.querySelector("#vaciar-carrito").addEventListener("click", clearCarrito)

function addCarrito(item) {
    const itemObj = item.target.parentElement.parentElement;
    const image = itemObj.firstElementChild.src;
    const name = itemObj.getElementsByTagName('h4')[0].innerHTML;
    const cost = itemObj.querySelector(".u-pull-right").innerHTML;

    // Conexión con Local Storage
    addCurso(image, name, cost);

    // Actualización del carrito
    updateCarrito();
}

/**
 * Carga el carrito de la página principal.
 */
(function loadCarrito() {
    let carritoBody = document.querySelector("#lista-carrito").lastElementChild;

    const cursos = getCursos();
    cursos.forEach((c) => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `  <td><img src="${c.imageSrc}"></td>
                                <td>${c.name}</td>
                                <td>${c.cost}</td>
                                <td>X</td>`;
        carritoBody.appendChild(tableRow);
    })
})();

function addCurso(imagen, nombre, coste) {
    let cursos = getCursos();
    const savingObj = {
        'imageSrc': imagen,
        'name': nombre,
        'cost': coste
    }

    cursos.push(savingObj);
    localStorage.setItem(CURSOS, JSON.stringify(cursos));
    return true;
}

/**
 * Devuelve los cursos almacenados en LocalStorage. Devuelve un array vacío si no hay ninguno.
 */
function getCursos() {
    let cursos = JSON.parse(localStorage.getItem(CURSOS));
    if (cursos === null) {
        return [];
    } else {
        return cursos;
    }
}

/**
 * Añade el elemento clickado a lo que hay actualmente en el carrito.
 */
function updateCarrito() {
    console.log("Guardado");
}

/**
 * Borra el carrito del LocalStorage y de la interfaz gráfica.
 */
function clearCarrito(removeButton) {
    localStorage.removeItem(CURSOS);
    let carritoBody = removeButton.target.parentElement.firstElementChild.getElementsByTagName("tbody")[0];
    carritoBody.innerHTML = "";
}