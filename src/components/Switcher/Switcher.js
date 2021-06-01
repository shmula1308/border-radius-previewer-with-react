import './Switcher.css'

const switcher = () => {
    return (
            <div className="Switcher">
              <label htmlFor="custom-size-btn" className="label"
                >Custom size:</label>
              <button id="custom-size-btn" className="custom-dimensions-btn btn">
                <span className="toggle"></span>
              </button>
            </div>
    )
}


export default switcher;