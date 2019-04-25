export default class TestSwapiService {
    people = [
        {
            id:1,
            name:'Max [TEST DATA]',
            gender:'male',
            birthYear:'1994',
            eyeColor:'borrow'
        },
        {
            id:2,
            name:'John [TEST DATA]',
            gender:'male',
            birthYear:'1991',
            eyeColor:'blue'
        },
    ]
    planet = [
        {
            id:'1',
            name:'Mars',
            population:'100001',
            rotationPeriod:'5000000',
            diameter:'3000000'
        },
        {
            id:'2',
            name:'Venera',
            population:'43',
            rotationPeriod:'90000',
            diameter:'9999999'
        }
    ]
    starships = [
        {
            id:'1',
            name:'Titanic',
            model:'tourist',
            manufacturer:'lalala',
            costInCredits:'1000000000',
            length:'900',
            passengers:'1000'
        },
        {
            id:'2',
            name:'React',
            model:'millitar',
            manufacturer:'lalala',
            costInCredits:'9000000',
            length:'30',
            passengers:'2'
        }
    ]



    //ОСНОВНОЙ API запрос
    //получаем промис со списком всех героев star-wars
    getAllPeople=async()=>{
        const res = await this.people;
        return res
    }
    //получаем промис с определённым персонажем
    getPerson=async(id)=>{
        const person = {...this.people.filter(person=>person.id ===id)[0]};
        return person;
    }
    //получаем промис со списком всех планет star-wars
    getAllPlanets=async()=>{
        const res = await this.planet;
        return res
    }
    //получаем промис с определённым персонажем
    getPlanet=async(id)=>{
        const planet = {...this.planet.filter(planet=>planet.id ===String(id))[0]};
        return planet;
    }
    //получаем промис со списком всех планет star-wars
    getAllStarships=async()=>{
        const res = await this.starships;
        return res
    }
    //получаем промис с определённым персонажем
    getStarship=async(id)=>{
        const starships = {...this.starships.filter(starship=>starship.id ===id)[0]};
        return starships;
    }
    //API запрос на картинку
    getResourceImg = async()=>{
            return 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F9b7173f3cdc117fca1cdcb608e5162a6.600x600x1.jpg'
    }
     getPlanetImg=async(id)=>{
        const res = await this.getResourceImg();
        return res;
    }
    getPersonImg=async(id)=>{
        const res = await this.getResourceImg();
        return res;
    }
    getStarshipImg=async(id)=>{
        const res = await this.getResourceImg();
        return res;
    }

}
