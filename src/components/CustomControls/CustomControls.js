import './CustomControls.css'
import Switcher from '../Switcher/Switcher'
import DimensionInput from '../DimensionInput/DimensionInput'

const customControls = () => {
    return (
        <div className='CustomControls'>
            <div>
                <Switcher/>
                <Switcher/>
            </div>
            <div style={{display: 'flex', alignSelf:'flex-start'}}>
                <DimensionInput/>
                <DimensionInput/>
            </div>
        </div>
    )
}

export default customControls;