var canvas = document.querySelector('.canvas_animacao');
var contex = canvas.getContext('2d');

//Variaveis principais do jogo

var imagens, animacao, teclado, colisor, nave, criadorInimigos;
var totalImagens = 0, carregadas = 0;
var musicaAcao;

//Carregar imagens e musicas
carregarImagens();
carregarMusicas();

function carregarImagens(){
	//objeto contendo as imagens 
	imagens = {
		espaco: 'fundo-espaco.png';
		estrelas: 'fundo-estrelas';
		nave: 'sprite-nave1-500.png';
		vilao: 'inimigo-laranja.png';
		explosao: 'explosao.png';
	};
	//carregar todas as imagens
	for(var i in imagens){
		var img = new image();
		img.src = 'img/' + imagens[i];
		img.onload = carregando;
		totalImagens++;

		//substituir nome pela imagen
		imagens[i] = img;
	}
}

function carregando(){
	contex.save();

	//fundo

	contex.drawImage(imagens.espaco, 0, 0, canvas.width, canvas.heigth);

	if()
}