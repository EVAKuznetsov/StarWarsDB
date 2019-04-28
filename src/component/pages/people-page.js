import React from 'react'
import {Record} from '../item-details'
import ErrorBoundry from '../error-boundry'
import { PersonList, PersonDetails } from '../sw-component';
import Row from '../row'
import {withRouter} from 'react-router-dom'

const PeoplePage=(props)=>{
    const peoplelist = <PersonList 
        onItemSelected={(id)=>{
            console.log('click '+Number(id))
            props.history.push(id)
        }} 
    />  
    const peopledetails = (
                <PersonDetails itemId={props.match.params.id}>
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
export default withRouter(PeoplePage)