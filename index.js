const FlechaIzquierdaSlider = document.querySelector(".flecha_izquierda_slider");
const FlechaDerechaSlider = document.querySelector(".flecha_derecha_slider");
const slider = document.querySelector("#slider");
const sliderItem = document.querySelectorAll(".slider_item");

FlechaDerechaSlider.addEventListener("click", e => moverDerecha() )
FlechaIzquierdaSlider.addEventListener("click", e => moverIzquierda())

let posicion = 0;
let lenghtImage = 100 / sliderItem.length;

function moverDerecha() { 
    console.log(lenghtImage)
    posicion = posicion + lenghtImage;
    slider.style.transform = 'translate(-${posicion}%)'
    slider.style.transition = "all ease 0.6s"
}

function moverIzquierda() {
    console.log("moverIzquierda")
    posicion = posicion - lenghtImage;
    slider.style.transform = 'translate(${posicion}%)'
    slider.style.transition = "all ease 0.6s"
}

/*Función para mostrar el menú mobile*/

const menuHamburguesa = document.querySelector(".menu_hamburguesa");
const menuMobile = document.querySelector("#menu");

menuHamburguesa.addEventListener("click", e => mostrarMenu())

function mostrarMenu() {
    menuHamburguesa.style.transition = "translate()"
    menuMobile.style.display = "flex"
}