let nbLikes = 0;
const boutonLike = document.getElementById("mon-bouton-like");
if (boutonLike) {
boutonLike.addEventListener("click", () => {
nbLikes = nbLikes + 1;
boutonLike.textContent = "❤️ J'aime (" + nbLikes + ")";
});
}


const boutonEnvoyer = document.getElementById("bouton-envoyer");

if (boutonEnvoyer) {
    boutonEnvoyer.addEventListener("click", () => {
        boutonEnvoyer.textContent = "Envoi...";
    });
}


// Bascule entre les semaines
function showWeek(n) {
    document.querySelectorAll('.edt-week').forEach(el => el.classList.remove('visible'));
    document.querySelectorAll('.edt-tab').forEach(el => el.classList.remove('active'));
    document.getElementById('week-' + n).classList.add('visible');
}

// Ouvre / ferme un jour
function toggleDay(el) {
    el.classList.toggle('open');
}