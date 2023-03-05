const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const list = document.createElement("li");
// console.log(list);
// list.textContent = ingredients;
const numberOfIngridients = ingredients.length;
// console.log(numberOfIngridients);
for (let i = 0; i < ingredients.length; i++) {
  const list = document.createElement("li");
  list.textContent = ingredients[i];
  list.className = "item";
  console.log(list);
  const lastItem = document.querySelector("ul");
  lastItem.append(list);
}
