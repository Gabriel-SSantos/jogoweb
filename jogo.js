var vida1 = document.getElementById('vida1')
var vida2 = document.getElementById('vida2')
var pers1 = document.getElementById('img1')
var pers2 = document.getElementById('img3')
var animação = document.getElementById('img2')
var botões = document.getElementById('botões')
var vida_pers1 = 100
var vida_pers2 = 120 
var dano1 = 20
var dano2 = 10
function ataque1(){
    vida_pers2 -= dano1
    vida2.innerHTML = `Vida: ${vida_pers2}` 
    pers1.src = 'imagens/ação_pers1.gif'
    animação.src = 'imagens/animação_pers1.gif'
    botões.innerHTML='<input type="button" value="" ><input type="button" value="" onclick="ataque2()">'
    vencedor()
}
function ataque2(){
    vida_pers1 -= dano2
    vida1.innerHTML = `Vida: ${vida_pers1}` 
    pers2.src = 'imagens/ação_pers2.gif'
    animação.src = 'imagens/animação_pers2.gif'
    botões.innerHTML='<input type="button"  onclick="ataque1()"> <input type="button">'
    vencedor()
}
function vencedor(){
    var vencedor = document.getElementById('principal')
    if(vida_pers1 < 0){
        vencedor.innerHTML = '<h1>Parabéns</h1><img src="imagens/pers2.png"'
        vencedor.style.backgroundImage = URL('imagens/fimback.gif')
    }
    if(vida_pers2 < 0){
        vencedor.innerHTML = '<h1>Parabéns</h1><img src="imagens/pers1.png">'
    }
}