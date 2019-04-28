import React from 'react'
import ErrorBoundry from '../error-boundry'
import { StarshipList } from '../sw-component';
import {withRouter} from 'react-router-dom'

// переданный параметр history принадлежит react-router-dom, используем, чтобы перейти на нужный нам адрес
const StarshipPage=(props)=>{          
    return(
        <ErrorBoundry>    
            <StarshipList onItemSelected={(itemId)=>{
                // props.history.push(`/starships/${itemId}`) //так мы пишем, если у нас абсолютный путь /starship
                props.history.push(itemId) //а так, если путь относительный  /starship/
            }} />
        </ErrorBoundry>     
    )
}    

export default withRouter(StarshipPage) 