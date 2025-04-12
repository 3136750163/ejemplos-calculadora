var pantalla = document.getElementById("pantalla");
function mostrar(valor){
    pantalla.value += valor;
}

function limpiar(){
    pantalla.value = "";
}

function calcular(){
    pantalla.value = eval(pantalla.value);
}

function calcular(){
    try {
        pantalla.value = eval(pantalla.value);
    } catch (error){
        pantalla.value = "Error";
}
    let resultado = eval(pantalla.value);
    pantalla.value = resultado;
     
    if (resultado < 0 ){
        alert("El resultado es negativo");
    }else if(resultado > 0){
        alert("El resultado es positivo");
    }
 }
