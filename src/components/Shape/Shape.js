import './Shape.css'

const shape = () => {
    let borderRadius = {
        borderRadius: `10% 4% 40% 30% / 20% 70% 20% 50%`
    }
    return (
        <div className="Shape">
            <div className="result" style={borderRadius}></div>
            {/* <div class="copied-to-clipboard-alert">Copied to clipboard &#975</div> */}
        </div>
    )
}

export default shape;