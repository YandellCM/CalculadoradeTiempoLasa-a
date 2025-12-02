"use strict";

const TIEMPO_HORNO = 40;

document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btnCalcular");

    btn.addEventListener("click", function () {

        let capas = document.getElementById("capas").value;
        let minutos = document.getElementById("horno").value;

        if (capas === "" || minutos === "" || capas < 0 || minutos < 0) {
            alert("Por favor ingresa valores válidos.");
            return;
        }

        capas = Number(capas);
        minutos = Number(minutos);

        let tiempoRestante = TIEMPO_HORNO - minutos;
        let tiempoPreparacion = capas * 2;
        let tiempoTotal = minutos + tiempoPreparacion;

        document.getElementById("restante").textContent =
            "Tiempo restante en el horno: " + tiempoRestante + " minutos";

        document.getElementById("preparacion").textContent =
            "Tiempo total de preparación: " + tiempoPreparacion + " minutos";

        document.getElementById("total").textContent =
            "Tiempo total de trabajo: " + tiempoTotal + " minutos";
    });

});
