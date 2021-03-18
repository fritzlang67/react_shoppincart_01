import React, { useState } from 'react';
import './App.css';

function App() {

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
    }

])

  return (
   <div className="App">
      <h1>Product</h1>
      <div className="products">
      {products.map(product => (

        <div className="products" >
        <h2>{product.name}</h2>
        <br/>
        <h2><img src={product.image} alt={product.name} /></h2>
        <br/>
        <h2>{product.cost}</h2>
        <br/>
        </div>
      ))}
        </div>
  </div>
  );
}

export default App;
