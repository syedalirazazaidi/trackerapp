import React, { useContext } from "react";
import { GLobalContext } from "../context/GlobalState";

export const Transation = ({ transation }) => {
    const {deleteTransation} = useContext(GLobalContext)
  return (
   
    <ul  className="dlt-btn" onClick={()=>deleteTransation(transation.id)} style={{display:'flex',justifyContent:"space-between"}}>
        <li >
        {transation.text}
        </li>
        <li>
        Rs:{transation.amount}
        </li>
    </ul>
  );
};
