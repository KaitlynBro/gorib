import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Services from './Services';
import Causes from './Causes';
import Info from './Info';
import Donate from './Donate';
import Stats from './Stats';
import Events from './Events';
import Volunteer from './Volunteer';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Header />
        <Services />
        <Causes />
        <Info />
        <Donate />
        <Stats />
        <Events />
        <Volunteer />
        <Footer />
      </div> 
    )
  }
}

export default App;  

// Hero with svg /  what we do (squares: fundraie / fostering / take care) / latest causes with circles / everything you need to kmow / stats (volunteres, donors, people save / upcoming events with image to left / become a volunteer / light footer with donate to mo kid hungry 
