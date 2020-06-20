import React ,{useState,useContext}from 'react'
import { v1 as uuidv1 } from "uuid";
import { GLobalContext } from "../context/GlobalState";
export const AddTransation = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
  const { addTransation } = useContext(GLobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransation = {
          id: uuidv1(),
          text,
          amount: parseInt(amount),
        };
        if (text !== "" && amount !== "") {
          addTransation(newTransation);
          setText("");  
         Number(setAmount(""));
        } else {
          alert("plz fill the field");
        }
      };
    return (
        <div>
             <p>Add new transaction</p>
             <form onSubmit={onSubmit} >
        <ul>
            
          <li className="text">
            <input className="abc" value={text}  onChange={(e) => setText(e.target.value)} type="text" placeholder="enter text..." id="text"  required/>
          </li>
          <li>
            <input  className="abc" value={amount}  onChange={(e) => setAmount(e.target.value)} type="number" placeholder="enter amount..." id="text" required />
          </li>
          <li>
            <button className="btn">Add Incomes</button> <button className="btn" 
             onClick={(e) => {
            e.preventDefault();

            const minTrans = {
              id:  uuidv1(),
              text,
              amount: -amount,
            };
            if (text !== "" && amount !== "") {
              addTransation(minTrans);
              setText("");  
             Number(setAmount(""));
            } else {
              alert("plz fill the field");
            }
            // addTransation(dltTransaction);
            // setText("");
            // setAmount("");
          }}>Add Expences</button>
          </li>
        </ul>
        </form>
            
        </div>
    )
}
