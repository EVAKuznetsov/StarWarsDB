import React,{Component} from 'react'
import './app.css'
import Header from '../header'
import RandomPlanet from '../random-planet'
// import {RandomPlanetDetails} from '../sw-component';
import {SwapiService,TestSwapiService} from '../../services'
import { SwapiServiceContext } from '../swapi-service-context'
import {PeoplePage,PlanetPage, StarshipPage} from '../pages'
import {BrowserRouter as Router, Route} from 'react-router-dom'



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
        const randomPlanet = this.state.showPlanet?  <RandomPlanet swapiService = {this.state.swapiService}/>:null;  
        return(
            <SwapiServiceContext.Provider value={this.state.swapiService}>{/* ОБЯЗАТЕЛЬНО В КОНТЕКСТЕ ПЕРЕДАВАТЬ ИМЕННО value!!!!!!!!!!!!!!!!*/}
                <Router>
                    <div className="container">
                        <Header onChangeService={this.onChangeService}/>
                        {randomPlanet}
                        <button className="btn btn-success btn-menu" onClick={this.handleClickPlanet}>toggle random planet</button>
                        <Route exact path="/" render={()=><h2>Welcome to StarDB</h2>} />
                        <Route path ="/people/" component = {PeoplePage} />
                        <Route exact path ="/planets/" component = {PlanetPage} />
                        <Route exact path ="/starships/" component = {StarshipPage} />

                    </div>
                </Router>
            </SwapiServiceContext.Provider>
        )
    }
}