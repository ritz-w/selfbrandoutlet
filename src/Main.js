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
            img: 'https://cdn.shopify.com/s/files/1/0384/1853/products/Fuck-Negativity-Slides-SRF-032-2015-164-press-ih_2ddcd3f3-4e1d-4ec9-b2a0-01ef0ba38a79.jpg?v=1450367913',
            detailsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet interdum egestas. Etiam scelerisque mauris ut faucibus eleifend. Ut suscipit aliquam ligula, non posuere erat imperdiet sit amet. Suspendisse placerat eleifend justo. Cras vel dolor non odio rhoncus sagittis. Ut pellentesque tortor at felis luctus, eu lacinia libero elementum. Pellentesque.'
          },
          {
            id: 2,
            title: 'Kane-Zanmai (3 tastes of cash)', 
            artist: 'Chim-Pom',
            img: 'https://base-ec2if.akamaized.net/w=500,a=0,q=90,u=1/images/item/origin/484f099a7334568c7493ae4e1ff78297.jpg',
            detailsDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet interdum egestas. Etiam scelerisque mauris ut faucibus eleifend. Ut suscipit aliquam ligula, non posuere erat imperdiet sit amet. Suspendisse placerat eleifend justo. Cras vel dolor non odio rhoncus sagittis. Ut pellentesque tortor at felis luctus, eu lacinia libero elementum. Pellentesque.'
          },
          {
            id: 3,
            title: 'Pop Shop',
            artist: 'Keith Haring',
            img: 'https://artmarkit.com/wp-content/uploads/2014/06/Haring-radio-F.jpg',
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
        <SimpleSlider />
        <ProductsSection products={this.state.products} changeDetails={changeDetails} />
        <ArtistSection />
        <Footer />
    </main>

    )
  }
}


