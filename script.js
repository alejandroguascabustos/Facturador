function generarFactura() {
    // Obtener los valores ingresados en el formulario
    let cliente = document.getElementById("cliente").value;
    let tipoServicio = document.getElementById("tipodeservicio").value;
    let tipoBicicleta = document.getElementById("tipobicicleta").value;
    let rin = document.getElementById("rin").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let fechaHora = document.getElementById("fecha-hora").value;
    let comentarios = document.getElementById("comentarios").value;
    let valorPagar = parseFloat(document.getElementById("valor_pagar").value);

    // Validar que los campos no estén vacíos
    if (!cliente || !tipoServicio || !tipoBicicleta || !rin || !telefono || !correo || !fechaHora || isNaN(valorPagar) || valorPagar <= 0) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Calcular IVA y total
    let iva = valorPagar * 0.19;
    let totalPagar = valorPagar + iva;

    let facturaContainer = document.getElementById("factura-container");

    // Simulación de la factura generada
    let facturaHTML = `
        <h2>FACTURA CLIENTE</h2>
        <p><strong>Cliente:</strong> ${cliente}</p>
        <p><strong>Tipo de servicio:</strong> ${tipoServicio}</p>
        <p><strong>Tipo de bicicleta:</strong> ${tipoBicicleta}</p>
        <p><strong>Medida del rin:</strong> ${rin}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Fecha y Hora:</strong> ${fechaHora}</p>
        <p><strong>Comentarios:</strong> ${comentarios}</p>
        <p><strong>Valor a pagar:</strong> $${valorPagar.toFixed(2)}</p>
        <p><strong>IVA (19%):</strong> $${iva.toFixed(2)}</p>
        <p><strong>Total a pagar:</strong> $${totalPagar.toFixed(2)}</p>
    `;

    // Insertamos la factura generada en el contenedor
    document.getElementById("factura").innerHTML = facturaHTML;

    // Mostramos la factura eliminando la clase que la oculta
    facturaContainer.classList.remove("factura-oculta");
    facturaContainer.classList.add("factura-visible");

    // Mover el formulario
    let formularioContainer = document.getElementById("formulario-container");
    formularioContainer.classList.add("formulario-movido");
}
