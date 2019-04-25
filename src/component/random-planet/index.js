import React,{Component} from 'react';
import './random-planet.css';
import Spiner from '../spiner';
import ErrorIndicator from '../error-indicator'
import PropTypes from 'prop-types';

export default class RandomPlanet extends Component{
    // эксперементальный синтаксис объявления props по умолчанию
    static defaultProps = {
        intervalUpdate:10000
    }
    static propTypes = {
        intervalUpdate:PropTypes.number
    }
    state = {
        planet:{},
        isLoading:true,
        error:false
    }
    componentDidUpdate(prevProps){        
        if(prevProps.swapiService!==this.props.swapiService){
            this.setState({isLoading:true});
            this.getRandomPlanet();

        }
    }
    componentDidMount(){
        const {intervalUpdate} = this.props; //props заданный по умолчанию
        this.getRandomPlanet();
        this.timerRandomPlaner=setInterval(this.getRandomPlanet,intervalUpdate);
    }
    componentWillUnmount(){
        clearInterval(this.timerRandomPlaner);
    }
    //воспользуемся async/await и зделаем функцию асинхронной чтобы выполнить промисы
    getRandomPlanet= async()=>{
        const id = Math.floor(Math.random()*25+2);
        // const id = 1;
        const planet = await this.props.swapiService.getPlanet(id)
            .then(planet=>{return planet})
            .catch(this.error);
        const img = await this.props.swapiService.getPlanetImg(id)
            .then(img=>{return img});
        await this.setState({
            planet:{img,...planet},
            isLoading:false,
            error:false
        })
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

// зоздание props по умолчанию,используется для неопределённых (undefined) пропсов, но не для пропсов со значением null
// RandomPlanet.defaultProps = {
//     intervalUpdate:10000
// }


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