
class Producto {
    constructor (id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt (precio);
        this.stock = parseInt(stock);
    }
}

const pulsera = new Producto(1, "Pulsera", 450, 10);
const mochila = new Producto(2, "Mochila", 2200, 5);
const relojDigital = new Producto(3, "Reloj Digital", 3100, 8);
const relojAnalogico = new Producto(4, "Reloj Analogico", 2000, 8);
const gorras = new Producto(5, "Gorras", 800, 15);
let totalProductos = 0
const listaProductos =[
    {
        id: 1,
        nombre: "pulsera",
        precio: 450,
        stock: 10,
    },
    {
        id: 2,
        nombre: "Mochila",
        precio: 2200,
        stock: 5,
    },
    {
        id: 3,
        nombre: "Reloj Digital",
        precio: 3100,
        stock: 8,
    },
    {
        id: 4,
        nombre: "Reloj Analogico",
        precio: 2000,
        stock: 8,
    },
    {
        id: 5,
        nombre: "Gorras",
        precio: 800,
        stock: 15,
    }
]
let carrito = [];
let listaCompras = [];

function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}


function usuario(){
    nombreUsuario = prompt("Ingrese su nombre por favor")
    while (nombreUsuario === "") {
        nombreUsuario = prompt("Ingrese su nombre por favor")
    }
}

function menu() {
    let opcion = 0;
    
    do{
        opcion = parseInt(prompt("Bienvenido " + nombreUsuario + ", seleccione una opcion para continuar. (ESC para salir)\nEn el carrito hay actualmente " + carrito.length + " Productos.\n 1.Agregar productos al carrito\n 2.Pagar el total de la compra\n 3.Reiniciar carrito\n 4.Mostrar productos dentro del carrito"));
    
    switch (opcion) {
        case 1:
            agregarProducto()
            return menu()
        case 2:
            metodoPago()
            return mostrarTotal(totalProductos)
        case 3:
            reinicioCarrito()
            return menu()
        case 4:
            revisarCarrito()
            return menu()
        default: 
            alert("seleccione una opcion valida!!")
            
        } 
    } while (opcion !== "") 
}

function agregarProducto() {
    // let seleccionarProducto = 0
    // do {
        
        let boton1 = document.getElementById("comprar1")
        boton1.onclick = () => {
            totalProductos = suma(totalProductos, pulsera.precio)
            listaCompras.push(pulsera)
            carrito.push ( pulsera.nombre + ' $' + pulsera.precio )
        }

        let boton2 = document.getElementById("comprar2")
        boton2.onclick = () => {
            totalProductos = suma(totalProductos, mochila.precio)
            listaCompras.push(mochila)
            carrito.push (mochila.nombre + ' $' + mochila.precio)
        }

        let boton3 = document.getElementById("comprar3")
        boton3.onclick = () => {
            totalProductos = suma(totalProductos, relojDigital.precio)
            listaCompras.push(relojDigital)
            carrito.push(relojDigital.nombre + ' $' + relojDigital.precio)
        }

        let boton4 = document.getElementById("comprar4")
        boton4.onclick = () => {
            totalProductos = suma(totalProductos, relojAnalogico.precio)
            listaCompras.push(relojAnalogico)
            carrito.push (relojAnalogico.nombre + ' $' + relojAnalogico.precio)
        }

        let boton5 = document.getElementById("comprar5")
        boton5.onclick = () => {
            totalProductos = suma(totalProductos, gorras.precio)
            listaCompras.push(gorras)
            carrito.push (gorras.nombre + ' $' + gorras.precio)
        }

        // if (seleccionarProducto === 1) {
        //     totalProductos = suma(totalProductos, pulsera.precio)
        //     listaCompras.push(pulsera)
        //     carrito.push ( pulsera.nombre + ' $' + pulsera.precio )
        // }if (seleccionarProducto === 2) {
        //     totalProductos = suma(totalProductos, mochila.precio)
        //     listaCompras.push(mochila)
        //     carrito.push (mochila.nombre + ' $' + mochila.precio)
        // }if (seleccionarProducto === 3) {
        //     totalProductos = suma(totalProductos, relojDigital.precio)
        //     listaCompras.push(relojDigital)
        //     carrito.push(relojDigital.nombre + ' $' + relojDigital.precio)
        // }if (seleccionarProducto === 4) {
        //     totalProductos = suma(totalProductos, relojAnalogico.precio)
        //     listaCompras.push(relojAnalogico)
        //     carrito.push (relojAnalogico.nombre + ' $' + relojAnalogico.precio)
        // }if (seleccionarProducto === 5) {
        //     totalProductos = suma(totalProductos, gorras.precio)
        //     listaCompras.push(gorras)
        //     carrito.push (gorras.nombre + ' $' + gorras.precio)
        // }if (seleccionarProducto >= 6) {
        //     alert("Seleccione por favor una opcion valida")
        // }

    // }while (seleccionarProducto !== 0)

}
function seleccion (valor){
    seleccionarProducto = valor
}

function mostrarTotal(resultado) {
    // alert("El total a pagar es: $" + resultado + "\n !!muchas gracias por su compra!!");
    console.log(resultado)
}

function metodoPago() {
    let transferencia = totalProductos
    let efectivo = totalProductos * 0.90
    let credito = totalProductos * 1.15
    let metodoPago = 0

        metodoPago = parseInt(prompt("El total en el carrito es de: $" + totalProductos + "\nComo desea pagarlo?\n 1.Efectivo\n 2.Transferencia\n 3.Tarjeta de credito"));
        if (metodoPago === 1) {
            alert("Se ha aplicado un descuento del 10%");
            totalProductos = efectivo;

        }if (metodoPago === 2) {
            totalProductos = transferencia;

        }if (metodoPago === 3) {
            alert("Se ha aplicado un recargo del 15%");
            totalProductos = credito;

        }if (metodoPago >= 4) {
            alert("Seleccione una opcion valida")
            
        }
}
function reinicioCarrito() {
    alert("Se han eliminado todos los productos del carrito")
    totalProductos = multiplicacion(totalProductos, 0);
    carrito = []
    listaCompras = []
}

function revisarCarrito() {

    alert ("Los productos en su carrito son:\n" + carrito.join("\n") + "\n Total a pagar: $" + totalProductos)
}

function listaFiltrada() {
    const relojes = listaCompras.filter((listaCompras) => listaCompras.nombre.includes('Reloj'))
    const baratos = listaCompras.filter((listaCompras) => listaCompras.precio < 2000)
    console.log("Relojes vendidos")
    console.log(relojes)
    console.log("productos baratos")
    console.log(baratos)
}

function crearLista() {
    let contenedorProductos = document.getElementById("contenedor-productos")

    for (const producto of listaProductos){
        let columna = document.createElement("div")
        columna.className = "col-md-4 mt-3"
        columna.id = `columna-${producto.id}`
        columna.innerHTML = `
        <div class = "card">
            <div class="card-body">
                <p class="card-text"> Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text"> Precio: <b>${producto.precio}</b></p>
                <p class="card-text"> Cantidad: <b>${producto.stock}</b></p>
                <button type="button" class="btn btn-primary" id="comprar${producto.id}" value= "${producto.id}">Comprar</button>
            </div>
        </div>
        `
    contenedorProductos.append(columna);
    }
    
}
function agregarProductoTabla() {
    carrito.forEach(() => {
        let filaTabla = document.createElement("tr")
        filaTabla.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.stock}</td>`;
    })
}


function main() {
    crearLista()  
    agregarProducto() 
    mostrarTotal(carrito)

}
main()
