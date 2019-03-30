import React,{Component} from 'react';
import ErrorIndicator from '../error-indicator'

export default class extends Component{
    state = {
        hasError:false
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return(
                <div className="col-12 jumbotron">
                    <ErrorIndicator />
                </div> 
            )
        }
        return(this.props.children)
    }
}