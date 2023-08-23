//Les cercles
let cercle1 = document.querySelector(".cercle1");
let cercle2 = document.querySelector(".cercle2");
let cercle3 = document.querySelector(".cercle3");
let cercle4 = document.querySelector(".cercle4");

//Les barres
let barre1 = document.querySelector(".barre1");
let barre2 = document.querySelector(".barre2");
let barre3 = document.querySelector(".barre3");
let barre4 = document.querySelector(".barre4");

console.log(barre1, barre2, barre3, barre4);
console.log(cercle1, cercle2, cercle3, cercle4);



//Les cercles masqués
cercle2.style.display = "none";
cercle3.style.display = "none";
cercle4.style.display = "none";

//Les barres masquées
barre1.style.display = "none";
barre2.style.display = "none";
barre3.style.display = "none";
barre4.style.display = "none";


//Les évènements

cercle1.addEventListener("click", function() {
  cercle2.style.display = "flex";
  barre1.style.display = "flex";
  document.body.style.background = "#767576";
  document.body.style.transition = "background 2s";
})

cercle2.addEventListener("click", function() {
  cercle4.style.display = "flex";
  barre2.style.display = "flex";
  document.body.style.backgroundColor = "#4e4e4e";
  document.body.style.transition = "background 2s";
})

cercle4.addEventListener("click", function() {
  cercle3.style.display = "flex";
  barre3.style.display = "flex";
  document.body.style.backgroundColor = "#2e2e2e";
  document.body.style.transition = "background 2s";
})

cercle3.addEventListener("click", function() {
  barre4.style.display = "flex";
  document.body.style.backgroundColor = "black";
  document.body.style.transition = "background 2s";
})