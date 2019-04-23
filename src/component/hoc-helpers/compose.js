//функция compose принимает в себя массив функций funcs и оборачивает их одну в другую справа налево, возвращая композицию этих функций
//так же используется частично применённая функция
const compose = (...funcs)=>(comp)=>{
    return funcs.reduceRight((prevResult,f)=>f(prevResult),comp)
}
export default compose
