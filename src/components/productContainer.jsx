import React from "react";

export default function ProductContainer({productName,imageitem,description}){
  return (
    
    <div className="prodContainer">
      <h2 style={{color:'rgb(255, 84, 61)',paddingLeft:'15px'}}>{productName}</h2>
      <h3 style={{color:'black',paddingLeft:'15px',margin:'0'}}>{description}</h3>
      <img src={imageitem} alt="" />
    </div>
  )
}