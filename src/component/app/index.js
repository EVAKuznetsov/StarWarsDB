import React,{Component} from 'react'
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button'

export default class App extends Component{
    state = {
        showPlanet:true
    }
    handleClickPlanet = () =>{
        this.setState(({showPlanet})=>{
            return {showPlanet:!showPlanet}
        })
    }
    
    render(){
        const randomPlanet = this.state.showPlanet?  <RandomPlanet />:null;  
        return(
            <div className="container">
                <Header />
                {randomPlanet}
                <button className="btn btn-success btn-menu" onClick={this.handleClickPlanet}>toggle random planet</button>
                <ErrorButton />  
                <PeoplePage />                              
                
             </div>
        )
    }
}