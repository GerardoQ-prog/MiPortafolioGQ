window.addEventListener('scroll',function(){
    let animacion = document.getElementById('card')
    let animacion1 = document.getElementById('card1')
    let animacion2 = document.getElementById('card2')
    let animacion3 = document.getElementById('card3')
    let animacion4 = document.getElementById('card4')
    let animacion5 = document.getElementById('card5')

    let posicion = animacion.getBoundingClientRect().top

    let tamaño=window.innerHeight/1;

    if(posicion < tamaño){
        animacion.style.animation = 'subiendo 1s ease-in' 
        animacion1.style.animation = 'subiendo 1s ease-in'
        animacion2.style.animation = 'subiendo 1s ease-in'
        animacion3.style.animation = 'subiendo 1s ease-in'
        animacion4.style.animation = 'subiendo 1s ease-in'
        animacion5.style.animation = 'subiendo 1s ease-in'
    }
})