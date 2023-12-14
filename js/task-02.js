const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

function addList() {
  const ingredientsList = document.getElementById("ingredients");

  const elements = ingredients.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  });

  ingredientsList.append(...elements);
}

addList();
