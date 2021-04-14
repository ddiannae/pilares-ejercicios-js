// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Patata',
        precio: 1,
        imagen: 'patata.jpg'
    },
    {
        id: 2,
        nombre: 'Cebolla',
        precio: 1.2,
        imagen: 'cebolla.jpg'
    },
    {
        id: 3,
        nombre: 'Calabacin',
        precio: 2.1,
        imagen: 'calabacin.jpg'
    },
    {
        id: 4,
        nombre: 'Fresas',
        precio: 0.6,
        imagen: 'fresas.jpg'
    }

];

function mostrarCatalogo (){
    let mainHtml= document.getElementById("items");
    for (const producto of baseDeDatos) {
    let contenedor= document.createElement("div");
    contenedor.classList.add("card","col-sm-4");
    let contenedorInt= document.createElement("div");
    contenedor.classList.add("card-body");
    let nombreProducto= document.createElement("h5");
    contenedor.classList.add("card-title");
    contenedor.textContent=producto.nombre;
    let imagenProducto= document.createElement('img');
    imagenProducto.classList.add("img-fluid");
    imagenProducto.setAttribute("src","img/"+producto.imagen);
    let precioProducto= document.createElement("p");
    precioProducto.classList.add("card-text");
    precioProducto.textContent="$"+producto.precio;
    let boton= document.createElement("button")
    boton.classList.add("btn","btn-primary");
    boton.textContent="+";
    boton.setAttribute("identificador",producto.id);
    boton.addEventListener("click",agregarAlCarrito);
    contenedorInt.appendChild(imagenProducto);
    contenedorInt.appendChild(nombreProducto);
    contenedorInt.appendChild(precioProducto);
    contenedorInt.appendChild(boton);
    contenedor.appendChild(contenedorInt);
    mainHtml.appendChild(contenedor);    
    }   
}
let total= 0;
let carrito=[];

function agregarAlCarrito (event){
let idProducto= event.target.getAttribute("identificador"); 
let totalHtml= document.getElementById("total");
carrito.push(parseInt(idProducto));
let indiceProducto= parseInt(idProducto)-1;
total= total+baseDeDatos[indiceProducto].precio;
totalHtml.textContent="$"+total.toFixed(2);

}
window.onload= mostrarCatalogo;