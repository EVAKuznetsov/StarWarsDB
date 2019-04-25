import React from 'react'
import PropTypes from 'prop-types'


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
//проверяем, чтобы переданные props были с JSX и могли быть отрендереными
Row.propTypes = {
    left:PropTypes.node,
    right:PropTypes.node
}