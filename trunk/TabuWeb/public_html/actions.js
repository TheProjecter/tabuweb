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
	} else if (option == "STOP") {
		document.getElementById("control_button").innerHTML = "START";
		alert("Bye bye");
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

/* Mexe zumbie */
var d_left, d_top, movimento_left, movimento_top, pos_x, pos_y;

// Quantos px andará cada intervalo
movimento_left = 5;
movimento_top = parseInt(Math.random()*3 + 1);

// Definindo direções 1 = positivo e 0 = negativo
d_left = parseInt(Math.random()*2);
d_top = parseInt(Math.random()*2);

$(document).ready(function(){
	var pos_x = parseInt($('#field').width() / 2 - $('#zumbie_1').width() / 2 );
	var pos_y = parseInt($('#field').height() / 2 - $('#zumbie_1').height() / 2 );
	
	limite_left = 20;
	limite_right = $('#field').width() - $('#zumbie_1').width() - 20;
	limite_top = 0;
	limite_bottom = $('#field').height() - $('#zumbie_1').height();
	
	playButton = $('#playgame');
	playButton.click(function(){
		
		window.setTimeout(function(){ playButton.html('3');	},200);
		window.setTimeout(function(){ playButton.html('2');	},700);
		window.setTimeout(function(){ playButton.html('1');	},1200);
		window.setTimeout(function(){ playButton.hide(); },1700);
		window.setTimeout(function(){
			play = window.setInterval(function(){
				
				pos_x = d_left == 1 ? pos_x + movimento_left : pos_x - movimento_left;
				pos_y = d_top == 1 ? pos_y + movimento_top : pos_y - movimento_top;
				
				if(pos_x<limite_left){
					pos_x = pos_x + movimento_left * 2;
					d_left = 1;
				}
				
				if(pos_x>limite_right){
					pos_x = pos_x - movimento_left * 2;
					d_left = 0;
				}
				
				if(pos_y<limite_top){
					pos_y = pos_y + movimento_top * 2;
					d_top = 1;
				}
				
				if(pos_y>limite_bottom){
					pos_x = pos_x + movimento_top * 2;
					d_top = 0;
				}
				
				$('#zumbie_1').css({'top':pos_y+'px','left':pos_x+'px'});
				
			},33);
		},1900);
	});
});