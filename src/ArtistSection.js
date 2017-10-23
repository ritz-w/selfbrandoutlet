import React, { Component } from 'react';
import Artist from './Artist.js';
import './ArtistSection.css'


const artistsList = [
          {
            profilePic: '/biopics/cory_arcangel.jpg',
            name: 'Cory Arcangel',
            description: 'Lorem Ipsum'
          },
          {
            profilePic: '/biopics/keith_haring.jpg',
            name: 'Keith Haring',
            description: 'Lorem Ipsum'
          },
          {
            profilePic: '/biopics/chim_pom.jpg',
            name: 'ChimPom',
            description: 'Lorem Ipsum'
          },
        ]

export default() => ( 
  <div className="artists-section">
  <h2>Browse by Artist</h2>
    <div className="row">
      {artistsList.map (one => (
        <Artist name={one.name} profilePic={one.profilePic} description={one.description} />
        ))
      }
    </div>
    </div>
)
