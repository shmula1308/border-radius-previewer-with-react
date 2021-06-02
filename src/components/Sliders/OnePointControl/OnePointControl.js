import '../Sliders.css'

const onePointControl = (props) => {
    return (
        <div className="Slider">
            <h3 className="label">{props.label}</h3>
            <input
            id={props.label}
            type="range"
            min="0"
            max="100"
            value={props.pointOne}
            onChange={props.change}
            className="rangeInput"
            step='1'
            />
        </div>
    )
}

export default onePointControl;