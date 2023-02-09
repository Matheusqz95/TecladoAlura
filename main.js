function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio'){
            elemento.play();      
    }
    else {
        alert('Elemento não encontrado');
        console.log ('Elemento ou seletor invalido');
    }
   // elemento.play()
}

//document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento){
        if (evento.code === 'Space' || 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
    

    
}
//let contador = 0;
// while significa "ENQUANTO"
/*while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio)
    }
    
    contador = contador + 1

    
}
*/
//document.querySelector('.tecla_pom').onclick = tocaSomPom;

