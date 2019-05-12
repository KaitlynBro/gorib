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