import React,{Component} from 'react'
import {Record} from '../item-details'
import ErrorBoundry from '../error-boundry'
import { StarshipList, StarshipDetails } from '../sw-component';
import Row from '../row'

export default class PeoplePage extends Component{
    state = {
        selectedStarship:null
    }
    onStarshipSelected = (id)=> {
        this.setState({
            selectedStarship:id
        })
    }
    render(){
        const starshiplist = <StarshipList onItemSelected={this.onStarshipSelected} />                                
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
                <Row left={starshiplist} right = {starshipdetails}/>
            </ErrorBoundry> 
            </>         
        )
    }    
}