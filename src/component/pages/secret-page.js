import React from 'react'
import {Redirect} from 'react-router-dom'

const SecretPage=({isLoggedIn})=>{
    if(isLoggedIn){
        return(
            <div className="jumbotron">
                <h2>This content is full secret</h2>
            </div>
        )        
    }else{
        return(
            <Redirect to="/login" />
        )
    }
}
export default SecretPage