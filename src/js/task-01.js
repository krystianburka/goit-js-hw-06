const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`);

for (let i = 0; i <= numberOfCategories.length; i++) {
  const title = numberOfCategories[i].querySelector("h2");
  const titleText = [];
  titleText[i] = title.textContent;
  console.log(`Category: ${titleText[i]}`);
  const numberOfElements = numberOfCategories[i].querySelectorAll("li");
  console.log(`Elements: ${numberOfElements.length}`);
}

console.log("hello");
