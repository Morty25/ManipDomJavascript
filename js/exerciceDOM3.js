/*document.addEventListener("keydown", fonctionMonterCarrer);
document.addEventListener("keyup", fonctionDescendreCarrer);*/
// Choppe toute les touches du clavier
document.onkeydown = function (event) {
    if (event.keyCode == 37) fonctionGaucheA();
    if (event.keyCode == 39) fonctionDroiteA();
    if (event.keyCode == 38) fonctionHautA();
    if (event.keyCode == 40) fonctionBasA();
    if (event.keyCode == 32) fonctionChat();
}
document.onkeyup = function (event) {
    if (event.keyCode == 37) fonctionGaucheB();
    if (event.keyCode == 39) fonctionDroiteB();
    if (event.keyCode == 38) fonctionHautB();
    if (event.keyCode == 40) fonctionBasB();
}
var varDiv = document.querySelector(".carrerBleu");

function fonctionBasA() {
    varDiv.setAttribute("id", "idExercice3Haut");
}

function fonctionBasB() {
    varDiv.setAttribute("id", "");
}

function fonctionHautA() {
    varDiv.setAttribute("id", "idExercice3Bas");
}

function fonctionHautB() {
    varDiv.setAttribute("id", "");
}

function fonctionGaucheA() {
    varDiv.setAttribute("id", "idExercice3Gauche");
}

function fonctionGaucheB() {
    varDiv.setAttribute("id", "");
}

function fonctionDroiteA() {
    varDiv.setAttribute("id", "idExercice3Droite");
}

function fonctionDroiteB() {
    varDiv.setAttribute("id", "");
}

function fonctionChat(){
    varDiv.setAttribute("id", "idChat");
}