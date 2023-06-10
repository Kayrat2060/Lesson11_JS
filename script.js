const productData = JSON.parse(data);
console.log(productData);
const contentEl = document.querySelector('.content');

const productBox = document.createElement('div');
productBox.classList.add('product-box');

productData.product.forEach(product => {
const productEl = document.createElement('div');
productEl.classList.add('product');

const productImg = document.createElement("img");
productImg.classList.add('product__img');
productImg.src = product.img;
productImg.setAttribute('alt', "photo");

const productName = document.createElement('p');
productName.classList.add('product__Name');
productName.textContent = product.name;

const productDescription = document.createElement('p');
productDescription.classList.add('product__description');
productDescription.textContent = product.description;

const productPrice = document.createElement('p');
productPrice.classList.add('product__price');
productPrice.textContent = product.price;

productEl.appendChild(productImg);
productEl.appendChild(productName);
productEl.appendChild(productDescription);
productEl.appendChild(productPrice);

productBox.appendChild(productEl);
contentEl.appendChild(productBox);

});


