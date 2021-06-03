import './BorderRadius.css'

const borderRadius = (props) => {
    let borderRadius = ' 0% 0% 0% 0%'

    if(!props.fullControl) {
        borderRadius = `${props.tL}% ${props.tR}% ${props.bR}% ${props.bL}%`
    } else {
        borderRadius = `${props.tLH}% ${props.tRH}% ${props.bRH}% ${props.bLH}% / ${props.tLV}% ${props.tRV}% ${props.bRV}% ${props.bLV}%`
    }
    return (
        <div className="BorderRadius">
            <h4 className="label">border-radius:</h4>
            <div className="css-value">
              {borderRadius}
            </div>
            <button type="button" className="btn">Copy</button>
        </div>
    )
}

export default borderRadius;