import React from 'react'
const LoginPage = ({isLoggedIn,onLoggin,outLoggin})=>{
    if(isLoggedIn){
        return(
            <div className="jumbotron">
                <p>You are logged</p>
                <button className="btn btn-danger"
                        onClick={outLoggin}
                    >Log Out
                    </button>
            </div>
        )
    }else{
        return(
            <div className="jumbotron">
                <p>Login to see secret page</p>
                <button className="btn btn-primary"
                    onClick={onLoggin}
                >Log In
                </button>
            </div>
        )
    }
}
export default LoginPage