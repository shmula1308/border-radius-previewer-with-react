import './CustomControls.css'
import Switcher from '../Switcher/Switcher'
import DimensionInput from '../DimensionInput/DimensionInput'

const customControls = (props) => {
    return (
        <div className='CustomControls'>
            <div>
                <Switcher label="Custom Size:" click={props.click} id="CustomSize" toggle={props.customSizeToggle}/>
                <Switcher label="Full Control:" click={props.click} id="FullControl" toggle={props.fullControlToggle}/>
            </div>
            <div style={{display: `${props.display}`, alignSelf:'flex-start'}}>
                <DimensionInput label="Width"/>
                <DimensionInput label="Height"/>
            </div>
        </div>
    )
}

export default customControls;