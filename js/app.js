import { valida } from "./validaciones.js";

const input = document.querySelectorAll("input");

inputs.forEach( input => {
    input.addEventListener("blur", () => {
        valida(input.target)
    })
});