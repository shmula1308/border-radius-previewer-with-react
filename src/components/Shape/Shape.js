import React from 'react'
import './Shape.css'

const shape = (props) => {
    
    let css = {
        borderRadius:' 0% 0% 0% 0%',
        width: props.width + 'px',
        height: props.height + 'px',
    }

    if(!props.fullControl) {
        css.borderRadius = `${props.tL}% ${props.tR}% ${props.bR}% ${props.bL}%`
    } else {
        css.borderRadius = `${props.tLH}% ${props.tRH}% ${props.bRH}% ${props.bLH}% / ${props.tLV}% ${props.tRV}% ${props.bRV}% ${props.bLV}%`
    }

    const cssClasses = [];
    if(!props.alert) {
        cssClasses.push('alert')
    }else {
        cssClasses.push('alert','active')
        
    }
 
    return (
        <React.Fragment>
            <div className="Shape">
                <div className="result" style={css}></div>   
            </div>
            <div className={cssClasses.join(" ")}>Copied to clipboard <i className="fas fa-hands-wash"></i></div>
        </React.Fragment>
    )
}

export default shape;