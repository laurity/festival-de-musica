document.addEventListener("DOMContentLoaded", function(){
    iniciarApp()
})

function iniciarApp() {
    navegacionFija()
    crearGaleria()
    scrollNav()  
}

function navegacionFija(){
    const barra = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')
    const body = document.querySelector('body')

    window.addEventListener('scroll', function(){
        /*Si el usuario ha hecho scroll hacia abajo lo SUFICIENTE 
        como para que llegue a la seccion "sobreFestival...*/
        if (sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo')
            body.classList.add('body-scroll')
        } else {
            barra.classList.remove('fijo')
            body.classList.remove('body-scroll')
        }
    })
}

function scrollNav(){

}

function crearGaleria(){

}

function mostrarImagen(id){

}