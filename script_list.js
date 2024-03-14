// const productList = document.getElementById('productList');

//     // Function to fetch and render the list of products
// function fetchProducts() {
//     fetch('foodproducts.azurewebsites.net/api/listProducts') // Assuming this endpoint is configured on your backend server
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch products');
//             }
//             return response.json();
//         })
//         .then(products => {
//             console.log(products)
//             renderProductList(products);
//         })
//         .catch(error => {
//             console.error('Error fetching products:', error);
//         });
// }

// // Function to render the list of products
// function renderProductList(products) {
//     console.log(products)
//     productList.innerHTML = ''; // Clear previous content

//     products.forEach(product => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `ID: ${product.name}, Name: ${product.description}, Price: ${product.price}`;
//         productList.appendChild(listItem);
//     });
// }

// // Fetch products when the page is loaded
// fetchProducts();

const productList = document.getElementById('product-list');

// const products = [];

// Assuming you have the product data in an array named 'products'
function displayProducts(products) {
  productList.innerHTML = ""; // Clear existing table rows
  console.log(products)
  products.forEach((product, index) => {
    const tableRow = document.createElement("tr");

    // Create table data cells
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;
    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = product.description;
    const priceCell = document.createElement("td");
    priceCell.textContent = product.price;

    // Append cells to the table row
    tableRow.appendChild(serialNumberCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(descriptionCell);
    tableRow.appendChild(priceCell);

    // Append the table row to the table body
    productList.appendChild(tableRow);
  });
}

function fetchProducts() {
    fetch('/api/listProducts') // Assuming this endpoint is configured on your backend server
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json();
        })
        .then(products => {
            console.log(products)
            displayProducts(products);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

fetchProducts();
