document.getElementById("idBouton1").addEventListener("click", fonctionBouton1);
document.getElementById("idBouton2").addEventListener("click", fonctionBouton2);
document.getElementById("idBouton3").addEventListener("click", fonctionBouton3Et5);
document.getElementById("idBouton4").addEventListener("click", fonctionBouton4);
document.getElementById("idBouton5").addEventListener("click", fonctionBouton3Et5);
var varCarrerBleu = document.querySelector(".carrerBleu");

function fonctionBouton1() {
    /*varCarrerBleu.style.height = parseInt(varCarrerBleu.style.height) + 10 + "px";*/
    // Impossible de modifier du css avec le java car déclarer dans css
    if (parseInt(window.getComputedStyle(varCarrerBleu).height) < 300) {
        varCarrerBleu.style.height = parseInt(window.getComputedStyle(varCarrerBleu).height) + 10 + "px";
    }
    else{
        varCarrerBleu.style.height = 100 + "px";
    }
}

function fonctionBouton2() {
    varCarrerBleu.setAttribute("id", "idExercice2Bouton2");
}

function fonctionBouton3Et5() {
    varCarrerBleu.setAttribute("id", "");
}

function fonctionBouton4() {
    varCarrerBleu.setAttribute("id", "idExercice2Bouton4");
}