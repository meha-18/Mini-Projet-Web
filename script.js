/**
 * Fonction pour afficher une alerte de bienvenue personnalisée.
 * Elle récupère la valeur saisie dans le champ avec l'ID "n".
 */
function afficher(maha){
    var myInput = document.getElementById("n");
    // Affiche une boîte de dialogue avec le nom de l'utilisateur
    alert( "Bonjours" + " " + myInput.value + " " + "!" );
}
// Sélection de l'élément HTML cible pour l'effet de saisie (ID "t")
const txt = document.getElementById('t');
// Liste des mots qui vont défiler dans l'animation
const words = ["transformation digitale", "succès futur", "innovation"];
// Index du mot actuel dans le tableau 'words'
let i = 0; 
// Index du caractère actuel dans le mot en cours de saisie
let j = 0;
/**
 * Fonction récursive pour simuler l'écriture.
 */
function type() {
    // Structure conditionnelle.
    if (i < words.length) {
        // Si le mot actuel n'est pas encore terminé
        if (j < words[i].length) {
            txt.innerHTML += words[i].charAt(j);
            // Ajoute une lettre
            j++;
            // Délai de 100ms entre chaque lettre
            setTimeout(type, 100);
        } else {
            // Une fois le mot fini, attend 2 secondes avant de l'effacer
            setTimeout(erase, 2000);
        }
    } else {
        // Réinitialise l'index pour boucler l'animation indéfiniment
        i = 0;
        type();
    }
}
/**
 * Fonction récursive pour simuler l'effacement du texte.
 */
function erase() {
    if (j > 0) {
        // Supprime le dernier caractère affiché
        txt.innerHTML = words[i].substring(0, j-1);
        j--;
        setTimeout(erase, 50);
    } else {
        // Passe au mot suivant dans le tableau
        i++;
        // Si on atteint la fin du tableau, on revient au premier mot
        if (i >= words.length) i = 0;
        type();
    }
}
// Lancement initial de l'animation
type();
