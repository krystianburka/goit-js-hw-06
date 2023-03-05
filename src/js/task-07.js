const select = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

select.addEventListener("input", () => {
  outputText.style.fontSize = select.value;
});
