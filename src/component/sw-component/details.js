import withDetail from '../hoc-helpers/with-detail'
import ItemDetails from '../item-details'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImg,
    getPlanetImg,
    getStarshipImg
} = swapiService;

const PersonDetails = withDetail(ItemDetails,getPerson,getPersonImg)

const PlanetDetails = withDetail(ItemDetails,getPlanet,getPlanetImg)

const StarshipDetails = withDetail(ItemDetails,getStarship,getStarshipImg)

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};