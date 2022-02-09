import { useParams } from "react-router"
import { useState,useEffect } from "react"
import { useContext } from "react"
import {AppContext} from "../AppContextProvider/appContextProvider"
import { useNavigate } from "react-router"
import styles from "./bookings_form.module.css"
import Nav from "../Nav/Nav"
import axios from "axios"
export default function Bookings_Form(){
    const {doctor,setDoctor,user,setUser} = useContext(AppContext)
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        getDoc()
    },[])

    async function getDoc(){
        let data = await axios.get(`http://localhost:3001/doctor/id/${id}`)
        setDoctor(data.data)
    }
    async function getUser(){
        let userid = localStorage.getItem("userId")
        userid = JSON.parse(userid)
        let data = await axios.get(`http://localhost:3001/user/${userid}`)
        console.log(data.data)
        handleAddData1(data.data)
    }
    const [patient,setPatient] = useState({
        name:"",
        age:"",
        gender:"",
        reason:""
    })
 
    function handleChange(e){
        const {name,value} = e.target
        setPatient({...patient,[name]:value})
    }
    async function handleAddData(){
         localStorage.setItem("doc",JSON.stringify(({...doctor,["patients"]:[...doctor["patients"],patient]})))
         let data = JSON.parse(localStorage.getItem("doc"))
         let data1 = await axios.patch(`http://localhost:3001/doctor/${id}`,data)
         console.log(data1)
         getUser()
         if(data1.status==200){
             navigate("/bookings_confirmed")
         }
    }
    async function handleAddData1(user){
        localStorage.setItem("use",JSON.stringify(({...user,["appointments"]:[...user["appointments"],patient]})))
        let data = JSON.parse(localStorage.getItem("use"))
        let uid = localStorage.getItem("userId")
        uid = JSON.parse(uid)
        let data1 = await axios.patch(`http://localhost:3001/user/${uid}`,data)
        console.log(data1)
    }
    return(
        <>
        <Nav />
        <div className={styles.main}>
        <div className={styles.logo}>
        <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/06/AH_logo_v-60c8405cbca3d.svg"></img>
            <h1>Apollo Hospitals.</h1>
            </div>
            <hr/>
        <h2>Please Enter Booking Details</h2>
        </div>
        <div className={styles.form}>
            <label>Name of Patient</label>
            <input type="text" value={patient.name} name="name" placeholder="Name" onChange={handleChange}></input>
            <label>Age of patients</label>
            <input type="number"  value={patient.age} name="age" placeholder="Age" onChange={handleChange}></input>
            <label>Gender of Patient</label>
            <input type="text"  value={patient.gender} name="gender" placeholder="Gender" onChange={handleChange}></input>
            <label>What is the reason for visit.</label>
            <input style={{marginTop:"60px"}} type="text"  value={patient.reason} name="reason" placeholder="Reason" onChange={handleChange}></input>
            <button onClick={handleAddData}>Submit</button>
        </div>
        </>
    )
}