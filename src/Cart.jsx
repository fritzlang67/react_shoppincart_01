
import React from 'react';
export default function Cart(){

  return (

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
}
