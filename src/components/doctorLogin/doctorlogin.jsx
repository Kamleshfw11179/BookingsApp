import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import styles from "./doctorlogin.module.css"
export default function DoctorLogin(){
    const navigate = useNavigate()
    const[user,setUser] = useState("")
    function handleChange(e){
        setUser(e.target.value)
    }

    async function getUser(){
        let data = await axios.get(`http://localhost:3001/doctor/email/${user}`)
        if(data.status>=200&&data.status<=300){
        localStorage.setItem("docInfo",JSON.stringify(data.data))
        navigate("/docDash")
        }

    }
    return(
        <div className={styles.main}>
            <label>Doctor Email</label>
            <input type="text" value={user} placeholder="Email" onChange={handleChange}></input>
            <button onClick={getUser}>Login</button>
        </div>
    )
}