import React,{Component} from 'react'
import './people-page.css'
import ItemList from '../item-list'
import ItemDetails from '../item-details'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'

export default class PeoplePage extends Component{
    swapiService=new SwapiService();
    state = {
        selectedPerson:null,
        hasError:false
    }

    onItemSelected = (id)=> {
        this.setState({
            selectedPerson:id
        })
    }
    componentDidCatch(){
        this.onError();
    }
    onError = () =>{
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
        const itemlist = ( <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData = {this.swapiService.getAllPeople}//Передаём функцию получения данных в общий компонент ItemList
                                >
                            {(i)=>(`${i.name} / ${i.birthYear}`)}
                            </ItemList>

                            )
                            
        const itemdetails = (<ItemDetails itemId={this.state.selectedPerson} />)
        return(
            <>
            <ErrorBoundry>
                <Row left = {itemlist} right = {itemdetails} />  
                <Row left={<h3>Left</h3>} right = {<h3>Right</h3>}/>
            </ErrorBoundry> 
            </>         
        )
    }    
}

function Row ({left,right}){
    return(
    <div className="row">
        <div className="col-md-6">
            {left}
        </div>
        <div className="col-md-6">
            {right}
        </div>
    </div>
)}