document.addEventListener("DOMContentLoaded", function() {
    var botones = document.querySelectorAll(".linkG");
    var destino = "../mantenimiento/manteni.html";

    botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        window.location.href = destino;
    });
    });
});
