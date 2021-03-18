import React, { useState } from 'react';
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART= 'cart';

function App() {

const [cart, setCart] = useState([]);
const [page, setPage] = useState('products');


const [products] = useState([
    {
    name: "Toaster",
    cost:"13,99 €",
    image:"https://m.media-amazon.com/images/I/71hqSsi92pL._AC_UY218_.jpg"
    },
    {
    name: "Decke",
    cost:"26,99 €",
    image:"https://www.nordicnest.de/4ae8e1/globalassets/product-pictures/klippan-yllefabrik/21285-07-012.jpg?quality=80&format=webp&width=740"
    },
    {
    name: "Decke",
    cost:"26,99 €",
    image:"https://www.nordicnest.de/4ae8e1/globalassets/product-pictures/klippan-yllefabrik/21285-07-012.jpg?quality=80&format=webp&width=740"
    }

])

const addToCart = (product) => {
  setCart([ ...cart, {...product}]);
}

const removeFromCart = (productToRemove) => {
  // filter function
  setCart(
    cart.filter((product) => product !== productToRemove)
  );
}

const navigateTo = (nextPage) => {
  setPage(nextPage);
}


// one could pass products as
// const renderProducts =(products)
const renderProducts = () => (
  <>
   <h1>Product</h1>
   <div className="products">
   {products.map((product, idx) => (

     <div className="product" key={idx} >
     <h2>{product.name}</h2>
     <br/>
     <h2><img src={product.image} alt={product.name} /></h2>
     <br/>
     <h2>{product.cost}</h2>
     <br/>
     <button onClick={() => addToCart(product)}>
     Add to cart
     </button>
     </div>
   ))}
     </div>
     </>
)

const renderCart = () => (
  <>
   <h1>Cart</h1>
   <div className="products">
   {cart.map((product, idx) => (

     <div className="product" key={idx} >
     <h2>{product.name}</h2>
     <br/>
     <h2><img src={product.image} alt={product.name} /></h2>
     <br/>
     <h2>{product.cost}</h2>
     <br/>
     <button onClick={() =>  removeFromCart(product)}>
     Remove
     </button>
     </div>
   ))}
     </div>
     </>
)


  return (
   <div className="App">

   <header>
   <button onClick={()=> navigateTo(PAGE_CART) }> Go to Cart ({cart.length})</button>
   <button onClick={()=> navigateTo(PAGE_PRODUCTS) }> View Product </button>
   </header>
   {page === PAGE_PRODUCTS && renderProducts()}
   {page === PAGE_CART && renderCart()}
  </div>
  );
}

export default App;
