import './DimensionInput.css'

const dimensionInput = () => {
    return (
        <div className="DimensionInput">
            <div className="container">
                <label htmlFor="width">Width</label>
                <input 
                    type="number" 
                    id="width" 
                    value="500" 
                    min="1" 
                    max="500" />
            </div>
        </div>

    )
}

export default dimensionInput;