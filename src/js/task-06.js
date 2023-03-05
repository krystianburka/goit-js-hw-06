const textInput = document.querySelector("#validation-input");
const textLength = textInput.dataset.length;
console.log(textLength);

textInput.addEventListener("blur", () => {
  if (textInput.value.length === textLength) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
