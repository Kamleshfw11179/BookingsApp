import styles from "./booking.module.css"
import {useState,useEffect} from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import Nav from "../Nav/Nav"
import axios from "axios"

export default function Booking({time,setTime}){
    const [state,setState] = useState("")
    const [show,setShow] = useState(false);
    const [docs,setDocs] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        let token = localStorage.getItem("userId")
        token = JSON.parse(token)
        console.log(token)
        if(token==null){
            navigate("/credentials")
        }
        if(state!==""){
            getDoc()
        }
    },[state])
    function handleChange(e){
        setState(e.target.value)
    }
    async function getDoc(){
        console.log(state)
        let data = await axios.get(`http://localhost:3001/doctor/${state}`)
        setDocs(data.data)
    }
    return(
    <>
    <Nav />
        <div className={styles.main}>
            <h1>Bookings Page</h1>
            <h3>Welcome to Apollo Hospitals.</h3>
            <p>Please Select the speciality.</p>
            <select onChange={handleChange}>
                <option value=""></option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Gastroenterology">Gastroenterology</option>
                <option value="Hematology">Hematology</option>
                <option value="Nephrology">Nephrology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Urology">Urology</option>
            </select>
            {state==""? <h3>Please Select speciality</h3>:<h3>{state} Doctors Availables</h3>}
            <div>{docs.map((e)=>{
                if(e.visitingTimetill<e.visitingTimefrom){
                    return(
                    <div key={e.email} className={styles.list}>
                        <p>Name: {e.name}</p>
                        <p>Speciality: {e.speciality}</p>
                        <p>Visiting Time: {e.visitingTimefrom>12?e.visitingTimefrom-12+"P.M":e.visitingTimefrom+"A.M"}</p>
                        <p>Visiting Time Till: {e.visitingTimetill>12?e.visitingTimetill-12+"P.M":e.visitingTimetill+"A.M"}</p>
                        <p>Total Patients: {e.patients.length}</p>
                        {Math.ceil((((e.visitingTimetill+24)-e.visitingTimefrom)*60)/20)>=e.patients.length?
                        <Link to={`/book/${e._id}`}><button onClick={()=>{setShow(!show)}}>Book</button></Link>
                        :<button disabled>Bookings Full</button>}
                    </div>
                )
                }else{
                    return(
                    <div key={e.email} className={styles.list}>
                        <p>Name: {e.name}</p>
                        <p>Speciality: {e.speciality}</p>
                        <p>Visiting Time: {e.visitingTimefrom>12?e.visitingTimefrom-12+"P.M":e.visitingTimefrom+"A.M"}</p>
                        <p>Visiting Time Till: {e.visitingTimetill>12?e.visitingTimetill-12+"P.M":e.visitingTimetill+"A.M"}</p>
                        <p>Total Patients: {e.patients.length}</p>
                        {Math.ceil(((e.visitingTimetill-e.visitingTimefrom)*60)/20)>=e.patients.length?
                        <Link to={`/book/${e._id}`}><button onClick={()=>{setShow(!show)}}>Book</button></Link>
                        :<button disabled>Bookings Full</button>}
                    </div>
                )
                }
               
            })}</div>
        </div>
        </>
    )
}