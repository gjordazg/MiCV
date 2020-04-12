function Traduccion() {

    var prueba = document.getElementById("boton");

    if (prueba.value == "ENG") {

        var elemIngles = document.getElementById("traducir");

        elemIngles.innerHTML = "Skills";
        
        prueba.value = "ESP";

    } else {

        var elemEspanol = document.getElementById("traducir");

        elemEspanol.innerHTML = "Habilidades";

        prueba.value = "ENG";
    }

}
