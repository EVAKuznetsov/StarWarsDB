import React,{Component} from 'react'
import './people-page.css'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'

export default class PeoplePage extends Component{
    swapiService=new SwapiService();
    state = {
        selectedPerson:null,
        hasError:false
    }

    onPersonSelected = (id)=> {
        this.setState({
            selectedPerson:id
        })
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return (
                <div className="col-12 jumbotron">
                    <ErrorIndicator />
                </div>   
            )
        }
        return(
            <div className="row">
                <div className="col-md-6">
                    <ItemList 
                        onPersonSelected={this.onPersonSelected}
                        getData = {this.swapiService.getAllPeople}//Передаём функцию получения данных в общий компонент ItemList
                        onRenderItem = {({name,gender})=>{return `${name} / ${gender}`}}//Передаём функцию для вывода данных
                     />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }    
}