import React,{Component} from 'react'
import './people-page.css'
import ItemDetails, {Record} from '../item-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'
import { PersonList, StarshipList, PlanetList } from '../sw-component';
import ItemList from '../item-list';

export default class PeoplePage extends Component{
    swapiService=new SwapiService();
    state = {
        selectedPerson:null,
        hasError:false
    }

    onItemSelected = (id)=> {
        this.setState({
            selectedPerson:id
        })
    }
    componentDidCatch(){
        this.onError();
    }
    onError = () =>{
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return (
                <div className="col-12 jumbotron">
                    <ErrorIndicator />
                </div>   
            )
        }
        const itemlist = ( 
                        <>
                        <PersonList onItemSelected={this.onItemSelected}>
                            {(i)=>(`${i.name} / ${i.birthYear}`)}
                        </PersonList>
                        <StarshipList onItemSelected={this.onItemSelected}>
                        {(i)=>(`${i.name}`)}
                        </StarshipList>
                        <PlanetList onItemSelected={this.onItemSelected}>
                        {(i)=>(`${i.name} / ${i.population}`)}
                        </PlanetList>
                        </>
                        )
                            
        const itemdetails = (
                            <ItemDetails itemId={this.state.selectedPerson}>
                                <Record label = 'Eye color' field = 'eyeColor' />
                                <Record label = 'Gender' field = 'gender' />
                                <Record label = 'Birth year' field = 'birthYear' />
                            </ItemDetails>
                            )
        return(
            <>
            <ErrorBoundry>
                <Row left = {itemlist} right = {itemdetails} />  
                <Row left={<h3>Left</h3>} right = {<h3>Right</h3>}/>
            </ErrorBoundry> 
            </>         
        )
    }    
}

function Row ({left,right}){
    return(
    <div className="row">
        <div className="col-md-6">
            {left}
        </div>
        <div className="col-md-6">
            {right}
        </div>
    </div>
)}