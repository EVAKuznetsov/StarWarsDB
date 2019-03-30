import React,{Component} from 'react'
import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner'
import ErrorButton from '../error-button'

export default class ItemDetails extends Component{
    swapiService = new SwapiService();
    state={
        item:null,
        loading:false
    }
    componentDidUpdate(prevProps){
        if(this.props.itemId!==prevProps.itemId){
            this.setState({loading:true})
            this.getPerson(this.props.itemId)
        }
    }
    //Делаем функцию асинхронной через async/await чтобы записывать полученные из промисов ответы.
    getPerson = async(id)=>{            
        const item = await this.swapiService.getPerson(id)
            .then((person)=>{return person})
            .catch(()=>{console.log('герой пока не выбран')})
        const img = await this.swapiService.getPersonImg(id)
            .then(img=>{return img})
        await this.setState({
                item:{img,...item},
                loading:false
            });
        
    }
    render(){
        
        if(!this.state.item){
            return(<span>Select a person</span>) 
        }
        const content = this.state.loading?<Spiner />:<ContentItemDetails item = {this.state.item} children  = {this.props.children}/>
            
        return(
            <div className="person-details card">
                {content}
            </div>
        )
    }
}

function ContentItemDetails({item,children}){
    const {name,img} = item; 
    const content  = React.Children.map(children,(record)=>{
        return React.cloneElement(record,{item});
    })
    return(
        <>
            <img src={img} alt="" className="person-img" />
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {content}
                </ul>
                <ErrorButton />
            </div>
        </>
    )
}

const Record =({item,field,label})=>{
    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {Record};