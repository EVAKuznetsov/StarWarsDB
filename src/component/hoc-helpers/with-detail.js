//Компонента высшего порядка с логикой для вывода блока детальной информации

import React,{Component} from 'react'
import Spiner from '../spiner'
const withDetail=(View,getData,getImg)=>{
    return class extends Component{
        state={
            item:null,
            loading:false
        }
        componentDidUpdate(prevProps){
            if(this.props.itemId!==prevProps.itemId){
                this.setState({loading:true})
                this.getItem(this.props.itemId)
            }
        }
        //Делаем функцию асинхронной через async/await чтобы записывать полученные из промисов ответы.
        getItem = async(id)=>{            
            const item = await getData(id)
                .then((item)=>{return item})
                .catch(()=>{console.log(`Ошибка, не удалось получить элемент по id=${id}`)})
            const img = await getImg(id)
                .then(img=>{return img})                
            await this.setState({
                    item:{img,...item},
                    loading:false
                }); 
        }
        render(){
            const {item,loading} = this.state;
            if (!item&&loading){
                return <Spiner />
            }
            if(!item){
                return(<span>Select a person</span>) 
            }
            if(loading){
                return <Spiner />
            }
            return(<View {...this.props} item = {item}/>           
            )
        }

    }
}
export default withDetail;