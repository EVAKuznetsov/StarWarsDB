import {withDetail,withSwapiService} from '../hoc-helpers'
import ItemDetails from '../item-details'
import RandomPlanet from '../random-planet'
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
const PersonDetails = withSwapiService(mapPersonMethodToProps)(withDetail(ItemDetails))
const PlanetDetails = withSwapiService(mapPlanetMethodToProps)(withDetail(ItemDetails))
const StarshipDetails = withSwapiService(mapStarshipMethodToProps)(withDetail(ItemDetails))
const RandomPlanetDetails = withSwapiService(mapPlanetMethodToProps)(RandomPlanet)

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    RandomPlanetDetails
};