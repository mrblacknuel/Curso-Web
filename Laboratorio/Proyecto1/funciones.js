var usuarios = new Array();
var contador = 0;

function addUsuario(textField) {
	// Se añade al array
	usuarios[contador] = textField.value;

	// El nuevo usuario se añade al final de la tabla
	var table = document.getElementById('tablaUsuarios');
	var newRow = table.insertRow(table.rows.length - 1);
	
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);

	cell1.innerHTML = contador;
	cell2.innerHTML = textField.value;

	// El número de usuarios aumenta
	contador++;
}

function buscarUsuario(textField) {
	alert("Buscar");
}