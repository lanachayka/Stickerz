let products;

// function fetchProducts() {
//    fetch('products.json')
//         .then(response => response.json() )
//        .then(productsFromServer => products = productsFromServer)
//        .then( () => renderProducts() )
//        .catch (err => alert(err.message))
// }

async function fetchProducts() {
    try {const response = await fetch('products.json');
    products = await response.json();
    await convertCurrency();
    renderProducts();
    } catch (err) {
        alert(err.message);
    }
}

fetchProducts();

function renderProducts(sortDirection = "ascending") {
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
                    <button class="button card-button">Buy now - ${product.convertedPrice} (${product.currency})</button>
                </div>
            </article>`;
    }    
}

const btnSortAsc = document.querySelector('.sort-asc');
btnSortAsc.addEventListener('click', sortProductsAsc);

function sortProductsAsc() {
    renderProducts("ascending");
}

const btnSortDesc = document.querySelector('.sort-desc');
btnSortDesc.addEventListener('click', sortProductsDesc);

function sortProductsDesc() {
    renderProducts("descending");
}

async function convertCurrency() {
    const startCurrency = "USD";
    const targetCurrency = document.querySelector(".currency-input").value;
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${startCurrency}`);
    const rates = await response.json();
    const rate = rates.rates[targetCurrency];
    for (const product of products) {
        product.convertedPrice = (product.price * rate).toFixed(2);
        product.currency = targetCurrency;
    }
}

document.querySelector('.convert-currency')
    .addEventListener('click', async() => {
        await convertCurrency();
        renderProducts();
    });

