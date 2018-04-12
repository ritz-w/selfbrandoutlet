import React, { Component } from 'react';
import Artist from './Artist.js';
import './ArtistSection.css'


const artistsList = [
          {
            profilePic: '/biopics/cory_arcangel.jpg',
            name: 'Cory Arcangel',
            description: 'A man with a plan.'
          },
          {
            profilePic: '/biopics/keith_haring.jpg',
            name: 'Keith Haring',
            description: 'Famous for dancing graffiti men.'
          },
          {
            profilePic: '/biopics/chim_pom.jpg',
            name: 'ChimPom',
            description: 'OMG OMG OMG.'
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
