
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Electronico extends Producto {
    constructor(nombre, precio, marca) {
        super(nombre, precio);
        this.marca = marca;
    }
}

class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
        this.carrito = [];
    }

    agregarAlCarrito(producto, cantidad) {
        this.carrito.push({ producto, cantidad });
        this.generarDetalleCompra();
    }

    generarDetalleCompra() {
        let detalleCompra = document.getElementById('detalleCompra');
        detalleCompra.innerHTML = '';

        this.carrito.forEach(item => {
            let total = item.cantidad * item.producto.precio;
            let detalleProducto = `
                Product: ${item.producto.nombre}, 
                Quantity: ${item.cantidad}, 
                Price: $${item.producto.precio}, 
                Total: $${total}<br>
            `;
            detalleCompra.innerHTML += detalleProducto;
        });
    }
}

let laptop = new Electronico('Laptop', 1000, 'MarcaX');
let smartphone = new Electronico('Smartphone', 500, 'MarcaY');

let cliente1 = new Cliente('Juan');

function agregarAlCarrito(producto) {
    let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto.nombre} que desea comprar:`));
    
    if (!isNaN(cantidad) && cantidad > 0) {
        cliente1.agregarAlCarrito(producto, cantidad);
    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
}
