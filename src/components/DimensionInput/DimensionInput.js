import './DimensionInput.css'

const dimensionInput = (props) => {
    return (
        <div className="DimensionInput">
            <div className="container">
                <label htmlFor={props.label}>{props.label}</label>
                <input 
                    type="number" 
                    id={props.label} 
                    value={props.value} 
                    min="1" 
                    max="500"
                    onChange={props.change}
                />
            </div>
        </div>

    )
}

export default dimensionInput;