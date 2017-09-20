import React, { Component } from 'react';
import './Artist.css'; 

export default class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {flipped: false}
  }

  render() {
    const clickedArtist = ()=>{this.setState({flipped: !this.state.flipped})}
    return (  
    <div className={this.state.flipped ? 'flipped artist-card' : 'artist-card'} onClick={clickedArtist}>
      <div className="bio-box">
        <h2> {this.props.name} </h2>
        <p>{this.props.description}</p>
      </div>
      <div>
        <img src={this.props.profilePic} />
        <br />
        <h2> {this.props.name} </h2>
      </div>
    </div>
  )}
}
// export default (props) => (
//   <div>
//     <img src={props.profilePic} />
//     <br />
//     <h2> {props.name} </h2>
//   </div>
//   )
