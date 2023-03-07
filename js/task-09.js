function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backround = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

// const btn = document.querySelector("button");
changeColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  console.log(getRandomHexColor());
  backround.textContent = getRandomHexColor();
});

// const textInput = document.querySelector("#name-input");
// const textOutput = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//   if (textInput.value === "") {
//     textOutput.textContent = "Anonymous";
//   } else {
//     textOutput.textContent = event.currentTarget.value;
//   }
// });
