// Creamos los elementos para poder referirnos a las clases
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show.modal')

// Creamos las funciones para poder abrir y cerrar la ventana
const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// Asociamos la función a un listener para poder abrir el modal


// Cremos un evento global para poder cerrar la ventana con la tecla de esc

