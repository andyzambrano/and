document.addEventListener("DOMContentLoaded", function () {
    const check = document.getElementById("check");
    const bulb = document.querySelector("#light");
    const content = document.querySelectorAll(".content");
    const cards = document.querySelectorAll(".card");
    const titles = document.querySelectorAll(".tit");

    // Desactivar el interruptor (iniciar apagado)
    check.checked = false;

    // Apagar el foco
    bulb.classList.remove("on");
    bulb.classList.remove("shine");

    // Ocultar la información y los cuadros
    content.forEach((item) => item.style.visibility = "hidden");
    cards.forEach((card) => card.style.visibility = "hidden");
    titles.forEach((title) => title.style.visibility = "hidden");

    check.addEventListener("change", function () {
        if (this.checked) {
            // Cuando el interruptor se activa (foco encendido), encender el foco y aplicar la animación de brillo
            bulb.classList.add("on");
            bulb.classList.add("shine");

            // Mostrar la información y los cuadros
            content.forEach((item) => item.style.visibility = "visible");
            cards.forEach((card) => card.style.visibility = "visible");
            titles.forEach((title) => title.style.visibility = "visible");
        } else {
            // Cuando el interruptor se desactiva (foco apagado), apagar el foco y detener la animación de brillo
            bulb.classList.remove("on");
            bulb.classList.remove("shine");

            // Ocultar la información y los cuadros
            content.forEach((item) => item.style.visibility = "hidden");
            cards.forEach((card) => card.style.visibility = "hidden");
            titles.forEach((title) => title.style.visibility = "hidden");
        }
    });
});