import { PracticePlanContext } from "../context/PracticePlanContext";
import { useContext } from "react";

export const usePracticePlanContext =()=>{
    const context = useContext(PracticePlanContext)
    if(!context){
        throw Error('must be used inside context provider')
    }
    return context
}