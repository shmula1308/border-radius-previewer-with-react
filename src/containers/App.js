import React, { Component } from 'react';
import './App.css';
import Shape from '../components/Shape/Shape'
import BorderRadius from '../components/BorderRadius/BorderRadius'
import CustomControls from '../components/CustomControls/CustomControls'
import OnePointControl from '../components/Sliders/OnePointControl/OnePointControl'
import TwoPointControl from '../components/Sliders/TwoPointControl/TwoPointControl'

class App extends Component {
  
  state = {
    customSize: false,
    fullControl: false,
    topLeft: 0
  }

  switchHandler = (ev) => {
    if(ev.target.closest('button').id === 'CustomSize') {
      const showCustomInputs =  this.state.customSize;
      this.setState({customSize: !showCustomInputs})
    } else {
      const showFullControl =  this.state.fullControl;
      this.setState({fullControl: !showFullControl})
    }
  }

  inputChangeHandler = (ev) => {
    if(ev.target.id === 'Top Left') {
      console.log(ev.target.value)
      this.setState({topLeft: ev.target.value})
    }
  }

  render() {
    
    const labels = ['Top Left', "Top Right", "Bottom Right", "Bottom Left"]
    let  sliders = null;
    if(!this.state.fullControl) {
      sliders =  labels.map((label,index) => (<OnePointControl key={index} label={label} change={this.inputChangeHandler} value={this.state.sliderValue}/>))
    } else {
      sliders =  labels.map((label,index) => (<TwoPointControl key={index} label={label} change={this.inputChangeHandler} value={this.state.sliderValue}/>))
    }
    return (
    <div className="App">
      <h1 className="App-title">Border radius previewer</h1>
      <Shape/>
      <BorderRadius/>
      <CustomControls click={this.switchHandler} display={this.state.customSize ? 'flex' : 'none'} customSizeToggle={this.state.customSize} fullControlToggle={this.state.fullControl}/>
      {sliders}
    </div>
   );
  }
  
}

export default App;
