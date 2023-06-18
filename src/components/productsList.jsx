class product {
  constructor(id, productName, url, price, discription) {
    this.name = productName;
    this.url = url;
    this.price = price;
    this.discription = discription;
  }
}

let productList = [];

function productPush() {
  let pro1 = new product(
    1,
    "Girl's T-shirt",
    "https://themewagon.github.io/cozastore/images/product-01.jpg",
    "$8.00",
    "Girls White Color T-shirt"
  );
  let pro2 = new product(
    2,
    "Men's Shirt",
    "https://themewagon.github.io/cozastore/images/product-03.jpg",
    "$12.00",
    "Men's lining shirt"
  );
  let pro3 = new product(
    3,
    "Jacket",
    "https://themewagon.github.io/cozastore/images/product-04.jpg",
    "$15.00",
    "Women's jacket"
  );
  let pro4 = new product(
    4,
    "Girl's Shirt",
    "https://themewagon.github.io/cozastore/images/product-05.jpg",
    "$13.00",
    "Beautiful Girl's Shirt"
  );
  productList.push(pro1);
  productList.push(pro2);
  productList.push(pro3);
  productList.push(pro4);
}
productPush();

export default productList;
