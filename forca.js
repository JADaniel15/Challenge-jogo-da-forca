let tentativas = 6;
let listaDinamica = [];
let palavraSecretaSorteada;

const tecnologia = [
    palavra001 = {
        nome: "JAVASCRIPT"
    },
    palavra002 = {
        nome: "PYTHON"
    },
    palavra003 = {
        nome: "ANGULAR"
    },
    palavra004 = {
        nome: "PHP"
    },
    palavra005 = {
        nome: "REACT"
    },
    palavra006 = {
        nome: "NODE"
    },
    palavra007 = {
        nome: "GIT"
    },
    palavra008 = {
        nome: "VISUALCODE"
    },
    palavra009 = {
        nome: "SUBLIME"
    },
    palavra010 = {
        nome: "ANDROIDSTUDIO"
    },

];



criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * tecnologia.length)
    
    palavraSecretaSorteada = tecnologia[indexPalavra].nome;
    
    console.log(palavraSecretaSorteada);
}



function montarPalavarNaTela(){

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";


    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
    
}
function letraIdentificada(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
         mudarStyleLetra("tecla-" + letra);
         comparaListas(letra);
         montarPalavarNaTela();
    }
   
}
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "dimgray";
    document.getElementById(tecla).style.color = "";
}
function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--;
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada); 
            
        }
          
    }else {
        for (i = 0; i< palavraSecretaSorteada.length; i++ ) {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    let vitoria = true;
    for (i = 0; i< palavraSecretaSorteada.length; i++ ){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria =false;
        }
    }
    if(vitoria == true){
        abreModal("PARABÉNS!", "Você venceu..."); 
        tentativas = 0;
    }
}
function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img.png/forca01.png')";
            break;
            case 4:
                document.getElementById("imagem").style.background  = "url('./img.png/forca02.png')";
                break;
            case 3:
                document.getElementById("imagem").style.background  = "url('./img.png/forca03.png')";
                break;
            case 2:
                document.getElementById("imagem").style.background  = "url('./img.png/forca04.png')";
                break;
            case 1:
                document.getElementById("imagem").style.background  = "url('./img.png/forca05.png')";
                break;
            case 0:
                document.getElementById("imagem").style.background  = "url('./img.png/forca06.png')";
                break;
            default:
                document.getElementById("imagem").style.background  = "url('./img.png/forca.png')";
                break;
    }
}
function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});
