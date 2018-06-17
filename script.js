var barraAltura, barraLargura, jogadorPosicaoX, velocidadeJogador;
var bolaDiametro, bolaPosX, bolaPosY, velocidadeBola, pontosJogador;
var colisao = false;

function inicializar() {
    barraAltura = 15;
    barraLargura = 90;
    velocidadeJogador = 20;
    bolaDiametro = 10;
    bolaPosX = canvas.width / 2;
    bolaPosY = -10;
    velocidadeBola = 10;
    pontosJogador = 0;

    jogadorPosicaoX = (canvas.width - barraLargura) / 2;

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    document.addEventListener('keydown', keyDown);
    setInterval(gameLoop, 30);
}

function keyDown(e) {
    if (e.keyCode == 37) {
        if (jogadorPosicaoX > 0) {
            jogadorPosicaoX -= velocidadeJogador;
        }
    }

    context.fillRect(jogadorPosicaoX, canvas.height - barraAltura, barraLargura, barraAltura);
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(jogadorPosicaoX, canvas.height - barraAltura, barraLargura, barraAltura);
    context.beginPath();
    context.arc(bolaPosX, bolaPosY, bolaDiametro, 0, Math.PI * 2, true);
    context.fill();

    if (bolaPosY <= canvas.height) {
        bolaPosY += velocidadeBola;
    }
    else {
        bolaPosX = Math.random() * 600;
        bolaPosY = -10;
        colisao = false;
    }

    if ((bolaPosX > jogadorPosicaoX && bolaPosX < jogadorPosicaoX + barraWidth) && bolaPosY >= canvas.height - barraHeight && colisao == false) {
        pontosJogador++;
        colisao = true;
    }
    
}