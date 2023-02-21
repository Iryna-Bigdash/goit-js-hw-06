const categoryList = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryItems.length}`);

for (const item of categoryItems) {
    const categoryTitle = item.querySelector('h2').textContent;
    const allCategoryItems = item.querySelectorAll("li").length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${allCategoryItems}`);
}














