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
        <div className={styles.logo}>
        <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/06/AH_logo_v-60c8405cbca3d.svg"></img>
            <h1>Welcome to Apollo Hospitals.</h1>
            </div>
            <hr/>
            <p className={styles.sphead}>Please Select the speciality to book an Appointment.</p>
            <select className={styles.select} onChange={handleChange}>
                <option value=""></option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Gastroenterology">Gastroenterology</option>
                <option value="Hematology">Hematology</option>
                <option value="Nephrology">Nephrology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Urology">Urology</option>
            </select>
            {state==""? <h3></h3>:<p style={{color:"black",fontSize:"20px",fontWeight:"400"}}>{state} Doctors Availables</p>}
            <div>{docs.map((e)=>{
                if(e.visitingTimetill<e.visitingTimefrom){
                    return(
                    <div key={e.email} className={styles.list}>
                    <div>
                        <h4>Name</h4>
                        <p>{e.name}</p>
                    </div>
                    <div>
                        <h4>Speciality</h4>
                        <p>{e.speciality}</p>
                    </div>
                    <div>
                        <h4>Visiting Time From</h4>
                        <p>{e.visitingTimefrom>12?e.visitingTimefrom-12+"P.M":e.visitingTimefrom+"A.M"}</p>
                    </div>
                    <div>
                        <h4>Visiting Time Till</h4>
                        <p>{e.visitingTimetill>12?e.visitingTimetill-12+"P.M":e.visitingTimetill+"A.M"}</p>
                    </div>
                    <div>
                        <h4>Total Patients</h4>
                        <p>{e.patients.length}</p>
                    </div>
                        {Math.ceil((((e.visitingTimetill+24)-e.visitingTimefrom)*60)/20)>=e.patients.length?
                        <Link to={`/book/${e._id}`}><button className={styles.book} onClick={()=>{setShow(!show)}}>Book</button></Link>
                        :<button className={styles.bookd} disabled>Bookings Full</button>}
                    </div>
                )
                }else{
                    return(
                    <div key={e.email} className={styles.list}>
                    <div>
                        <h4>Name</h4>
                        <p>{e.name}</p>
                    </div>
                    <div>
                        <h4>Speciality</h4>
                        <p>{e.speciality}</p>
                    </div>
                    <div>
                        <h4>Visiting Time From</h4>
                        <p>{e.visitingTimefrom>12?e.visitingTimefrom-12+"P.M":e.visitingTimefrom+"A.M"}</p>
                    </div>
                    <div>
                        <h4>Visiting Time Till</h4>
                        <p>{e.visitingTimetill>12?e.visitingTimetill-12+"P.M":e.visitingTimetill+"A.M"}</p>
                    </div>
                    <div>
                        <h4>Total Patients</h4>
                        <p>{e.patients.length}</p>
                    </div>
                        {Math.ceil(((e.visitingTimetill-e.visitingTimefrom)*60)/20)>=e.patients.length?
                        <Link to={`/book/${e._id}`}><button className={styles.book} onClick={()=>{setShow(!show)}}>Book</button></Link>
                        :<button className={styles.bookd} disabled>Bookings Full</button>}
                    </div>
                )
                }
               
            })}</div>
        </div>
        </>
    )
}