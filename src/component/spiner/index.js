import React from 'react'
import './spiner.css'

export default function Spiner(){
    return(

        <div className="lds-css ng-scope">            
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}