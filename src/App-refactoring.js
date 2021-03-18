import React, { useState } from 'react';
import './App.css';

function App() {
  const [products] = useState([
    {
    name: 'AA Battery'  ,
    cost: '$2.99',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwXCwq0qtOHsHKffIJkrbvlSr4J0jpLpaNTD1Ozmb5w152uUYfBdgxP5KZFg&usqp=CAc"
  },
  {
  name: 'Blanket'  ,
  cost: '$12.99',
  image: "https://www.tchibo.de/newmedia/art_img/MAIN-CENSHARE/5e59947aa8632df6/4-jahreszeiten-steppbett-uebergroesse.jpg"
}
  ])

  return (
   <div className="App">
      <h1>Product</h1>

   {products.map(product => (

    <div>
    <h3>{product.name}</h3>
    <h4>{product.cost}</h4>
    <img src={product.image} alt={product.name}  />

    <button>add to Cart</button>

    </div>
  ))}

  </div>
  );
}

export default App;
