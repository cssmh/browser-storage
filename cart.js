const btnClick = () => {
    const productName = document.getElementById("product-name");
    const productQuantity = document.getElementById("product-quantity");
    const name = productName.value;
    const quantity = productQuantity.value;
    productName.value = "";
    productQuantity.value = "";
    console.log(name, quantity);
    displayProduct(name, quantity)
}

const displayProduct = (name, quantity) => {
    const li = document.createElement('li');
    li.innerHTML = `${name}: ${quantity}`

    const cont = document.getElementById("product-container");
    cont.appendChild(li)
}
