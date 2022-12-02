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

