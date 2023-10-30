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
const lineaSuperior = document.querySelector(".linea_superior")
const lineaMedio = document.querySelector(".linea_medio")
const lineaInferior = document.querySelector(".linea_inferior")


menuHamburguesa.addEventListener("click", e => mostrarMenu())

function mostrarMenu() {
    if (menuMobile.style.display === "none" || menuMobile.style.display === "") {
        menuMobile.style.display = "flex";
        menuHamburguesa.classList.add("transformacion");
        lineaSuperior.classList.add("transf1");
        lineaMedio.classList.add("transf2");
        lineaInferior.classList.add("transf3");


    } else if (menuMobile.style.display === "flex" || menuMobile.style.display === "block"){
            menuMobile.style.display = "none";
            menuHamburguesa.classList.remove("transformacion");
            lineaSuperior.classList.remove("transf1");
            lineaMedio.classList.remove("transf2");
            lineaInferior.classList.remove("transf3");
    }     
}