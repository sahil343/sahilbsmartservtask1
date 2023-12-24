

function displayProducts(products) {
  const tbody = document.querySelector("#productTable tbody");

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${product.title}</td><td>${product.price}</td><td>${product.popularity}</td>`;
    tbody.appendChild(row);
  });
}

fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
  .then((response) => response.json())
  .then(({ products }) => {
    let products_list = [];
    for (product in products) {
      products_list.push(products[product]);
    }
    const sortedProducts = products_list.sort(
      (a, b) => b.popularity - a.popularity
    );
    console.log(sortedProducts);
    displayProducts(sortedProducts);
  })
  .catch((error) => console.error("Error fetching JSON file:", error));


