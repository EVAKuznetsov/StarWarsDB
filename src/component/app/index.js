import React,{Component} from 'react'
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button'
import {SwapiService,TestSwapiService} from '../../services'
import { SwapiServiceContext } from '../swapi-service-context';

export default class App extends Component{
    swapiService = new SwapiService()
    state = {
        showPlanet:true,
        swapiService:new SwapiService()
    }
    handleClickPlanet = () =>{
        this.setState(({showPlanet})=>{
            return {showPlanet:!showPlanet}
        })
    }
    onChangeService=()=>{
        this.setState(({swapiService})=>{
            return {
                swapiService:swapiService instanceof SwapiService?new TestSwapiService():new SwapiService()
            }
        })
    }
    
    render(){
        const randomPlanet = this.state.showPlanet?  <RandomPlanet />:null;  
        return(
            <SwapiServiceContext.Provider value={this.state.swapiService}>{/* ОБЯЗАТЕЛЬНО В КОНТЕКСТЕ ПЕРЕДАВАТЬ ИМЕННО value!!!!!!!!!!!!!!!!*/}
                <div className="container">
                    <Header onChangeService={this.onChangeService}/>
                    {randomPlanet}
                    <button className="btn btn-success btn-menu" onClick={this.handleClickPlanet}>toggle random planet</button>
                    <ErrorButton />  
                    <PeoplePage /> 
                </div>
            </SwapiServiceContext.Provider>
        )
    }
}