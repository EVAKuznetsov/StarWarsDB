import React,{Component} from 'react'
import {Record} from '../item-details'
import ErrorBoundry from '../error-boundry'
import {PlanetList,PlanetDetails} from '../sw-component';
import Row from '../row'

export default class PlanetPage extends Component{
    state = {
        selectedPlanet:null
    }
    onPlanetSelected = (id)=> {
        this.setState({
            selectedPlanet:id
        })
    }
    render(){
        const planetlist =<PlanetList onItemSelected={this.onPlanetSelected} />                            
        const planetdetails = (
                        <PlanetDetails itemId={this.state.selectedPlanet}>
                            <Record label = 'Population' field = 'population' />
                            <Record label = 'Rotation Period' field = 'rotationPeriod' />
                            <Record label = 'Diameter' field = 'diameter' />
                        </PlanetDetails>
                            
                            )
        return(
            <>
            <ErrorBoundry>  
                <Row left={planetlist} right = {planetdetails}/>
            </ErrorBoundry> 
            </>         
        )
    }    
}
