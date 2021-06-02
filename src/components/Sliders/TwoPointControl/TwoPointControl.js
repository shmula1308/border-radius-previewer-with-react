import '../Sliders.css'

const twoPointControl = (props) => {
    return (
        <div className="Slider TwoPointControl">
            <div className="Slider slider-container">
                <h3 className="label">{props.label} Horizontal</h3>
                <input
                    id={props.label + " Horizontal"}
                    type="range"
                    min="0"
                    max="100"
                    value={props.pointOne}
                    onChange={props.change}
                    className="rangeInput"
                    
                />
            </div>
            <div className="Slider slider-container">
                <h3 className="label">{props.label} Vertical</h3>
                <input
                    id={props.label + " Vertical"}
                    type="range"
                    min="0"
                    max="100"
                    value={props.pointTwo}
                    onChange={props.change}
                    className="rangeInput"
                />
            </div>
        </div>
    )
}

export default twoPointControl;