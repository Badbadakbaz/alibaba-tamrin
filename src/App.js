import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr/>
        <Body />
        <hr/>
        <Footer />
      </div>
    );
  }
}

export default App;