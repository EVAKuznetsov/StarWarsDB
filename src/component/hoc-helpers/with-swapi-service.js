//компонент высшего порядка, вытаскивает из контекста функцию, переданную вместе с оборачеваемым компонентом
import React from 'react'
import {SwapiServiceContext} from '../swapi-service-context'

const withSwapiService =(mapMethodsToProps)=>(Wrapper) =>{//эквивалентно записи withSwapiService =(mapMethodsToProps, Wrapper)=>{}
    return (props)=>{
        return(
            <SwapiServiceContext.Consumer>
                {(swapiService)=>{
                    const serviceProps = mapMethodsToProps(swapiService)
                    return <Wrapper {...props} {...serviceProps}/>
                    }
                }
            </SwapiServiceContext.Consumer>
        )
    }
}
export default withSwapiService