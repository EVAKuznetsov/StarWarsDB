import withDetail from '../hoc-helpers/with-detail'
import ItemDetails from '../item-details'
import withSwapiService from '../hoc-helpers/with-swapi-service'
//объявляем функции для выборки данных по API bp swapiService
const mapPersonMethodToProps = (swapiService)=>{
    return{
        getItem:swapiService.getPerson,
        getItemImg:swapiService.getPersonImg
    }
}
const mapPlanetMethodToProps = (swapiService)=>{
    return{
        getItem:swapiService.getPlanet,
        getItemImg:swapiService.getPlanetImg
    }
}
const mapStarshipMethodToProps = (swapiService)=>{
    return{
        getItem:swapiService.getStarship,
        getItemImg:swapiService.getStarshipImg
    }
}
const PersonDetails = withSwapiService(withDetail(ItemDetails),mapPersonMethodToProps)
const PlanetDetails = withSwapiService(withDetail(ItemDetails),mapPlanetMethodToProps)
const StarshipDetails = withSwapiService(withDetail(ItemDetails),mapStarshipMethodToProps)

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};