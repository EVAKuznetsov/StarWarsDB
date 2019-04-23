import React,{Component} from 'react'
import {Record} from '../item-details'
import ErrorBoundry from '../error-boundry'
import { PersonList, PersonDetails } from '../sw-component';
import Row from '../row'

export default class PeoplePage extends Component{
    state = {
        selectedPerson:null,
    }

    onPersonSelected = (id)=> {
        this.setState({
            selectedPerson:id
        })
    }
    render(){
        const peoplelist = <PersonList onItemSelected={this.onPersonSelected} />                          
        const peopledetails = (
                        <PersonDetails itemId={this.state.selectedPerson}>
                            <Record label = 'Eye color' field = 'eyeColor' />
                            <Record label = 'Gender' field = 'gender' />
                            <Record label = 'Birth year' field = 'birthYear' />
                        </PersonDetails>
                            )
        return(
            <>
            <ErrorBoundry>
                <Row left = {peoplelist} right = {peopledetails} />
            </ErrorBoundry> 
            </>         
        )
    }    
}