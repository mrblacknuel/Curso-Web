function sumar() {
	// Procesamos la excepción
	try	{
		// Pedimos el operando a
		var a = prompt("Valor a:", "");

		// Validamos el parámetro
		if (!a || isNaN(a)) {
			throw new Error("Valor invalido de a: " + a);
		}

		// Pedimos el operando b
		var b = prompt("Valor a:", "");

		// Validamos el parámetro
		if (!b || isNaN(b)) {
			throw new Error("Valor invalido de b: " + b);
		}

		var c = parseInt(a) + parseInt(b);
		alert("La suma es " + c);
	} catch (e) {
		alert("El error es " + e.message);
	}
}