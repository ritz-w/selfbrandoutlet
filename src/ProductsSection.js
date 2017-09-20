import React, { Component } from 'react';
import './ProductsSection.css'; 

export default (props) => (
  <div className="products-section">
  <h2>Featured Products</h2>
    <div className="row">
      <div className="product-card">
        {props.products.length ? props.products.map(one => (
          <img className="product-image" src={one.img} onClick={()=> props.changeDetails(one.id)} />
        )) : (
        <div> Loading Products! </div>
          )}
      </div>
    </div>
  </div>
);