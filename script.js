// 1. Creamos una variable de tipo array que almacena los tipos de productos ingresados
let productos = [];

// 2. Creamos una Función para agregar un producto a la lista
function agregarProducto() {
    // Tomaremos los valores ingresados por el usuario en el HTML en el campo nombreProducto y precioProducto
    // 3. declaramos la segunda variable de tipo String para capturar el valor de nombreProducto
    let nombreProducto = document.getElementById("producto").value;
    // 4. declaramos la tercera variable de tipo String que captura el valor de precioProducto y lo convertimos a numero decimal (float) con la función parseFloat
    let precioProducto = parseFloat(document.getElementById("precio").value);

    // 5. Creamos una etapa de validación donde verificamos que el nombre del producto sea un nombre valido y precio sea un numero valido.
    // Usando la función isNaN que verifica que el valor no es un numero, en otras palabras sirve para verificar si un valor ingresado en precioProducto es invalido
    if (nombreProducto === "" || isNaN(precioProducto) || precioProducto <= 0) {
        // Creamos una alerta por si hay algun error
        alert("Ingresa valores correctos, debe ser un valor mayor a 0");
        // Se detiene la ejecución de la función
        return;
    }

    // Agregamos el producto al array como un objeto con propiedades "Nombre y precio"
    productos.push({ nombre: nombreProducto, precio: precioProducto });

    // Obtenemos la lista de productos del HTML
    let lista = document.getElementById("listaProductos");

    // Creamos una variable que se guarda en la <li> para mostrar el producto en el HTML
    let item = document.createElement("li");

    // Asignamos el texto con el nombre y precio formateado con dos decimales
    item.textContent = `${nombreProducto} - $${precioProducto.toFixed(2)}`;

    // Agregamos el producto a la lista en HTML 
    lista.appendChild(item);

    // Limpiar los campos de entrada para que el usuario pueda ingresar otro producto
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
}

// Función para generar la factura con los productos agregados
function generarFactura() {
    // Obtener el nombre del cliente ingresado
    let cliente = document.getElementById("cliente").value;

    // Validación: el usuario debe ingresar un nombre y al menos un producto
    if (cliente === "" || productos.length === 0) {
        alert("Ingrese un nombre del cliente y al menos un producto.");
        return; // Se detiene la ejecución de la función 
    }

    // Calcular el subtotal sumando los precios de los productos con un acumulador
    let subtotal = 0;
    for (let i = 0; i < productos.length; i++) {
        // Acumulamos precios de los productos
        subtotal += productos[i].precio;
    }

    // Calcular el IVA (19% del total)
    let iva = subtotal * 0.19;

    // Calcular el total a pagar (subtotal + IVA)
    let total = subtotal + iva;

    // Construir la factura en formato HTML con los valores calculados
    let facturaHTML = `
        <p><strong>Cliente:</strong> ${cliente}</p>
        <ul>
            ${productos.map(prod => `<li>${prod.nombre} - $${prod.precio.toFixed(2)}</li>`).join("")}
        </ul>
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>IVA (19%):</strong> $${iva.toFixed(2)}</p>
        <p><strong>Total a pagar:</strong> $${total.toFixed(2)}</p>
    `;

    // Insertar la factura generada en el HTML
    document.getElementById("factura").innerHTML = facturaHTML;
}
