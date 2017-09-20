import React, { Component } from 'react';
import './right-wrapper.css'; 
import Details from './Details.js'
import ProductsSection from './ProductsSection.js'


export default (props) => (
        <div className={props.windowClosed? 'right-wrapper' : 'closed right-wrapper' }>
        {this.state.current ? (
          <div className={this.state.current? 'extended right-panel' : 'right-panel' } >
            <a className="close-button" onClick={( 
                console.log('windowClosed')
                )} >
              <img src="http://freevector.co/wp-content/uploads/2013/03/8934-close-button1.png" />
            </a>
            <Details title={this.state.current.title} artist={this.state.current.artist} img={this.state.current.img} detailsDesc={this.state.current.detailsDesc} />
          </div>
        ) : (
        <div className="intro">
          <h3>What is the place of merchandise in high culture?</h3>
          <p>The Self-Brand Outlet is an online shop that sells the latest merchandise in contemporary art. </p>
          <p>Featuring the latest goods created by your favourite artists, we invite our shoppers to examine how these works might function as self-branding exercises, critique of marketing and commerce, neither, or both.</p>
        </div>
        )}
      </div>
  )