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
      this.setState((prevState,props) => {
        let newTopLeft = prevState.topLeft;
        newTopLeft = parseInt(ev.target.value);
        return {
          topLeft: newTopLeft
        }
      })
      
  }
    if(ev.target.id === 'Top Right') {
      this.setState((prevState,props) => {
        let newTopRight = prevState.topRight;
        newTopRight = parseInt(ev.target.value);
        return {
          topRight: newTopRight
        }
      })
    }

    if(ev.target.id === 'Bottom Right') {
      let newBottomRight = this.state.bottomRight;
      newBottomRight = ev.target.value;
      this.setState({bottomRight: newBottomRight})
    }
    
    if(ev.target.id === 'Bottom Left') {
      let newBottomLeft = this.state.bottomLeft;
      newBottomLeft = ev.target.value;
      this.setState({bottomLeft: newBottomLeft})
    }

    if(ev.target.id === 'Top Left Horizontal') {
      let newTopLeftHor = this.state.topLeftHor;
      newTopLeftHor = ev.target.value;
      this.setState({topLeftHor: newTopLeftHor})
    }
    if(ev.target.id === 'Top Left Vertical') {
      let newTopLeftVer = this.state.topLeftVer;
      newTopLeftVer = ev.target.value;
      this.setState({topLeftVer: newTopLeftVer})
    }
    if(ev.target.id === 'Top Right Horizontal') {
      let newTopRightHor = this.state.topRightHor;
      newTopRightHor = ev.target.value;
      this.setState({topRightHor: newTopRightHor})
    }
    if(ev.target.id === 'Top Right Vertical') {
      let newTopRightVer = this.state.topRightVer;
      newTopRightVer = ev.target.value;
      this.setState({topRightVer: newTopRightVer})
    }
    if(ev.target.id === 'Bottom Right Horizontal') {
      let newBottomRightHor = this.state.bottomRightHor;
      newBottomRightHor = ev.target.value;
      this.setState({bottomRightHor: newBottomRightHor})
    }
    if(ev.target.id === 'Bottom Right Vertical') {
      let newBottomRightVer = this.state.bottomRightVer;
      newBottomRightVer = ev.target.value;
      this.setState({bottomRightVer: newBottomRightVer})
    }
    if(ev.target.id === 'Bottom Left Horizontal') {
      let newBottomLeftHor = this.state.bottomRightHor;
      newBottomLeftHor = ev.target.value;
      this.setState({bottomLeftHor: newBottomLeftHor})
    }
    if(ev.target.id === 'Bottom Left Vertical') {
      let newBottomLeftVer = this.state.bottomLeftVer;
      newBottomLeftVer = ev.target.value;
      this.setState({bottomLeftVer: newBottomLeftVer})
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
    if(this.state.alert) {
      return;
    } else {
      this.displayAlert()
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
