import React,{Component} from 'react'
import './people-page.css'
import {Record} from '../item-details'
import ErrorIndicator from '../error-indicator'
import ErrorBoundry from '../error-boundry'
import { PersonList, StarshipList, PlanetList, PersonDetails, PlanetDetails, StarshipDetails } from '../sw-component';

export default class PeoplePage extends Component{
    state = {
        selectedPerson:null,
        selectedPlanet:null,
        selectedStarship:null

    }

    onPersonSelected = (id)=> {
        this.setState({
            selectedPerson:id
        })
    }
    onPlanetSelected = (id)=> {
        this.setState({
            selectedPlanet:id
        })
    }
    onStarshipSelected = (id)=> {
        this.setState({
            selectedStarship:id
        })
    }
    render(){
        const peoplelist = (
                        <PersonList onItemSelected={this.onPersonSelected}>
                            {(i)=>(`${i.name} / ${i.birthYear}`)}
                        </PersonList>                        
                        )
                            
        const peopledetails = (
                        <PersonDetails itemId={this.state.selectedPerson}>
                            <Record label = 'Eye color' field = 'eyeColor' />
                            <Record label = 'Gender' field = 'gender' />
                            <Record label = 'Birth year' field = 'birthYear' />
                        </PersonDetails>
                            )
        const planetlist = ( 
                            <PlanetList onItemSelected={this.onPlanetSelected}>
                            {(i)=>(`${i.name} / ${i.population}`)}
                            </PlanetList>
                            )
                            
        const planetdetails = (
                        <PlanetDetails itemId={this.state.selectedPlanet}>
                            <Record label = 'Population' field = 'population' />
                            <Record label = 'Rotation Period' field = 'rotationPeriod' />
                            <Record label = 'Diameter' field = 'diameter' />
                        </PlanetDetails>
                            
                            )
        const starshiplist = (                            
                            <StarshipList onItemSelected={this.onStarshipSelected}>
                            {(i)=>(`${i.name}`)}
                            </StarshipList>
                            )
                                
        const starshipdetails = (
                            <StarshipDetails itemId={this.state.selectedStarship}>
                                <Record label = 'Model' field = 'model' />
                                <Record label = 'Manufacturer' field = 'manufacturer' />
                                <Record label = 'Cost' field = 'costInCredits' />
                                <Record label = 'Length' field = 'length' />
                                <Record label = 'Passengers' field = 'passengers' />
                            </StarshipDetails>
                                )
        return(
            <>
            <ErrorBoundry>
                <Row left = {peoplelist} right = {peopledetails} />
            </ErrorBoundry> 
            <ErrorBoundry>  
                <Row left={planetlist} right = {planetdetails}/>
            </ErrorBoundry> 
            <ErrorBoundry>    
                <Row left={starshiplist} right = {starshipdetails}/>
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