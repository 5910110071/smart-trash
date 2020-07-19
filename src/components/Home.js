import React, { Component } from 'react';
import Header from './Header';
import ShowMap from "../components/map.js/ShowMap"



class Home extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Header/>
        <ShowMap/>

      </div>
    );
  }
}


export default Home;
