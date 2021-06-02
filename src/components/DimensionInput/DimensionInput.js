import './DimensionInput.css'

const dimensionInput = (props) => {
    return (
        <div className="DimensionInput">
            <div className="container">
                <label htmlFor="width">{props.label}</label>
                <input 
                    type="number" 
                    id="width" 
                    value="500" 
                    min="1" 
                    max="500"readOnly />
            </div>
        </div>

    )
}

export default dimensionInput;