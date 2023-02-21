const maincatecoryListEl = document.querySelector('#categories');
const categoryItemsEl = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryItemsEl.length}`);

categoryItemsEl.forEach(item => {
    const categoryNameEL = item.querySelector('h2');
    const categoryitemsEl = item.querySelectorAll('li');

    console.log(`Category: ${categoryNameEL.textContent}`);
    console.log(`Elements: ${categoryitemsEl.length}`);
});










