import React,{useContext} from 'react'
import { GLobalContext } from '../context/GlobalState'
import {Transation} from './Transation'
export const TransationalList = () => {
    const {transations} = useContext(GLobalContext)
    console.log(transations)
    return (
      <div>
      <h3> history</h3>
        <div style={{
          backgroundColor: 'lightblue',
          width: '190',
          height:' 70px',
          borderRadius:'10px',
          padding:"5px",
          overflow:' scroll'}}>
           
           <ul style={{lineHeight:"0px", cursor:'pointer',color:'black'}}>
        {transations.map(transation=>(<Transation key={transation.id} transation={transation}/>))}
        
      </ul>
        </div> 
        </div>
    )
}
