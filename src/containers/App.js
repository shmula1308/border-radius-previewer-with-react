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
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0,
    topLeftHor: 0,
    topLeftVer: 0,
    topRightHor: 0,
    topRightVer: 0,
    bottomRightHor: 0,
    bottomRightVer: 0,
    bottomLeftHor: 0,
    bottomLeftVer: 0
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
      this.setState({topLeft: ev.target.value})
    }
    if(ev.target.id === 'Top Right') {
      this.setState({topRight: ev.target.value})
    }
    if(ev.target.id === 'Bottom Right') {
      this.setState({bottomRight: ev.target.value})
    }
    if(ev.target.id === 'Bottom Left') {
      this.setState({bottomLeft: ev.target.value})
    }

    if(ev.target.id === 'Top Left Horizontal') {
      this.setState({topLeftHor: ev.target.value})
    }
    if(ev.target.id === 'Top Left Vertical') {
      this.setState({topLeftVer: ev.target.value})
    }
    if(ev.target.id === 'Top Right Horizontal') {
      this.setState({topRightHor: ev.target.value})
    }
    if(ev.target.id === 'Top Right Vertical') {
      this.setState({topRightVer: ev.target.value})
    }
    if(ev.target.id === 'Bottom Right Horizontal') {
      this.setState({bottomRightHor: ev.target.value})
    }
    if(ev.target.id === 'Bottom Right Vertical') {
      this.setState({bottomRightVer: ev.target.value})
    }
    if(ev.target.id === 'Bottom Left Horizontal') {
      this.setState({bottomLeftHor: ev.target.value})
    }
    if(ev.target.id === 'Bottom Left Vertical') {
      this.setState({bottomLeftVer: ev.target.value})
    }
  }

  render() {
    

    let  sliders = null;
    if(!this.state.fullControl) {
      sliders = (
        <React.Fragment>
          <OnePointControl  label='Top Left' change={this.inputChangeHandler} pointOne={this.state.topLeft}/>
          <OnePointControl  label='Top Right' change={this.inputChangeHandler} pointOne={this.state.topRight}/>
          <OnePointControl  label='Bottom Right' change={this.inputChangeHandler} pointOne={this.state.bottomRight}/>
          <OnePointControl  label='Bottom Left' change={this.inputChangeHandler} pointOne={this.state.bottomLeft}/>
        </React.Fragment>
      )
    } else {
      sliders = (
        <React.Fragment>
            <TwoPointControl  label='Top Left' change={this.inputChangeHandler} pointOne={this.state.topLeftHor} pointTwo={this.state.topLeftVer}/>
            <TwoPointControl  label='Top Right' change={this.inputChangeHandler} pointOne={this.state.topRightHor} pointTwo={this.state.topRightVer}/>
            <TwoPointControl  label='Bottom Right' change={this.inputChangeHandler} pointOne={this.state.bottomRightHor} pointTwo={this.state.bottomRightVer}/>
            <TwoPointControl  label='Bottom Left' change={this.inputChangeHandler} pointOne={this.state.bottomLeftHor} pointTwo={this.state.bottomLeftVer}/>
        </React.Fragment>
      )
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
