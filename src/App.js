import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './Navbar';
export default class App extends Component {
  
  render() {
    
    return (
       <Provider store = {store}> 
        <Navbar />
        </Provider>
    )
  }
  
}
