import React,{Component} from 'react'
import './app.css';
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';

export default class App extends Component{
    state = {
        showPlanet:true,
        selectedPerson:null
    }
    handleClickPlanet = () =>{
        this.setState(({showPlanet})=>{
            return {showPlanet:!showPlanet}
        })
    }
    onPersonSelected = (id)=> {
        this.setState({
            selectedPerson:id
        })
    }
    render(){
        const randomPlanet = this.state.showPlanet?  <RandomPlanet />:null;  
        return(
            <div className="container">
                <Header />
                <button className="btn btn-success" onClick={this.handleClickPlanet}>toggle random planet</button>
                {randomPlanet}                
                <div className="row">
                    <div className="col-md-6">
                        <ItemList onPersonSelected = {this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>
             </div>
        )
    }
}