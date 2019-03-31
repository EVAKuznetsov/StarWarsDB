import React from 'react'
import './item-details.css';
import ErrorButton from '../error-button'

const ItemDetails=(props)=>{  
    const{item,children} = props
    const content  = React.Children.map(children,(record)=>{
        return React.cloneElement(record,{item}); 
    })        
    return(
        <div className="item-details card">
            <img src={item.img} alt="" className="item-img" />
            <div className="card-body">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                    {content}
                </ul>
                <ErrorButton />
            </div>
        </div>
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
export default ItemDetails