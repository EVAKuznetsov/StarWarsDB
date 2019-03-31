//Компонента высшего порядка с логикой для вывода блока со списком данных

import React,{Component} from 'react'
import Spiner from '../spiner'

const widthData=(View)=>{
    return class extends Component{
        state={
            data:null,
            loading:false
        }
        componentDidUpdate(prevProps){
            if(prevProps.getData !== this.props.getData){
                this.setState({loading:true})
                this.UpdateData();
            }
        }
        componentDidMount(){
            this.UpdateData();           
        }
        UpdateData = ()=>{
            this.props.getData()
            .then((data)=>{this.setState({data,loading:false})})
            .catch(this.props.onError)            
        }
        render(){
            const {data,loading} = this.state;
            if(!data||loading){
                return <Spiner />
            }
            
            return <View {...this.props} data={data} />
        }
    }
}
export default widthData