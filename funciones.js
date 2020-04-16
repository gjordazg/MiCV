const box1 = document.getElementsByTagName("i");
let box2 = document.getElementsByClassName("contenedor");

for (let i = 0; i < box1.length; i++) {
    box1[i].addEventListener('click', downUp);
}

function downUp() {
    let x;
    switch(this){
        case box1[0]:
            x = box2[0];
            break;
        case box1[1]:
            x = box2[1];
            break;
        case box1[2]:
            x = box2[2];
            break;
    }
    
    if (this.className == "fas fa-angle-down") {
            this.classList.add("fa-angle-up");
            this.classList.remove("fa-angle-down");
            x.classList.add("show");
        } else{
            this.classList.add("fa-angle-down");
            this.classList.remove("fa-angle-up");
            x.classList.remove("show");
        }
    
     x = null;    
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

    } else {

        for (let i = 0; i < espanish.length; i++) {
            espanish[i].classList.remove("hide");
        }

        for (let i = 0; i < english.length; i++) {
            english[i].classList.add("hide");
        }

        prueba.value = "ENG";
    }
}
