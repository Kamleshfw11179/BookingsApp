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
        <div className={styles.main}>
        <Link to="/">Home</Link>
        <h3>{state.name}</h3>
        <p>{state.speciality}</p>
        <p>{state.email}</p>
        <h5>Patients</h5>
        {state.patients.length==0?<p>No Patients</p>:<div>{state.patients.map((e)=>{
            return(
                <div key={Math.random()*100000} className={styles.patientInfo}>
                    <h4> Name: {e.name}</h4>
                    <p>Age: {e.age}</p>
                    <p>Gender : {e.gender}</p>
                    <p>Reason: {e.reason}</p>
                </div>

            )
        })}</div>}
        </div>
    )
}