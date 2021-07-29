/**
 * crée un événement qui pérmer de changer les photos si mouse est sur un image pour chaques cards.
 * crée un événement qui pérmer de changer les photos si mouse enlever sur une image pour chaques cards.
 */
// card 1: si mouse est sur ce image
img1.addEventListener("mouseover", (e) => {
  img1.setAttribute("src", "./images/orchidee_dior.jpg");
});
// card 1: si mouse n'est pas sur ce image
img1.addEventListener("mouseout", (e) => {
  img1.setAttribute("src", "./images/orchidee_dior1.jpg");
});
// card 2: si mouse est sur ce image
img2.addEventListener("mouseover", (e) => {
  img2.setAttribute("src", "./images/slow_flower2.jpg");
});
// card 2: si mouse n'est pas sur ce image
img2.addEventListener("mouseout", (e) => {
  img2.setAttribute("src", "./images/slow_flower.jpg");
});
// card 3: si mouse est sur ce image
img3.addEventListener("mouseover", (e) => {
  img3.setAttribute("src", "./images/hortensia_bretagne2.jpg");
});
// card 3: si mouse n'est pas sur ce image
img3.addEventListener("mouseout", (e) => {
  img3.setAttribute("src", "./images/hortensia_bretagne.jpg");
});
// card 4: si mouse est sur ce image
img4.addEventListener("mouseover", (e) => {
  img4.setAttribute("src", "./images/art_floral2.jpg");
});
// card 4: si mouse n'est pas sur ce image
img4.addEventListener("mouseout", (e) => {
  img4.setAttribute("src", "./images/art_floral.jpg");
});

//récuperer button scroller pour aller début
let mybutton = document.getElementById("btn-back-to-top");

//Lorsque l'utilisateur fait défiler 20px du haut du document vers le bas, affichez le bouton
window.onscroll = function () {
  scrollFunction();
};
// program: condition si utilisateur fait défiler 20px du haut du document vers le bas, affichez le bouton
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Lorsque l'utilisateur clique sur le bouton, faites défiler vers le haut du document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
