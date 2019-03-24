import React,{Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator'

export default class RandomPlanet extends Component{
    swapiService = new SwapiService();
    state = {
        planet:{},
        isLoading:true,
        error:false
    }
    // constructor(){
    //     super()
    //     this.getRandomPlanet()
    // }
    componentDidMount(){
        this.getRandomPlanet();
        this.timerRandomPlaner=setInterval(this.getRandomPlanet,7000);
    }
    componentWillUnmount(){
        clearInterval(this.timerRandomPlaner);
    }
    //Записываем данные о планете в state, предварительно получая картинку
    onPlanetLoaded=(planet,id)=>{
        //this.setState({planet})
        this.swapiService.getPlanetImg(id)
            .then((img)=>{
                this.setState({
                    planet:{img,...planet},
                    isLoading:false,
                    error:false
                })            
            })
            // .catch((e)=>{console.log(this.error)})//отлавливает ошибку, если картинка не получена
    }
    //Из API получаем массив данных о планете
    getRandomPlanet=()=>{
        const id = Math.floor(Math.random()*25+2);
        // const id = 26;
        //this.swapiService.getPlanet(id).then(this.onPlanetLoaded);// можно использовать стрелочную функцию в then "(planet)=>this.onPlanetLoaded(planet)" - тот же самый код, но читабельней
        this.swapiService.getPlanet(id)
            .then((planet)=>this.onPlanetLoaded(planet,id))
            .catch(this.error)
    }
    error=(err)=>{
        this.setState({
            error:true,
            isLoading:false
        })
    }
    render(){         
        const {planet,isLoading,error}=this.state; 
        const hasData = !(error||isLoading);
        const errorMessage = error?<ErrorIndicator />:null;
        const spiner = isLoading?<Spiner />:null;
        const content = hasData?<PlanetView planet={planet} /> : null;
        return(
            <div className="random-planet jumbotron">
                    {errorMessage}
                    {spiner}
                    {content}               
            </div>
            
        )
    }
}

const PlanetView = ({planet})=>{
    const{img,population,rotationPeriod,diameter,name}=planet;
    return(
        <>
        <img src={img} alt="" className="planet-img" />
        <div className="col">
            <h4>{name}</h4>
            <ul className="list-group-flush">
                <li className="list-group-item">
                    <span className="term">Population</span>
                    {population}
                </li>
                <li className="list-group-item">
                    <span className="term">Rotation period</span>
                    {rotationPeriod}
                </li>
                <li className="list-group-item">
                    <span className="term">Diameter</span>
                    {diameter}
                </li>
            </ul>
        </div>
        </>
    )
}