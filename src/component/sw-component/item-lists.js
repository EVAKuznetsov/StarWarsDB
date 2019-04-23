import ItemList from '../item-list'
import {withChildrenFunction,withSwapiService,withData, Compose} from '../hoc-helpers'
//реализация частично применённых функций

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
const PersonList = Compose(
        withSwapiService(mapPersonMethodToProps),
        withData,
        withChildrenFunction(renderName)
    )(ItemList);

//const PlanetList = withData(ItemList,getAllPlanets); //до композиции компонентов
const PlanetList = Compose(withSwapiService(mapPlanetMethodToProps),withData,withChildrenFunction(renderPlanet))(ItemList);//композиция ( яйцо в сундуке, сундук в утке, утка в амбаре...)

//const StarshipList = withData(ItemList,getAllStarships); //до композиции компонентов
const StarshipList = Compose(withSwapiService(mapStarshipMethodToProps),withData,withChildrenFunction(renderStarship))(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};