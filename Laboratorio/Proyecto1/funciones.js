var usuarios = new Array();
var numUsuarios = 0;
var selectedCell = null;

function addUsuario(textField) {
	var nombre = textField.value;

	// Si el nombre está vacio no se añade
	if (nombre === "") {
		return;
	}

	// Se añade al array
	usuarios[numUsuarios] = nombre;

	// El nuevo usuario se añade al final de la tabla
	var table = document.getElementById('tablaUsuarios');
	var newRow = table.insertRow(table.rows.length);
	
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);

	cell1.innerHTML = numUsuarios;
	cell2.innerHTML = nombre;

	// El número de usuarios aumenta
	numUsuarios++;
}

// Devuelve la posición del primer usuario que encuentra en el array
function buscarUsuario(textField) {
	var nombre = textField.value;

	// Si el nombre está vacio no se añade
	if (nombre === "") {
		return;
	}

	// Busqueda del nombre
	var i = 0;
	while (i < numUsuarios && usuarios[i] != nombre) i++;

	// Si se ha encontrado se resalta en la tabla
	if (i < numUsuarios) {
		// Se desresalta la celda anterior
		if (selectedCell != null) {
			selectedCell.style.backgroundColor = "";
		}

		// Se resalta la celda en la tabla
		selectedCell = document.getElementById('tablaUsuarios').rows[i + 1].cells[0]; // La fila de la cabecera no cuenta
		selectedCell.style.backgroundColor = "#FF9F00";
	} else {
		alert("Usuario \"" + nombre + "\" no encontrado");
	}


}