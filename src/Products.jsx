
import React, { useState } from 'react';

export default function Products({addToCart}){

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

  return (

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
}
