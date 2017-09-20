import React, { Component } from 'react';
import './nav.css';
import {
  Link
} from 'react-router-dom'

export default (props) => (
  <nav>
    <div className="site-title">Self Brand Outlet</div>
    <div className="menu-section">
      <ul className="menu-list">
        <li><Link to= "/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/collections"><a>Collections</a></Link></li>
        <li><Link to="/artists"><a>Artists</a></Link></li>
      </ul>
    </div>
  </nav>
);