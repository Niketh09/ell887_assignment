function displayAddedProduct(product) {
    const addedProductContainer = document.getElementById("addedProductContainer");
    const addedProduct = document.getElementById("addedProduct");

    addedProduct.textContent = `Name: ${product.name}, Description: ${product.description}, Price: ${product.price}`;
    addedProductContainer.style.display = "block";

    setTimeout(function() {
        // After 2 seconds, refresh the page
        location.reload();
    }, 2000); // 2000 milliseconds = 2 seconds
}

document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    // document.write(5+6);
    console.log("HI");
    const formData = new FormData(this);
    const newProduct = {
        name: formData.get("productName"),
        description: formData.get("description"),
        price: parseInt(formData.get("productPrice")) 
    };
    fetch('https://foodproducts.azurewebsites.net/api/addProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Product added:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    displayAddedProduct(newProduct);
    
});
