function setInTable(mainTitle, price, quantity, count) {
    const tbody = document.getElementById('table-container')

    const title = elementTitle(mainTitle)

    const productPrice = getPrice(price)

    const productQuantity = getQuantity(quantity)
    let total
    if (isNaN(productQuantity)) {
        alert('Add Quantity')
    } else {
        total = productPrice * productQuantity;
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${count}</td>
        <td>${title}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${total}</td>
        `
        tbody.appendChild(tr);
    }



}

function elementTitle(title) {
    const inputTitle = document.getElementById(title);
    const productTitle = inputTitle.innerText;
    return productTitle

}

function getPrice(id) {
    const inputPrice = document.getElementById(id);
    const inputPriceStr = inputPrice.innerText;
    const price = parseFloat(inputPriceStr);
    return price

}

function getQuantity(elementId) {
    const inputQuantity = document.getElementById(elementId);
    const inputQuantityStr = inputQuantity.value;
    const quantity = parseFloat(inputQuantityStr);
    return quantity

}