
/*
 * Fun��o que substitui o formul�rio de sumbiss�o do nome de usu�rio pelo pr�prio nome recebido.
 */
function receiveUserName(name) {
	document.getElementById("submit_name").innerHTML = name;
}

/*
 * Fun��o que inicia ou acaba um jogo.
 */
function startStopGame() {
	var option = document.getElementById("control_button").innerHTML;
	if (option == "START") {
		document.getElementById("control_button").innerHTML = "STOP";
		alert("Let's start the game!");
	} else if (option == "STOP") {
		document.getElementById("control_button").innerHTML = "START";
		alert("Bye bye");
	} else {
		alert("Op��o inv�lida: " + option);
	}
}