import React,{useState,useEffect} from 'react';
import './App.css';

import SubsForm from './components/SubsForm'
import SubsList from './components/SubsList'

function App() {
  const [subs,setSubs]=useState([])
  const res=fetch('/api/subscriptions',{method:'GET'}).then((subs)=>subs.json())
  const loadSubs=async ()=>{
    try{
      
      const subs=await res
      
      console.log(subs)
      setSubs(subs);

    }catch(err){
      console.error(err)
    }
  }
  useEffect(() => {
    loadSubs();
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Subscriptions Tracker</h1>
      <SubsForm subAdded={loadSubs} />
      <SubsList subs={subs} refreshSubs={loadSubs} />

      
    </div>
  )
}

export default App;
