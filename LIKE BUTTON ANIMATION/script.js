let contentClick = document.querySelector(".container");
let number = document.querySelector(".numb");

let counter = 0;
let clicked = false;
contentClick.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    contentClick.classList.add("heart-active");
    number.innerText = counter += 1;
  } else {
    clicked = false;
    contentClick.classList.remove("heart-active");
    number.innerText = counter -= 1;
  }
});
