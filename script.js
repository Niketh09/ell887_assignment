document.getElementById("addItemBtn").addEventListener("click", function() {
    // Redirect to the add-product.html page
    window.location.href = '/add_product.html'; // Change the URL to the desired page
});

// document.getElementById("addItemForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission from reloading the page
//     // document.write(5+6);
//     console.log("HI");
//     const formData = new FormData(this);
//     const newProduct = {
//         id: parseInt(formData.get("productId")), // Capture and parse ID as integer
//         name: formData.get("productName"),
//         price: parseInt(formData.get("productPrice")) // Capture and parse price as integer
//     };

//     fetch('/api/addProduct', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newProduct)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Product added:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });

// Event listener for "List Products" button
// document.getElementById("listItemsBtn").addEventListener("click", function() {
//     fetch('/api/listProducts')
//     .then(response => response.json())
//     .then(products => {
//         console.log('Products:', products);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });

document.getElementById("listItemsBtn").addEventListener("click", function() {
    window.location.href = '/list_products.html';
    // const productList = document.getElementById('productList');

    // // Function to fetch and render the list of products
    // function fetchProducts() {
    //     fetch('/api/listProducts') // Assuming this endpoint is configured on your backend server
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
    //         listItem.textContent = `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`;
    //         productList.appendChild(listItem);
    //     });
    // }

    // // Fetch products when the page is loaded
    // fetchProducts();
});

