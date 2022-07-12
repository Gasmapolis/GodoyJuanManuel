//////CLASES/////
class Producto{
    constructor(id, nombre, precio, foto){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto
    }
}


let listaProductos = []
let producto1 = new Producto(1, "Pulsera", 450, "Pulsera.jpg")
let producto2 = new Producto(2, "Mochila", 2200, "Mochila.jpg")
let producto3 = new Producto(3, "Reloj Digital", 3100, "Reloj-Digital.jpg")
let producto4 = new Producto(4, "Reloj Analogico", 2000, "Reloj-Analogico.jpg")
let producto5 = new Producto(5, "Gorra", 800, "Gorras.jpg")

listaProductos.push(producto1)
listaProductos.push(producto2)
listaProductos.push(producto3)
listaProductos.push(producto4)
listaProductos.push(producto5)

let carrito = []
let totalCompra = []

const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const botonVaciar = document.getElementById("vaciar-carrito")

botonVaciar.addEventListener("click", () =>{
    carrito.length = 0
    actualizarCarrito()
})

listaProductos.forEach((producto) => {
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="card m-3 col-4" style="width: 15rem;">
        <img src="./images/${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.id}.${producto.nombre}</h5>
            <p class="card-text">$ ${producto.precio}</p>
            <button class="btn btn-primary botonDeCompra" id="agregar${producto.id}">Agregar al carrito</button>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div);

    const botones = document.getElementById (`agregar${producto.id}`)

    botones.addEventListener ("click", () => {
        agregarAlCarrito(producto.id)
    })
    
})


const agregarAlCarrito = (prodId) =>{
    const item = listaProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    totalCompra.push(item.precio)
    total()
    actualizarCarrito()
    console.log(carrito)
    console.log(totalCompra)
}

const eliminarDelCarrito = (prodId) =>{
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    
    carrito.forEach ((prod) => {
        
        const div = document.createElement("tr")
        div.innerHTML = `
        <td>${prod.nombre}</td>
        <td>$${prod.precio} </td>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btn btn-primary"> <span>Eliminar del Carrito</span></button>
        `
        contenedorCarrito.appendChild(div)
    })
}

function total(){
    const precioTotal = document.getElementById(`precioTotal`)
    const total = totalCompra.reduce((acc, elemento) => acc + elemento, 0)
    console.log(total)
    precioTotal.innerText = total
}

