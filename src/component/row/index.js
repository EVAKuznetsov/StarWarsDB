import React from 'react'


export default function Row ({left,right}){
    return(
    <div className="row">
        <div className="col-md-6">
            {left}
        </div>
        <div className="col-md-6">
            {right}
        </div>
    </div>
)}