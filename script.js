function afficher(maha){
    var myInput = document.getElementById("n");
    alert( "Bonjours" + myInput.value + "!" );
}
const txt = document.getElementById('t');
const words = ["transformation digitale", "succès futur", "innovation"];
let i = 0; 
let j = 0;
function type() {
    if (i < words.length) {
        if (j < words[i].length) {
            txt.innerHTML += words[i].charAt(j);
            j++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    } else {
        i = 0;
        type();
    }
}
function erase() {
    if (j > 0) {
        txt.innerHTML = words[i].substring(0, j-1);
        j--;
        setTimeout(erase, 50);
    } else {
        i++;
        if (i >= words.length) i = 0;
        type();
    }
}
type();
