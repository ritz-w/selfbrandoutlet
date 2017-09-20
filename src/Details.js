import React, { Component } from 'react';
import './Details.css';

export default (props)=> (
  <div className="detail">
    <h2>{props.title}</h2>
    <h2>{props.artist}</h2>
    <img src={props.img} />
    <p>{props.detailsDesc}</p>
  </div>
);


