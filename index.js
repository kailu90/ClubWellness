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