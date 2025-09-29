import React from "react";
import Product from "../miniComponents/Product";


export default function ProductPanel({ products, productClicked }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-fit h-fit pt-4 gap-4 bg-orng-2xsm">
      {products.map((product, index) => (
        <Product
          productClicked={productClicked}
          product={product}
          key={index}
          img={product.img[1]}
          name={product.name}
          description={product.description}
          price={product.price}
          location={product.location}
        />
      ))}
    </div>
  );
}