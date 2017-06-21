import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photoapp  from './protoapp';   
import city from './city.json';
import Photo from './photo'; 

class App extends Component {
	 renderPhotos() {
        let resultsArray = [];
        city.cityinfo.map((item, i) =>{
            resultsArray.push(<Photo item={item} key={i} />);
        });
        return resultsArray;
    } 
  render() {
    return (
      <div className="frontpage"> 
       <Photoapp /> 
        {this.renderPhotos()} 
      </div>
    );
  }
}

export default App;
