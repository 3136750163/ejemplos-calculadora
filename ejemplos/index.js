function calcularIMC() {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var telefono = document.getElementById("telefono").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var imc = (peso / (altura * altura)).toFixed(2);

    
    var condicion = "";
    if (imc < 18.5) {
        condicion = "bajo peso, estás en una condición estable.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        condicion = "peso normal, estás en una condición estable.";
    } else if (imc >= 25 && imc <= 29.9) {
        condicion = "sobrepeso, deberías cuidar tu salud.";
    } else {
        condicion = "obesidad, tienes una mala condición y deberías consultar a un médico.";
    }

    var mensaje = `Hola ${nombre}, `;
    if (edad >= 18) {
        mensaje += 'eres mayor de edad con ${15}.años y tu índice de masa corporal es ${imc}. te encuentras en una condición de ${condicion}';
    } else {
        mensaje += 'eres menor de edad con ${edad} años y tu índice de masa corporal es ${imc}. Te encuentras en una condición de ${condicion}';
    }

    document.getElementById("parrafo").innerText = mensaje;
    alert(mensaje);
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("parrafo").innerText = "";
}