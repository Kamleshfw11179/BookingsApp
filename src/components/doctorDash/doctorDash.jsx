import styles from "./doctorDash.module.css"
import { useEffect,useState } from "react"
import {Link} from "react-router-dom"
export default function Doctordash(){
    const [state,setState] = useState({patients:[]})
    useEffect(()=>{
        let doc = localStorage.getItem("docInfo")
        doc = JSON.parse(doc);
        console.log(doc)
        setState(doc)
        return;
    },[])
    return(
    <>
     <div className={styles.logo}>
        <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/06/AH_logo_v-60c8405cbca3d.svg"></img>
            <h1>Welcome to Apollo Hospitals.</h1>
            </div>
            <hr />
        <div className={styles.main}>
        <Link to="/" style={{float:"right",fontSize:"20px",textDecoration:"none",color:"#2596be"}}>Home</Link>
        <div className={styles.info}>
            <h3>Hello</h3>
            <h2>{state.name}</h2>
        </div>
        <h4 className={styles.appoint}>Your Patients</h4>
        {state.patients.length==0?<p>No Patients</p>:<div>{state.patients.map((e)=>{
            return(
                <div key={Math.random()*100000} className={styles.patientInfo}>
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
                </div>

            )
        })}</div>}
        </div>
        </>
    )
}