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
        <div className={styles.logo}>
        <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/06/AH_logo_v-60c8405cbca3d.svg"></img>
            <h1>Welcome to Apollo Hospitals.</h1>
            </div>
            <hr />
        <div className={styles.main}>
        <div className={styles.info}>
            <h3>Hello</h3>
            <h2>{user.name}</h2>
        </div>
        <h4 className={styles.appoint}>Your Appointments</h4>
        {user.appointments.length==0?<p>No Appointments</p>:<div>{user.appointments.map((e)=>{
            return(
            <div className={styles.patientInfo} key={Math.random()*100000}>
            <div className={styles.appointments}>
                <h3>Name: </h3>
                <p>{e.name}</p>
            </div>
            <div  className={styles.appointments}>
                <h3>Age</h3>
                <p>{e.age}</p>
            </div>
            <div  className={styles.appointments}>
                <h3>Gender</h3>
                <p>{e.gender}</p>
            </div>
            <div  className={styles.appointments}>
                <h3>Reason</h3>
                <p>{e.reason}</p>
            </div>
            </div>)
        })}</div>}
        <Link to="/"   style={{color:"#2596be",textDecoration:"none",fontSize:"20px"}} ><p>Book Again</p></Link>
        </div>
        </>
    )
}