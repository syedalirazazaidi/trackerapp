import React, { createContext,useReducer } from 'react';
import AppReducer from './AppReducer';
const initialState={
    transations: [
        
    ]
}
export const GLobalContext = createContext(initialState);
export const GLobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    function deleteTransation(id){
        dispatch({
             type:"DELETE_TRANSATION",
             payload:id
        })
    }
    function addTransation(transations){
        dispatch({
             type:"ADD_TRANSATION",
             payload: transations
        })
    }
    return(
        <GLobalContext.Provider value={{transations:state.transations,
        deleteTransation ,
        addTransation}}>
            {children}
        </GLobalContext.Provider>

    )
}