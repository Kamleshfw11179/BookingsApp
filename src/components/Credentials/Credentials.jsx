import { useState } from "react"
import styles from "./credentials.module.css"
import Login from "../Login/Login";
import Button from '@mui/material/Button'
import SignUp from "../Signup/Signup"
export default function Credentials(){
    const [state,setState] = useState("login")
    return(
        <>
         <div className={styles.logo}>
        <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/06/AH_logo_v-60c8405cbca3d.svg"></img>
            <h1>Welcome to Apollo Hospitals.</h1>
            </div>
            <hr />
        <div>
        <div className={styles.main}>
            <Button  variant="outlined" sx={{width:"100%"}} onClick={()=>{setState("login")}}>Login</Button>
            <Button  variant="outlined"  sx={{width:"100%"}}  onClick={()=>{setState("signup")}}>SignUp</Button>
        </div>
            {state=="login"?<Login />:<SignUp />}
        </div>
        </>
    )
}