import React, { Component } from 'react';
import './Main.css'; 
import ProductsSection from './ProductsSection.js'
import Details from './Details.js'
import Footer from './Footer.js'
import ArtistSection from './ArtistSection.js'
import SimpleSlider from './SimpleSlider.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      current: null,
      rightOpen: null
      } 
    this.windowClosed = this.windowClosed.bind(this);
    setTimeout(() => {
      this.setState({
        rightOpen: true,
        products: [
          {
            id: 1,
            title: 'Arcangel Surfware',
            artist: 'Cory Arcangel',
            img: '/img/coryarc1.jpg',
            detailsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet interdum egestas. Etiam scelerisque mauris ut faucibus eleifend. Ut suscipit aliquam ligula, non posuere erat imperdiet sit amet. Suspendisse placerat eleifend justo. Cras vel dolor non odio rhoncus sagittis. Ut pellentesque tortor at felis luctus, eu lacinia libero elementum. Pellentesque.'
          },
          {
            id: 2,
            title: 'Kane-Zanmai (3 tastes of cash)', 
            artist: 'Chim-Pom',
            img: '/img/chimpom.jpeg',
            detailsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet interdum egestas. Etiam scelerisque mauris ut faucibus eleifend. Ut suscipit aliquam ligula, non posuere erat imperdiet sit amet. Suspendisse placerat eleifend justo. Cras vel dolor non odio rhoncus sagittis. Ut pellentesque tortor at felis luctus, eu lacinia libero elementum. Pellentesque.'
          },
          {
            id: 3,
            title: 'Pop Shop',
            artist: 'Keith Haring',
            img: '/img/keith1.jpg',
            detailsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet interdum egestas. Etiam scelerisque mauris ut faucibus eleifend. Ut suscipit aliquam ligula, non posuere erat imperdiet sit amet. Suspendisse placerat eleifend justo. Cras vel dolor non odio rhoncus sagittis. Ut pellentesque tortor at felis luctus, eu lacinia libero elementum. Pellentesque.'
          }
        ]
      });
    }, 1000);
  }

  windowClosed() {
    this.setState(prevState => ({
      rightOpen: false
    }));
  }

  render() {
    const changeDetails = (id) => {
      this.setState( {
        current: this.state.products.find(one => one.id === id),
        rightOpen: true
      });
    }


    return (
    <main>
        <SimpleSlider className="top-section" />
        <div className="bottom-section">
        <ProductsSection products={this.state.products} changeDetails={changeDetails} />
        <ArtistSection />
        </div>
        <Footer />
    </main>

    )
  }
}


