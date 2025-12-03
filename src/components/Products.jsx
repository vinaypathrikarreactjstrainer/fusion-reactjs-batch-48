import React from 'react'

const Products = (brandName) => {
    console.log('brandname =>', brandName);
  return (
    <>
     <div>
        <ul>
            <li>{brandName.brands[0]}</li>    
            <li>{brandName.brands[1]}</li>    
            <li>{brandName.brands[2]}</li>    
        </ul>    
    </div> 
    </>
  )
}

export default Products;
