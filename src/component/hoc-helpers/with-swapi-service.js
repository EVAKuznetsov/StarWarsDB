import React from 'react'
import {SwapiServiceContext} from '../swapi-service-context'

const withSwapiService = (Wrapper,mapMethodsToProps) =>{
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