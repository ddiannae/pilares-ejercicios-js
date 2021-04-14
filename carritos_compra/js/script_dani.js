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

function mostrarCatalogo(){
    let main = document.getElementById("items");
    for (let producto of baseDeDatos) {
        let miNodo = document.createElement("div");
        miNodo.classList.add('card','col-sm-4');
        let miNodoCardBody = document.createElement("div");
        miNodoCardBody.classList.add('card-body');
        let miNodoCardTitle = document.createElement("h5"); 
        miNodoCardTitle.classList.add('card-title');
        miNodoCardTitle.textContent = producto.nombre;
        
        let miNodoImagen =document.createElement("img");
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src',"img/" + producto.imagen);
        
        let miNodoPrecio = document.createElement("p");
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = '$' + producto.precio;

        let miNodoBoton = document.createElement("button");
        miNodoBoton.classList.add('btn','btn-primary');
        miNodoBoton.textContent ='+';
        miNodoBoton.setAttribute('identificador', producto.id);
        miNodoBoton.addEventListener('click', agregarProducto);


        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoCardTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        main.appendChild(miNodo);
    }    
}
let total = 0;
let carrito = [];

function agregarProducto(event) {
    let idProducto = event.target.getAttribute('identificador');
    carrito.push(parseInt(idProducto));
    total = total + baseDeDatos[parseInt(idProducto)-1].precio;
    document.getElementById("total").textContent = total.toFixed(2);
    desplegarCarrito();
}

function desplegarCarrito() {
    document.getElementById("carrito").innerHTML ="";
    for (let idProducto of carrito) {
        let elemento = document.createElement("li");
        elemento.classList.add("list-group-item", "text-right", "mx-2");
        //elemento.textContent = "nombre" + baseDeDatos[idProducto-1].nombre + "precio" + baseDeDatos[idProducto-1].precio;
        elemento.textContent = `nombre ${baseDeDatos[idProducto-1].nombre}   precio  ${baseDeDatos[idProducto-1].precio}`;
        document.getElementById("carrito").appendChild(elemento);
    }
}

window.onload = mostrarCatalogo;