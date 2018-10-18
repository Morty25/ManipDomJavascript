document.getElementById("idP1").addEventListener("click", fonctionZoom);
var varP1 = document.querySelector("#idP1");

function fonctionZoom() {
    if (varP1.getAttribute("class") == "") {
        varP1.setAttribute("class", "exercice1")
    }
    else {
        varP1.setAttribute("class", "");
    }
}





































































/*document.getElementById("idp").addEventListener("click", function () { 

    var varP =  document.querySelector("#idp"); 
    varP.setAttribute("class", "exercice1");

 });  */
