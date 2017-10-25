import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Main from './Main';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AboutPage from './AboutPage'
import CollectionsPage from './CollectionsPage'
import ArtistsPage from './ArtistsPage'
import SingleArtistPage from './ArtistsPage/artist'
import ArtistsList from './ArtistsPage/list'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/collections" component={CollectionsPage}/>
            <Route exact path="/artists" list={ArtistsList} component={ArtistsPage}/>
            <Route exact path="/artists/:id" list={ArtistsList} component={SingleArtistPage}/>
          </div>
          <Footer />
        </div>
      </Router> 
    );
  }
}

export default App;
