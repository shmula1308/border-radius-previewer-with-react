import './Shape.css'

const shape = (props) => {
    
    let css = {
        borderRadius:' 0% 0% 0% 0%',
        width: props.width + 'px',
        height: props.height + 'px'
    }

    if(!props.fullControl) {
        css.borderRadius = `${props.tL}% ${props.tR}% ${props.bR}% ${props.bL}%`
    } else {
        css.borderRadius = `${props.tLH}% ${props.tRH}% ${props.bRH}% ${props.bLH}% / ${props.tLV}% ${props.tRV}% ${props.bRV}% ${props.bLV}%`
    }
    
    return (
        <div className="Shape">
            <div className="result" style={css}></div>
            {/* <div class="copied-to-clipboard-alert">Copied to clipboard &#975</div> */}
        </div>
    )
}

export default shape;