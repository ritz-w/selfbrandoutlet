import React, { Component } from 'react';
import './Products.css'; 

export default (props) => (
  <div className="products">
  {props.products.length ? props.products.map(one => (
    <a onClick={()=> props.changeDetails(one.id)}>{one.title}</a>
)) : (
    <div> Loading Products! </div>
    )}
  </div>
);