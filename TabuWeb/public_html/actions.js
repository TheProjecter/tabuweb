var jogoPausado = 1;
/*
 * Função que substitui o formulário de sumbissão do nome de usuário pelo próprio nome recebido.
 */
function receiveUserName(name) {
	document.getElementById("submit_name").innerHTML = name + " |";
}

/*
 * Função que inicia ou acaba um jogo.
 */
function startStopGame() {
	var option = document.getElementById("control_button").innerHTML;
	if (option == "START") {
		document.getElementById("control_button").innerHTML = "STOP";
		alert("Let's start the game!");
		jogoPausado = 0;
	} else if (option == "STOP") {
		document.getElementById("control_button").innerHTML = "START";
		alert("Bye bye");
		jogoPausado = 1;
	} else {
		alert("Opção inválida: " + option);
	}
}

function showConfigurations() {
	if (document.getElementById("control_button").innerHTML == "START") {
		document.getElementById("configuration_popup").style.visibility="visible";
	}
}
function hideConfigurations() {
	document.getElementById("configuration_popup").style.visibility="hidden";
}

/*Mexe zumbie */
var d_left, d_top, movimento_left, movimento_top, pos_x, pos_y;

// Quantos px andará cada intervalo
movimento_left = 5;
movimento_top = parseInt(Math.random()*3 + 1);

// Definindo direções 1 = positivo e 0 = negativo
d_left = parseInt(Math.random()*2);
d_top = parseInt(Math.random()*2);

/* Opções */
var dificuldade = 1, soma = 1, subt = 1, mult = 1, divi = 1, offline = 1, cenario = 1;

function mudaDificuldade(valor){dificuldade = valor;}
function mudaSoma(){if(soma == 1) soma = 0; else soma = 1;}
function mudaSubt(){if(subt == 1) subt = 0; else subt = 1;}
function mudaMult(){if(mult == 1) mult = 0; else mult = 1;}
function mudaDivi(){if(divi == 1) divi = 0; else divi = 1;}
function mudaOffline(valor){offline = valor;}
function mudaCenario(valor){cenario = valor;}

var num = 0;

$(document).ready(function(){
	/*Pega posição*/
	var pos_x1 = 10, pos_y1 = 50, pos_x2 = 10, pos_y2 = 100;
	alert(num);
	num++;
	
	/*Define Limites*/	
	limite_left = 20;
	limite_right = $('#field').width() - $('#zumbie_1').width() - 20;
	

	window.setInterval(function(){
			
		pos_x1 = d_left == 1 ? pos_x1 + movimento_left : pos_x1 - movimento_left;
		pos_y1 = d_top == 1 ? pos_y1 + movimento_top : pos_y1 - movimento_top;
				
		if(pos_x1<limite_left){
			pos_x1 = pos_x1 + movimento_left * 2;
			d_left = 1;
		}
			
		if(pos_x1>limite_right){
			pos_x1 = pos_x1 - movimento_left * 2;
			d_left = 0;
		}
				
		$('#zumbie_1').css({'top':50,'left':pos_x1+'px'});
			
	},33);
	
	window.setInterval(function(){
			
		pos_x2 = d_left == 1 ? pos_x2 + movimento_left : pos_x2 - movimento_left;
		pos_y2 = d_top == 1 ? pos_y2 + movimento_top : pos_y2 - movimento_top;
				
		if(pos_x2<limite_left){
			pos_x2 = pos_x2 + movimento_left * 2;
			d_left = 1;
		}
			
		if(pos_x2>limite_right){
			pos_x2 = pos_x2 - movimento_left * 2;
			d_left = 0;
		}
				
		$('#zumbie_2').css({'top':150,'left':pos_x2+'px'});
			
	},50);
	
});