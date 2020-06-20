import React,{useState} from 'react';
import './App.css';

import { Balance } from './components/Balance';
import { TransationalList } from './components/TransationalList';
import { AddTransation } from './components/AddTransation';
import { GLobalProvider } from './context/GlobalState';

function App() {
  const [btn,setBtn] = useState(false)
 
  return (
    <GLobalProvider>
    <div className="container">
    <h1>Expence Tracker App</h1>
    <h2 style={{marginTop:'0px'}}><Balance/></h2>
    
  
    <div className="toggle-container">
      <span>income</span>
      <span>
          <input type="checkbox" name="toggle" id="toggle" />
          <label htmlFor="toggle" value ={btn} onChange={(e)=>setBtn(console.log(e.target.value))}>
              <div className="ball"></div>
          </label>
      </span>
      <span>expence</span>
  </div>
   
    
      <div className="tracker-app">
        <h4><TransationalList/></h4>
        <hr/>
       <AddTransation/>
      </div>
    
  </div>
  </GLobalProvider> 
  );
}

export default App;
