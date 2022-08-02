
const productos = [

    { nombre: 'helado de crema de 1 kilo', precio: 2500 },
    { nombre: 'helado de oreo de 1 kilo', precio: 1600 },
    { nombre: 'helado de frutilla de 1 kilo', precio: 1050 },
    { nombre: 'helado de dulce de leche de 1 kilo', precio: 1800},
    { nombre: 'helado de crema del cielo de 1 kilo', precio: 1500 }
]

let carrito = []

let opcion = prompt("hola vendemos helados desea comprar algun producto 'si' o 'no' ");

while (opcion != 'si' && opcion != 'no') {
    seleccion = prompt('disculpe solo permitimos que ingrese si o no')
}

if (opcion == 'si') {
    alert(" acontinuacion le mostraremos la lista de productos")
    let listProductos = productos.map((productos) => productos.nombre  + " $" + productos.precio )
    alert(listProductos.join(" - "))
}
else if (opcion == 'no') {
    alert('gracias por venir, hasta pronto!!')
}

while (opcion != 'no') {
    let producto = prompt('agregue un producto a tu carrito ponga el nombre del helado y el peso  como se mostro anterior mente en el alert')
    let precio = 0;

    if (producto == 'helado de crema de 1 kilo' || producto == 'helado de oreo de 1 kilo' || producto == 'helado de frutilla de 1 kilo' || producto == 'helado de dulce de leche de 1 kilo' || producto == 'helado de crema del cielo de 1 kilo') {
        switch (producto) {
            case 'helado de crema de 1 kilo':
                precio = 2500;
                break;
            case 'helado de oreo de 1 kilo':
                precio = 1600;
                break;
            case 'helado de frutilla de 1 kilo':
                precio = 1050;
                break;
            case 'helado de dulce de leche de 1 kilo':
                precio = 1800;
                break;
            case 'helado de crema del cielo de 1 kilo':
                precio = 1500;
                break;
        }
        let unidades = parseInt(prompt('cuantas unidades quiere llevar'))
        carrito.push({ producto, unidades, precio });
        console.log(carrito)
    } else {
        alert('no tenemos productos')
    }

    opcion = prompt('desea seguir comprando escriba "si"!! si usted quiere finalizar el proceso y ver el comprobante por consola escriba "no"')
    while (opcion == 'no') {
        alert('gracias por la compra! hasta pronto')
        carrito.forEach((carritoFinal)=> {
            console.log('comprobante: '+ carritoFinal.producto +  ' unidades: ' +carritoFinal.unidades+ ' precio:$'+carritoFinal.precio+ ' precio total de toda las unidade adquiridas por este producto:$ '+carritoFinal.unidades*carritoFinal.precio);
            
        } ) 
    break;
    }
}
