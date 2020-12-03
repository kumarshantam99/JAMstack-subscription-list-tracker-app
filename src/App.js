import React,{useState,useEffect} from 'react';
import './App.css';

import SubsForm from './components/SubsForm'
import SubsList from './components/SubsList'

function App() {
  const [subscriptions,setSubs]=useState([])
  
  const loadSubs=async ()=>{
    try{
      const res=await fetch('/api/subscriptions')
      const subscriptions=await res.json();
      
      setSubs(subscriptions);

    }catch(err){
      console.error(err)
    }
  }
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Subscriptions Tracker</h1>
            <SubsForm subAdded={loadSubs} />
            <SubsList subscriptions={subscriptions} refreshSubs={loadSubs} />

      
    </div>
  );
}

export default App;
