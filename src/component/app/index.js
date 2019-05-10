import React,{Component} from 'react'
import './app.css'
import Header from '../header'
import RandomPlanet from '../random-planet'
// import {RandomPlanetDetails} from '../sw-component';
import {SwapiService,TestSwapiService} from '../../services'
import { SwapiServiceContext } from '../swapi-service-context'
import {PeoplePage,PlanetPage, StarshipPage,LoginPage,SecretPage} from '../pages'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { StarshipDetails } from '../sw-component';
import {Record} from '../item-details'


export default class App extends Component{
    swapiService = new SwapiService()
    state = {
        showPlanet:true,
        swapiService:new SwapiService(),
        isLoggedIn:false
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
    onLoggin=()=>{
        this.setState({isLoggedIn:true})
    }
    outLoggin=()=>{
        this.setState({isLoggedIn:false})
    }
    
    render(){
        const {isLoggedIn} = this.state;
        const randomPlanet = this.state.showPlanet?  <RandomPlanet swapiService = {this.state.swapiService}/>:null;  
        return(
            <SwapiServiceContext.Provider value={this.state.swapiService}>{/* ОБЯЗАТЕЛЬНО В КОНТЕКСТЕ ПЕРЕДАВАТЬ ИМЕННО value!!!!!!!!!!!!!!!!*/}
                <Router>
                    <div className="container">
                        <Header onChangeService={this.onChangeService}/>
                        {randomPlanet}
                        <button className="btn btn-success btn-menu" onClick={this.handleClickPlanet}>toggle random planet</button>
                        <Switch>{/*нужен для того, чтобы срабатывал только однин внутренний route, как только один сработал, все остальные игнорируются*/}
                            <Route exact path="/" render={()=><h2>Welcome to StarDB</h2>} />
                            <Route path ="/people/:id?" component = {PeoplePage} />{/*/people/:id? такой синтаксис позволяет нам добавить опциональный параметр, тоесть компонента будет отрендерена как с id, так и без него */}
                            <Route exact path ="/planets" component = {PlanetPage} />
                            <Route exact path ="/starships/" component = {StarshipPage} />
                            <Route path = "/starships/:id" render={({match})=>{
                                    const {id} = match.params;
                                    return(<StarshipDetails itemId={id}>
                                            <Record label = 'Model' field = 'model' />
                                            <Record label = 'Manufacturer' field = 'manufacturer' />
                                            <Record label = 'Cost' field = 'costInCredits' />
                                            <Record label = 'Length' field = 'length' />
                                            <Record label = 'Passengers' field = 'passengers' />
                                </StarshipDetails>)
                                }} />
                            <Route path ="/login" render={()=><LoginPage isLoggedIn={isLoggedIn} onLoggin={this.onLoggin} outLoggin={this.outLoggin}/>} />
                            <Route path ="/secret" render={()=> <SecretPage isLoggedIn={isLoggedIn} />} />
                            <Redirect to="/" />{/*Если ни одна из существующих страниц не совпадает с адресной строкой, то происходит редирект на главную, строка ниже, как альтернаатива, выводит сообщение, что страницы не найдено*/}
                            {/* <Route render ={()=><h2>Page not found</h2>} /> */}
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceContext.Provider>
        )
    }
}
