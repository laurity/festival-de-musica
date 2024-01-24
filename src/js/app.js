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
    const enlaces = document.querySelectorAll('.navegacion-principal a')

    //Un evento click para cada enlace
    enlaces.addEventListener('click', function(event){
        event.preventDefault()

        const seccionScroll = event.target.attributes.href.value

        const seccion = document.querySelector(seccionScroll)

        seccion.scrollIntoView({
            behavior: 'smooth'
        })
    })
}

function crearGaleria(){
    const galeria = document.createElement('picture')
    imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif">
        <source srcset="build/img/thumb/${i}.webp">
        <img loading="lazy" width="300" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
    `

    imagen.onclikclick = function (){
        mostrarImagen(i)
    }

    galeria.appendChild(imagen)
}

function mostrarImagen(id){
    const galeria = document.createElement('picture')
    imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif">
        <source srcset="build/img/thumb/${i}.webp">
        <img loading="lazy" width="300" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
    `
    //Crea el Overlay con la imagen
    const overlay = document.createElement('div')
    overlay.appendChild(imagen)
    overlay.classList.add('overlay')
    overlay.onclick = function(){
        const body = document.querySelector('body')
        body.classList.remove('fijar-body')
        overlay.remove()
    }

    //Boton para cerrar el Modal
    const modal = document.createElement('div')
    cerrarModal.textContent = 'X'
    cerrarModal.classList.add('btn-cerrar')
    cerrarModal.onclick = function(){
        const body = document.querySelector('body')
        body.classList.remove('fijar-body')
        overlay.remove()
    }

    overlay.appendChild(cerrarModal)

    //Añadirlo al HTML
    const body = document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('fijar-body')
}