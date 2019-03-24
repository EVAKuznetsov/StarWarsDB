import React,{Component} from 'react'
import './item-list.css';
import SwapiService from '../../services/swapi-service'
import Spiner from '../spiner'

export default class ItemList extends Component{
    swapiService = new SwapiService();
    state={
        peopleList:null
    }
    componentDidMount(){
        this.swapiService.getAllPeople()
            .then(this.UpdatePeopleList)
    }
    UpdatePeopleList = (peopleList)=>{
        this.setState({peopleList})
    }
    onRenderItemList = (arr) =>{
        return arr.map(({id,name})=>{
            return(               
                    <li className="list-group-item"
                        key={id}
                        onClick = {()=>this.props.onPersonSelected(id)}
                    >
                        {name}
                    </li>
            )
        }) 
    }
    render(){ 
        const {peopleList} = this.state;
        const people = peopleList===null ? <Spiner /> : this.onRenderItemList(peopleList);
        return( 
            <ul className="item-list list-group">      
            {people}
            </ul>
        )
    }
}