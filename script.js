"use strict";

const TIEMPO_HORNO = 40;

let capas = prompt("¿Cuántas capas tendrá la lasaña?", "");
let minutosEnHorno = prompt("¿Cuántos minutos lleva en el horno?", "");

if (capas === "" || minutosEnHorno === "" || capas < 0 || minutosEnHorno < 0) {
    alert("Por favor ingresa valores válidos.");
} else {

    capas = Number(capas);
    minutosEnHorno = Number(minutosEnHorno);

    let tiempoRestante = TIEMPO_HORNO - minutosEnHorno;

    let tiempoPreparacion = capas * 2;

    let tiempoTotal = minutosEnHorno + tiempoPreparacion;

    document.getElementById("restante").textContent =
        "Tiempo restante en el horno: " + tiempoRestante + " minutos";

    document.getElementById("preparacion").textContent =
        "Tiempo total de preparación: " + tiempoPreparacion + " minutos";

    document.getElementById("total").textContent =
        "Tiempo total de trabajo: " + tiempoTotal + " minutos";
}