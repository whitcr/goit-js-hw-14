const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.children;

console.log("Number of categories:", categoryItems.length);

for (const item of categoryItems) {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
}
