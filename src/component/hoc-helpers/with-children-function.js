import React from 'react'
const withChildrenFunction =(fn) => (Wrapper)=>{//то же самое,  что и withChildrenFunction=(fn, Wrapper)=>{}
    return(props)=>{
        return(
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
}
export default withChildrenFunction