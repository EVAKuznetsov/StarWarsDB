import React from 'react'
import './item-list.css';
const ItemList =(props)=>{    
        const {data,onItemSelected,children} = props;
        const items = data.map((item)=>{            
            const {id}=item;
            const label = children(item);//в данной функции мы получаем Lable в зависимости от того, откуда вызывается данная компонента
            return(               
                    <li className="list-group-item"
                        key={id}
                        onClick = {()=>onItemSelected(id)}
                    >
                        {label}
                    </li>
            )
        }) 
        return( 
            <ul className="item-list list-group">      
            {items}
            </ul>
        )
}
export default ItemList;