img1.addEventListener("mouseover", (e) => {
  img1.setAttribute("src", "./images/orchidee_dior.jpg");
});

img1.addEventListener("mouseout", (e) => {
  img1.setAttribute("src", "./images/orchidee_dior1.jpg");
});

img2.addEventListener("mouseover", (e) => {
  img2.setAttribute("src", "./images/slow_flower2.jpg");
});

img2.addEventListener("mouseout", (e) => {
  img2.setAttribute("src", "./images/slow_flower.jpg");
});

img3.addEventListener("mouseover", (e) => {
  img3.setAttribute("src", "./images/hortensia_bretagne2.jpg");
});

img3.addEventListener("mouseout", (e) => {
  img3.setAttribute("src", "./images/hortensia_bretagne.jpg");
});

img4.addEventListener("mouseover", (e) => {
  img4.setAttribute("src", "./images/art_floral2.jpg");
});

img4.addEventListener("mouseout", (e) => {
  img4.setAttribute("src", "./images/art_floral.jpg");
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
