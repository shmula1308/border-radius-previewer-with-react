import React, { Component } from 'react';
import './App.css';
import Shape from '../components/Shape/Shape'
import BorderRadius from '../components/BorderRadius/BorderRadius'
import CustomControls from '../components/CustomControls/CustomControls'
import OnePointControl from '../components/Sliders/OnePointControl/OnePointControl'
import TwoPointControl from '../components/Sliders/TwoPointControl/TwoPointControl'
import WithClass from '../hoc/WithClass'

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
    bottomLeftVer: 0,
    width: 500,
    height: 500,
    alert: false
  }

  switchHandler = (ev) => {
    if(ev.target.closest('button').id === 'CustomSize') {
      const showCustomInputs =  this.state.customSize;
      this.setState({customSize: !showCustomInputs})
    } else {
      const showFullControl =  this.state.fullControl;
      this.setState({
        fullControl: !showFullControl,
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
      })
    }
  }

  inputChangeHandler = (ev) => {
    if(ev.target.id === 'Top Left') {
      let newTopLeft = this.state.topLeft;
      newTopLeft = ev.target.value;
      this.setState({topLeft: newTopLeft})
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

  dimensionsHandler = (ev) => {
    if(ev.target.id === 'Width') {
      this.setState({width: ev.target.value})
    } else {
      this.setState({height: ev.target.value})
    }
  }

  displayAlert = () => {
    let alert = this.state.alert;
    this.setState({alert: !alert})
    setTimeout(() => {
      let alert = this.state.alert;
      this.setState({alert: !alert})
    },2000)
  }

  copyToClipboardHandler = (_,borderRadius) => {
    navigator.clipboard.writeText(borderRadius);
    this.displayAlert()
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
    <WithClass classes="App">
      <h1 className="App-title">Border radius previewer</h1>
      <Shape 
        fullControl={this.state.fullControl}
        tL={this.state.topLeft} 
        tR={this.state.topRight} 
        bR={this.state.bottomRight} 
        bL={this.state.bottomLeft} 
        tLH={this.state.topLeftHor} 
        tLV={this.state.topLeftVer} 
        tRH={this.state.topRightHor}
        tRV={this.state.topRightVer}
        bRH={this.state.bottomRightHor}
        bRV={this.state.bottomRightVer}
        bLH={this.state.bottomLeftHor}
        bLV={this.state.bottomLeftVer}
        width={this.state.width}
        height={this.state.height}
        alert={this.state.alert}
        />
      <BorderRadius 
        fullControl={this.state.fullControl}
        tL={this.state.topLeft} 
        tR={this.state.topRight} 
        bR={this.state.bottomRight} 
        bL={this.state.bottomLeft} 
        tLH={this.state.topLeftHor} 
        tLV={this.state.topLeftVer} 
        tRH={this.state.topRightHor}
        tRV={this.state.topRightVer}
        bRH={this.state.bottomRightHor}
        bRV={this.state.bottomRightVer}
        bLH={this.state.bottomLeftHor}
        bLV={this.state.bottomLeftVer}
        click={this.copyToClipboardHandler}
      />
      <CustomControls 
        click={this.switchHandler} 
        display={this.state.customSize ? 'flex' : 'none'} 
        customSizeToggle={this.state.customSize} 
        fullControlToggle={this.state.fullControl}
        width={this.state.width}
        height={this.state.height}
        change={this.dimensionsHandler}
      />
        {sliders}
    </WithClass>
   );
  }
  
}

export default App;
