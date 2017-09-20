import React, { Component } from 'react';
import Artist from './Artist.js';
import './ArtistSection.css'


const artistsList = [
          {
            profilePic: 'https://static01.nyt.com/images/2011/05/22/arts/ARCANGEL-4-SUB/ARCANGEL-4-SUB-popup.jpg',
            name: 'Cory Arcangel',
            description: 'Lorem Ipsum'
          },
          {
            profilePic: 'https://www.lococofineart.com/wp-content/uploads/2016/03/arts-graphics-slid_1194386a.jpg',
            name: 'Keith Haring',
            description: 'Lorem Ipsum'
          },
          {
            profilePic: 'https://pbs.twimg.com/profile_images/557492008659345409/m1INL_zM.jpeg',
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
