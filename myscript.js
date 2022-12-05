var currentImgIndex = 1;
var ImgSrcArray = [
    './assets/img/lettuce.svg',
    './assets/img/orange.svg',
    './assets/img/apple.svg',
    './assets/img/tomato.svg'
];

function trocarPrimeiro() {

    if (currentImgIndex == ImgSrcArray.length) {
        currentImgIndex = 0;
    }
    document.getElementById("alface-imagem").src = ImgSrcArray[currentImgIndex];
    currentImgIndex++;

}

function trocarSegundo() {

    if (currentImgIndex == ImgSrcArray.length) {
        currentImgIndex = 0;
    }
    document.getElementById("laranja-imagem").src = ImgSrcArray[currentImgIndex];
    currentImgIndex++;

}

function trocarTerceiro() {

    if (currentImgIndex == ImgSrcArray.length) {
        currentImgIndex = 0;
    }
    document.getElementById("maca-imagem").src = ImgSrcArray[currentImgIndex];
    currentImgIndex++;

}

function trocarQuarto() {

    if (currentImgIndex == ImgSrcArray.length) {
        currentImgIndex = 0;
    }
    document.getElementById("tomate-imagem").src = ImgSrcArray[currentImgIndex];
    currentImgIndex++;

}

function redi() {
    var radio = document.getElementsByName('opcao-registro');
    for (i = 0; i < radio.length; i++) {
        if (radio[0].checked) {
            window.location.assign("cadastroEmpresa.html");
        } else if (radio[1].checked) {
            window.location.assign("cadastroONG.html");
        } else if (radio[2].checked) {
            window.location.assign("cadastroUsuario.html");
        }
    }
}

var num = 1;
function aumentarPrimeiro() {
    document.getElementById("caixote1").innerHTML = (num = num + 1) + " caixotes";
}
function diminuirPrimeiro() {
    document.getElementById("caixote1").innerHTML = (num = num - 1) + " caixotes";
}

function aumentarSegundo() {
    document.getElementById("caixote2").innerHTML = (num = num + 1) + " caixotes";
}
function diminuirSegundo() {
    document.getElementById("caixote2").innerHTML = (num = num - 1) + " caixotes";
}

function aumentarTerceiro() {
    document.getElementById("caixote3").innerHTML = (num = num + 1) + " caixotes";
}
function diminuirTerceiro() {
    document.getElementById("caixote3").innerHTML = (num = num - 1) + " caixotes";
}

function aumentarQuarto() {
    document.getElementById("caixote4").innerHTML = (num = num + 1) + " caixotes";
}
function diminuirQuarto() {
    document.getElementById("caixote4").innerHTML = (num = num - 1) + " caixotes";
}

