import React,{Component} from 'react';


export default class ErrorButton extends Component{
    state={
        errorButton:false
    }
    onToggleError=()=>{
        this.setState(({errorButton})=>{
            return {errorButton:!errorButton}
        })    
    }
    render(){
        if(this.state.errorButton){//заведомое условие для ошибки
            this.foo.bar=0;
        }
        return(
            <button className="btn btn-danger btn-menu" onClick = {this.onToggleError} >Throw Error</button>
        )
    }
}