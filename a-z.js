var satartBtn = document.querySelector(".arrow");
var main = document.querySelector(".main");
var bodyDiv = document.querySelector(".body-page");
var link = document.querySelectorAll(".link-holder");
const slider = document.querySelector(".slider");
const fa = document.querySelectorAll(".nav-link");

satartBtn.addEventListener("click", () => {
  main.style.display = "none";
  bodyDiv.classList.add("class-add");
});
link.forEach(function (elements) {
  elements.addEventListener("click", (e) => {
    e.preventDefault();
    bodyDiv.classList.remove("class-add");
    bodyDiv.classList.add("bg-changer");
    slider.style.display = "none";
    fa.forEach((fas) => {
      fas.classList.add("color-chagner");
      console.log(fas);
    });
    console.log(fa);
    console.log("it worked");
  });
});
