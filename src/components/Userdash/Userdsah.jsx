import { useEffect,useState } from "react"
import styles from "./userdash.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
import Nav from "../Nav/Nav"
export default function Userdash(){
    const [user,setUser] = useState({appointments:[]})
    useEffect(()=>{
        let id = localStorage.getItem("userId")
        id = JSON.parse(id)
        getUser(id)
    },[])

    async function getUser(id){
        let data = await axios.get(`http://localhost:3001/user/${id}`)
        console.log(data)
        setUser(data.data)
    }


    return(
        <>
        <Nav />
        <div className={styles.main}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <h5>Appointments</h5>
        {user.appointments.length==0?<p>No Appointments</p>:<div>{user.appointments.map((e)=>{
            return(
            <div className={styles.patientInfo} key={Math.random()*100000}>
            <h3>Name: {e.name}</h3>
            <p>Age: {e.age}</p>
            <p>Gender: {e.gender}</p>
            <p>Reason: {e.reason}</p>
            </div>)
        })}</div>}
        <Link to="/"><p>Book Again</p></Link>
        </div>
        </>
    )
}
