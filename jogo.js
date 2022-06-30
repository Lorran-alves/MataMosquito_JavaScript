
 var altura = 0
 var largura = 0
 var mosquitoTamanho = ''
 var vidas = 1
 var tempo = 10
 var criaMosquitoTempo = 1500
 var nivel = window.location.search
 nivel = nivel.replace("?", "")

 if (nivel === "normal"){
    criaMosquitoTempo = 1500

 }else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000

 }else if ( nivel === "chucknorris"){
    criaMosquitoTempo = 750
 }

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
   
}

ajustaTamanhoPalcoJogo()
   
var cronometro = setInterval(function(){
    tempo --
    if(tempo <= 0){
        window.location.href = "vitoria.html"
        clearInterval(cronometro)
        clearInterval(criaMosquito)
    }else{
        
        document.getElementById('cronometragem').innerHTML = tempo 
    }
},1000)

function posicaoAleatoria(){


    //AQUI É ONDE O ELEMENTO É REMOVIDO

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if( vidas <= 3){
        document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
        
        vidas++
        }else{
           window.location.href = "fim_de_jogo.html"
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    

//CRIAR O ELEMENTO HTML

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    

    document.body.appendChild(mosquito)


    tamanhoAleatorio()
    console.log(ladoAleatorio())
}
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    
    switch(classe){

        case 0:
            return 'mosquito1'
        case 1: 
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio (){
    var lado = Math.floor(Math.random() * 2)
    
    
    switch(lado){

        case 0:
            return 'ladoA'
        case 1: 
            return 'ladoB'
     
       }
    
}
function reiniciar(){
    window.location.href = "app.html"
}