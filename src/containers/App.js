import React, { Component } from 'react';
import './App.css';
import Shape from '../components/Shape/Shape'
import BorderRadius from '../components/BorderRadius/BorderRadius'
import Switcher from '../components/Switcher/Switcher'
import DimensionInput from '../components/DimensionInput/DimensionInput'
import CustomControls from '../components/CustomControls/CustomControls'

class App extends Component {

  render() {
    return (
    <div className="App">
      <h1 className="App-title">Border radius previewer</h1>
      <Shape/>
      <BorderRadius/>
      <CustomControls/>
    </div>
    
  );
  }
  
}

export default App;
