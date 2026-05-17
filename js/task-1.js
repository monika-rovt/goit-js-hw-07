const categories = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(categoty => {
    const nameCategory = categoty.querySelector("h2").textContent;
    const listCategory = categoty.querySelectorAll('ul li').length;

    console.log(`Category: ${nameCategory}`);

    console.log(`Elements: ${listCategory}`);
});


