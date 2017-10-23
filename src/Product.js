import React, { Component } from 'react';
import './Product.css'; 

export default (props) => (
  <div className="product">
    <h3>
      {props.title}<br />
      {props.artist}
    </h3>
    <img src={props.img} onClick={()=> {}} />
  </div>
);