import { createContext, useReducer } from "react";

export const PracticePlanContext = createContext()

export const practicePlansReducer = (state, action) =>{
    switch (action.type) {
        case 'SET_PRACTICEPLANS':
            return { 
                practicePlans: action.payload 
            }
        case 'CREATE_PRACTICEPLANS':
            return { 
                practicePlans: [action.payload, ...state.practicePlans] 
            }
        case 'DELETE_PRACTICEPLANS':
            return { 
                practicePlans: state.practicePlans.filter(w => w._id !== action.payload._id) 
            }
        default:
            return state
      }
    }

export function PracticePlanContextProvider({children}){
    const [state, dispatch] = useReducer(practicePlansReducer, {practicePlans: null})
    
    
    return(
        <PracticePlanContext.Provider value={{...state, dispatch}}>
            {children}
        </PracticePlanContext.Provider>
    )
}