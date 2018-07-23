import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";


/* List of products */
const products = [
  { id: 1, name: "Product 1", price: 500. ,count:0},
  { id: 2, name: "Product 2", price: 360. ,count:0},
  { id: 3, name: "Product 3", price: 56. ,count:0},
  { id: 4, name: "Product 4", price: 78. ,count:0},
  { id: 5, name: "Product 5", price: 678.,count:0 },
  { id: 6, name: "Product 6", price: 787.,count:0 }
];
 
//flag
var inCart=false;

/*array carrying cart items */
const cart=[];

//pages
const pages={
  cartList:"cartList",
  productList:"productList"
};


let currentPage=pages.productList;

/*Render function */
const renderApp = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
};

/*Fuction to add items to the cart */
const addToCart = productId => {
  const [product] = products.filter(({ id }) => productId === id);
  product.count++;
  if(product.count===1)
      cart.push(product);
  renderApp();
};

/*Function go to cart */
const goToCart = () => {
  inCart=true;
  currentPage = pages.cartList;
  renderApp();
};

/*Add to cart button compenents */
const AddToCartButton = ({ message, onClick }) => (
  <button className="add-to-cart-btn" onClick={onClick}>
    {message}
  </button>
);

/*Product components */
const Product = ({ id, name, price,count, inCart}) => (
  <li >
    <div >
      Product: {name} <br />
      Price: {price} <br />
      count:{count} <br />
      {!inCart && (
        <AddToCartButton
          message="Add to cart"
          onClick={addToCart.bind(null, id)}
        />
      )}
    </div>
  </li>
);

/*Product list components */
const ProductList = () => (
  <React.Fragment>
    <h2>Products List</h2>
    <ul>
    {products.map(product => <Product key={product.id} {...product} />)}

    </ul>
  </React.Fragment>
);

/*CartList components */
const CartList = () =>(
  <React.Fragment>
      <h2>Cart List</h2>
      <ul>
      {cart.map(product => <Product keyCart={product.id} {...product} />)}
      </ul>
  </React.Fragment>
  
);

/*Root react component App */
const App = () => (
  <div >
    <button onClick={goToCart}>
       {`Cart(${cart.length})`}
    </button>
   {currentPage===pages.productList?<ProductList/>:<CartList/>}
  </div>
);

/*Function to render components */
renderApp();
export default App;
