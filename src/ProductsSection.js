import React, { Component } from 'react';
import './ProductsSection.css';
import Product from './Product.js';

export default (props) => (
  <div className="products-section">
    <h2>Featured Products</h2>
      <div className="row">
      {props.products.length ? props.products.map(one => (
        <Product title={one.title} artist={one.artist} img={one.img} />
      )) : (null)}
      </div>
  
  </div>
);