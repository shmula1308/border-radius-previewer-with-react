import React from 'react'

const wrapComponent = (WrappedComponent, className) => {
    return props => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default wrapComponent;