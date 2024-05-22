function mostrarProducto(productId) {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            const producto = data[productId];
            if (producto) {
                document.getElementById('productoNombre').innerText = producto.nombre;
                document.getElementById('productoPrecio').innerText = producto.precio;
                document.getElementById('productoImagen').src = producto.imagenUrl;
                document.getElementById('productoDescripcion').innerText = producto.descripcion;

                
            }
        })
        .catch(error => console.error('Error:', error));
}


window.addEventListener('popstate', function(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        mostrarProducto(productId);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        mostrarProducto(productId);
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const botonComprar = document.getElementById('botonComprar');
    botonComprar.addEventListener('click', function() {
        const talla = document.getElementById('talla').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);

        // Validar que se haya seleccionado una talla y cantidad
        if (talla === "" || isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor completa todos los campos (talla y cantidad).");
            return;
        }

        // Calcular total a pagar
        const precioUnitario = 25;
        const totalPagar = precioUnitario * cantidad;

        // Mostrar el total
        const totalElemento = document.getElementById('total');
        const totalPagarElemento = document.getElementById('totalPagar');
        totalPagarElemento.textContent = totalPagar;
        totalElemento.style.display = 'block';
    });
});


// PARTE DEL CONTACTO

document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Muestra el mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';

    // Redirige al usuario después de 1 segundos
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1000);
});

