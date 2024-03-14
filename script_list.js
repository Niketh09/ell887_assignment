const productList = document.getElementById('product-list');

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

    tableRow.appendChild(serialNumberCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(descriptionCell);
    tableRow.appendChild(priceCell);

    productList.appendChild(tableRow);
  });
}

function fetchProducts() {
    fetch('/foodproducts.azurewebsites.net/api/listProducts') 
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
