let box1 = document.getElementsByClassName("down");
let box2 = document.getElementsByClassName("up");

function downUp() {

    console.log("voooo");
}

function Traduccion() {

    var prueba = document.getElementById("boton");
    var espanish = document.getElementsByClassName("esp");
    var english = document.getElementsByClassName("eng");

    if (prueba.value == "ENG") {

        for (let i = 0; i < espanish.length; i++) {
            espanish[i].classList.add("hide");
        }

       for (let i = 0; i < english.length; i++) {
            english[i].classList.remove("hide");
        }

        prueba.value = "ESP";
        
    }else {

         for (let i = 0; i < espanish.length; i++) {
            espanish[i].classList.remove("hide");   
        }
        
        for (let i = 0; i < english.length; i++) {
            english[i].classList.add("hide");
        }
        
        prueba.value = "ENG";
    }
}
