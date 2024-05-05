function verifi() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "elias" && password == "123") {
        alert("¡Inicio de sesión correcto!");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function toggleMenu() {
    var menu = document.querySelector('.link-nav');
    menu.classList.toggle('menu-abierto');
}



let cantidadCarrito = 0;

        function agregarAlCarrito() {
            cantidadCarrito++;
            console.log("Producto agregado al carrito. Cantidad actual: " + cantidadCarrito);
            document.getElementById("cantidad-carrito").textContent = cantidadCarrito;
        }


