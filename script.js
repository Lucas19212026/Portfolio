
var linhas = document.querySelectorAll("#nome .linha");

for (var i = 0; i < linhas.length; i++) {
    var texto = linhas[i].textContent;
    linhas[i].textContent = "";

    for (var j = 0; j < texto.length; j++) {
        var letra = document.createElement("span");
        letra.textContent = texto[j];
        letra.classList.add("letra");
        letra.style.opacity = "0"; // começa escondida
        linhas[i].appendChild(letra);
    }
}

var letras = document.querySelectorAll("#nome .letra");

// Mostra as letras uma por uma
function digitarNome() {
    for (var k = 0; k < letras.length; k++) {
        mostrarLetra(k);
    }
}

function mostrarLetra(posicao) {
    setTimeout(function () {
        letras[posicao].style.opacity = "1";
    }, posicao * 150);
}


function ondaDeCor() {
    for (var k = 0; k < letras.length; k++) {
        destacarLetra(k);
    }
}

function destacarLetra(posicao) {
    setTimeout(function () {
        letras[posicao].classList.add("destaque");
    }, posicao * 120);

    setTimeout(function () {
        letras[posicao].classList.remove("destaque");
    }, posicao * 120 + 300);
}

// Letra pula quando o mouse passa por cima
for (var m = 0; m < letras.length; m++) {
    letras[m].addEventListener("mouseover", function () {
        this.classList.add("destaque");
    });
    letras[m].addEventListener("mouseout", function () {
        this.classList.remove("destaque");
    });
}

digitarNome();
setTimeout(ondaDeCor, letras.length * 150 + 500); // primeira onda
setInterval(ondaDeCor, 6000);                      // repete a cada 6 segundos




var cartas = document.querySelectorAll(".carta");

function limparCartas() {
    for (var i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove("selecionada");
        cartas[i].classList.remove("apagada");
    }
}

function clicarNaCarta() {
    var jaEstavaSelecionada = this.classList.contains("selecionada");

    limparCartas();

    if (jaEstavaSelecionada) {
        return; // voltou ao estado inicial
    }

    // apaga todas e destaca só a carta clicada
    for (var i = 0; i < cartas.length; i++) {
        cartas[i].classList.add("apagada");
    }
    this.classList.remove("apagada");
    this.classList.add("selecionada");
}

for (var c = 0; c < cartas.length; c++) {
    cartas[c].addEventListener("click", clicarNaCarta);
}



var botaoEnviar = document.querySelector("#enviar");
var aviso = document.querySelector("#aviso");

botaoEnviar.addEventListener("click", function () {
    var nome = document.querySelector("#nome-campo").value;
    var email = document.querySelector("#email").value;
    var mensagem = document.querySelector("#mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        aviso.textContent = "Preencha nome, e-mail e mensagem.";
    } else {
        aviso.textContent = "Mensagem enviada! Obrigado pelo contato.";
    }
});



// ---------- MODO CLARO / ESCURO ----------
var botaoTema = document.querySelector("#tema");
var iconeTema = document.querySelector("#tema-icone");
var textoTema = document.querySelector("#tema-texto");

function atualizarBotaoTema() {
    var temaAtual = document.documentElement.getAttribute("data-tema");

    // o botão mostra o tema para o qual vai mudar
    if (temaAtual === "claro") {
        iconeTema.textContent = "☾";
        textoTema.textContent = "Modo escuro";
    } else {
        iconeTema.textContent = "☀";
        textoTema.textContent = "Modo claro";
    }
}

botaoTema.addEventListener("click", function () {
    var temaAtual = document.documentElement.getAttribute("data-tema");
    var novoTema = temaAtual === "claro" ? "escuro" : "claro";

    document.documentElement.setAttribute("data-tema", novoTema);

    try {
        localStorage.setItem("tema", novoTema); // lembra a escolha
    } catch (e) {}

    atualizarBotaoTema();
});

atualizarBotaoTema();
