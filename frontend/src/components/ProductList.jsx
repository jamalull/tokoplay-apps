import React, { useContext } from 'react'
import ProductCard from "./ProductCard"
// import dataProductList from "../data/dataProductList.json"
import { GlobalContext } from "../context/GlobalContext";

function ProductList(props) {
  
  const { state } = useContext(GlobalContext);
  const { dataProduct } = state;
  
  let id = props.videoId;

  return (
    <>
      { dataProduct !== null && 
        dataProduct.map((res, index) => {
          if(res.videoId == id){
            return(
              <ProductCard key={index} title = {res.title} imgProduct = {res.imgProduct} linkProduct = {res.linkProduct} price = {res.price}/>
            )
          }
      })}
    </>
  )
}

export default ProductList