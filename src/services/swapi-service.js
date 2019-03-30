export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    _apiBaseImg = 'https://starwars-visualguide.com/assets/img';

    //ОСНОВНОЙ API запрос
    getResource = async(url)=>{
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Fetch не отработал по ссылке ${url}, статус ответа:${res.status}`)
        }
        return await res.json();
    }
    //получаем промис со списком всех героев star-wars
    getAllPeople=async()=>{
        const res = await this.getResource('/people/');
        return res.results.map((person)=>this._transformPerson(person));
    }
    //получаем промис с определённым персонажем
    getPerson=async(id)=>{
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }
    //получаем промис со списком всех планет star-wars
    getAllPlanets=async()=>{
        const res = await this.getResource('/planets/');
        return res.results.map((planet)=>this._transformPlanet(planet));       
    }
    //получаем промис с определённой планетой
    getPlanet=async(id)=>{
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }
    //получаем промис со списком всех кораблей star-wars
    getAllStarships=async()=>{
        const res = await this.getResource(`/starships/`);
        return res.results.map((starship)=>this._transformStarship(starship));
    }
    //получаем промис с определённым кораблём
    getStarship=async(id)=>{
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship)
    }
    //функция возвращает id через регулярное выражение из url
    _extract(url){
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1];

    }
    //трансформируем данные для вывода планет
    _transformPlanet(planet){        
        return{            
            id:this._extract(planet.url),
            name:planet.name,
            population:planet.population,
            rotationPeriod:planet.rotation_period,
            diameter:planet.diameter
        }
    }
    //трансформируем данные для вывода кораблей
    _transformStarship(starship){        
        return{
            id:this._extract(starship.url),
            name:starship.name,
            model:starship.model,
            manufacturer:starship.manufacturer,
            costInCredits:starship.cost_in_credits,
            length:starship.length,
            crew:starship.crew,
            passengers:starship.passengers,
            cargoCapacity:starship.cargo_capacity
        }
    }
    _transformPerson(person){
        return{
            id:this._extract(person.url),
            name:person.name,
            gender:person.gender,
            birthYear:person.birth_year,
            eyeColor:person.eye_color
        }
    }
    //API запрос на картинку
    getResourceImg = async(url)=>{
        try{
            const res = await fetch(`${this._apiBaseImg}${url}`);
            if(!res.ok){
                return 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F9b7173f3cdc117fca1cdcb608e5162a6.600x600x1.jpg';
            }
            return res.url;
        }
        catch{
            return 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F9b7173f3cdc117fca1cdcb608e5162a6.600x600x1.jpg'
        }
        //return 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F9b7173f3cdc117fca1cdcb608e5162a6.600x600x1.jpg';
    }
    async getPlanetImg(id){
        const res = await this.getResourceImg(`/planets/${id}.jpg`);
        return res;
    }
    async getPersonImg(id){
        const res = await this.getResourceImg(`/characters/${id}.jpg`);
        return res;
    }
    async getStarshipImg(id){
        const res = await this.getResourceImg(`/starships/${id}.jpg`);
        return res;
    }

}

// fetch('https://starwars-visualguide.com/assets/img/planets/26.jpg')
// .then(res=>{
//     if(res.status===404){
//         throw new Error('Картинка не найдена')
//     }
//     console.log(res)
// })
// .catch((e)=>{console.log(e)})



// .then(res=>{
//     console.table(res)
//     if(!res.ok){
//         throw new Error('нихрена не работает');
//     }
// })
// .catch((e)=>{console.log(e)})