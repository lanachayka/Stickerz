const productsJson = `
[
    {
        "id": "1",
        "title": "Baby Yoda",
        "imgUrl": "img/baby-yoda.svg",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odit ad, accusantium suscipit unde velit perferendis ducimus asperiores quos fuga recusandae! Necessitatibus soluta ad pariatur animi minima numquam temporibus distinctio.",
        "price": 42
    },
    {
        "id": "2",
        "title": "Banana",
        "imgUrl": "img/banana.svg",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odit ad, accusantium suscipit unde velit perferendis ducimus asperiores quos fuga recusandae! Necessitatibus soluta ad pariatur animi minima numquam temporibus distinctio.",
        "price": 40
    },
    {
        "id": "3",
        "title": "Girl",
        "imgUrl": "img/girl.svg",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odit ad, accusantium suscipit unde velit perferendis ducimus asperiores quos fuga recusandae! Necessitatibus soluta ad pariatur animi minima numquam temporibus distinctio.",
        "price": 39
    },
    {
        "id": "4",
        "title": "Viking",
        "imgUrl": "img/viking.svg",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odit ad, accusantium suscipit unde velit perferendis ducimus asperiores quos fuga recusandae! Necessitatibus soluta ad pariatur animi minima numquam temporibus distinctio.",
        "price": 35
    }
]`;

function renderProducts(products, sortDirection = "ascending") {
    const productsContainer = document.querySelector(".product-list");
    productsContainer.innerHTML = '';
    const sortedProducts = [...products]
        .sort( (a, b) => sortDirection === "ascending" 
                ? a.price - b.price
                : b.price - a.price );
    for (const product of sortedProducts) {
        productsContainer.innerHTML += `
            <article>
                <img src="${product.imgUrl}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div>
                    <button class="button card-button">Info</button>
                    <button class="button card-button">Buy now - ${product.price}</button>
                </div>
            </article>`;
    }    
}

const products = JSON.parse(productsJson);
renderProducts(products);

const btnSortAsc = document.querySelector('.sort-asc');
btnSortAsc.addEventListener('click', sortProductsAsc);

function sortProductsAsc() {
    renderProducts(products, "ascending");
}

const btnSortDesc = document.querySelector('.sort-desc');
btnSortDesc.addEventListener('click', sortProductsDesc);

function sortProductsDesc() {
    renderProducts(products, "descending");
}