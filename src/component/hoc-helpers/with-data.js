import React,{Component} from 'react'
import Spiner from '../spiner'
import ErrorIndicator from '../error-indicator'

const widthData=(View, getData)=>{
    return class extends Component{
        state={
            data:null
        }
        componentDidMount(){
            getData()
                .then(this.UpdateData)
                .catch(this.props.onError)            
        }
        UpdateData = (data)=>{
            this.setState({data})
        }
        render(){
            const {data} = this.state;
            if(!data){
                return <Spiner />
            }
            return <View {...this.props} data={data} />
        }
    }
}
export default widthData