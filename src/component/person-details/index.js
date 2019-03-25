import React,{Component} from 'react'
import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner'
import ErrorButton from '../error-button'

export default class PersonDetails extends Component{
    swapiService = new SwapiService();
    state={
        person:null,
        loading:false
    }
    componentDidUpdate(prevProps){
        if(this.props.personId!==prevProps.personId){
            this.setState({loading:true})
            this.swapiService.getPerson(this.props.personId)
                .then((person)=>this.getPerson(person,this.props.personId))
                .catch(()=>{console.log('герой пока не выбран')})
        }
    }
    getPerson = (person,id)=>{
        this.swapiService.getPersonImg(id)
            .then(img=>{
                this.setState({
                    person:{img,...person},
                    loading:false
                });
            })
        
    }
    render(){
        
        if(!this.state.person){
            return(<span>Select a person</span>) 
        }
        const content = this.state.loading?<Spiner />:<ContentPersonDetails person = {this.state.person}/>
            
        return(
            <div className="person-details card">
                {content}
            </div>
        )
    }
}

function ContentPersonDetails({person}){
    const {name,gender,birthDay,eyeColor,img} = person; 
    return(
        <>
            <img src={img} alt="" className="person-img" />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthDay}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Clolor</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
                <ErrorButton />
            </div>
        </>
    )
}