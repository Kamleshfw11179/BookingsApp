import {useState} from "react"
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useNavigate } from "react-router"
import styles from "./doctorlogin.module.css"
export default function DoctorLogin(){
    const navigate = useNavigate()
    const[user,setUser] = useState("")
    function handleChange(e){
        setUser(e.target.value)
    }

    async function getUser(){
        if(user.length<=3){
            return;
        }
        let data = await axios.get(`http://localhost:3001/doctor/email/${user}`)
        if(data.status>=200&&data.status<=300){
        localStorage.setItem("docInfo",JSON.stringify(data.data))
        navigate("/docDash")
        }

    }
    return(
        <>
         <div className={styles.logo}>
        <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/06/AH_logo_v-60c8405cbca3d.svg"></img>
            <h1>Welcome to Apollo Hospitals.</h1>
            </div>
            <hr />
        <div className={styles.main}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin:"auto",marginTop:"15px" ,marginBottom:"15px" }}>
        <LockOutlinedIcon />
        </Avatar>
            <TextField 
            required
            fullWidth
            name="name"
            label="Doctors Email"
            type="text"
            id="name"  
            value={user} 
            onChange={handleChange}></TextField>
            <Button 
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 ,marginTop:"10px" }}  
            onClick={getUser}>Login</Button>
        </div>
        </>
    )
}