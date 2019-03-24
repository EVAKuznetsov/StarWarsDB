import React from 'react'
import './error-indicator.css'

export default function ErrorIndicator(){
    return(
        <div className="error-block">
            <h4>Sorry!!!</h4>
            <span>Something went wrong...</span>
            <span>This problem will be fixed soon.</span>
        </div>
    )
};
