import React from 'react'
import ProductCard from "./ProductCard"
import dataProductList from "../data/dataProductList.json"

function ProductList(props) {
  let id = props.videoId;
  return (
    <>
      {console.log(props.videoId)}
      {
        dataProductList.map((res, index) => {
          if(res.videoId == id){
            return(
              <ProductCard title = {res.title} imgProduct = {res.imgProduct} price = {res.price}/>
            )
          }
      })}
    </>
  )
}

export default ProductList