import React,{useState,useEffect} from 'react';
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"

import SubsForm from './SubsForm'
import SubsList from './SubsList'

function Dashboard(){
const [subs,setSubs]=useState([])
const [error, setError] = useState("")
const { currentUser, logout } = useAuth()
const history = useHistory()

async function handleLogout() {
  setError("")

  try {
    await logout()
    history.push("/login")
  } catch {
    setError("Failed to log out")
  }
}
  const loadSubs=async ()=>{
    try{
      const res=await fetch('/api/subscriptions',{method:'GET'}).then((res)=>res.json())
      const subs= res
      
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
    <div className="container mt-5 ">
      

          <h1 className="mb-5 text-center">Subscriptions Tracker</h1>
          <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

          <SubsForm subAdded={loadSubs} />
          <SubsList subs={subs} refreshSubs={loadSubs} />

      

      
    </div>
  )

}
export default Dashboard;
