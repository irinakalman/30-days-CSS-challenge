let buttonSwap1 = document.querySelector(".js-button-swap1");
let buttonSwap2 = document.querySelector(".js-button-swap2");
console.log(buttonSwap1);
console.log(buttonSwap2);
// let leftPart = document.getElementsByClassName("left-part");
// let rightPart = document.getElementsByClassName("right-part");

buttonSwap1.addEventListener("click", function () {
  console.log("click");
  buttonSwap1.closest(".left-part").classList.toggle("swap-left");
  buttonSwap1.textContent = "Sign Up";
  buttonSwap2.closest(".right-part").classList.toggle("swap-right");
  buttonSwap2.textContent = "Sign In";
});

buttonSwap2.addEventListener("click", function () {
  console.log("click");
  buttonSwap2.closest(".right-part").classList.toggle("swap-right");
  buttonSwap2.textContent = "Sign Up";
  buttonSwap1.closest(".left-part").classList.toggle("swap-left");
  buttonSwap1.textContent = "Sign In";
});
