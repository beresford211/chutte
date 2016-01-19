import React, {Component} from 'react';
import Navbar from '../components/navbar';
import HomeJumbo from '../components/homeJumbotron';
import DevTools from './devTools';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HomeJumbo/>
        <DevTools/>
      </div>
    )
  }
}