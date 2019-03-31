import React from 'react'
import withData from '../hoc-helpers/with-data'
import ItemList from '../item-list'
import withSwapiService from '../hoc-helpers/with-swapi-service'

const withChildrenFunction = (Wrapper,fn)=>{
    return(props)=>{
        return(
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
}
const renderName = (i)=>(`${i.name} / ${i.birthYear}`)
const renderPlanet = (i)=>(`${i.name} / ${i.population}`)
const renderStarship = (i)=>(`${i.name} / ${i.model}`)

const mapPersonMethodToProps = (swapiService)=>{
    return {getData:swapiService.getAllPeople}
}
const mapPlanetMethodToProps = (swapiService)=>{
    return {getData:swapiService.getAllPlanets}
}
const mapStarshipMethodToProps = (swapiService)=>{
    return {getData:swapiService.getAllStarships}
}

//const PersonList = withData(ItemList,getAllPeople); //до композиции компонентов
const PersonList = withSwapiService(withData(withChildrenFunction(ItemList,renderName)),mapPersonMethodToProps);

//const PlanetList = withData(ItemList,getAllPlanets); //до композиции компонентов
const PlanetList = withSwapiService(withData(withChildrenFunction(ItemList,renderPlanet)),mapPlanetMethodToProps);

//const StarshipList = withData(ItemList,getAllStarships); //до композиции компонентов
const StarshipList = withSwapiService(withData(withChildrenFunction(ItemList,renderStarship)),mapStarshipMethodToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};