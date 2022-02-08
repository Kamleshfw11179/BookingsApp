import { useState } from "react"
import styles from "./credentials.module.css"
import Login from "../Login/Login"
import SignUp from "../Signup/Signup"
export default function Credentials(){
    const [state,setState] = useState("login")
    return(
        <div>
        <div className={styles.main}>
            <div className={styles.main1} onClick={()=>{setState("login")}}>Login</div>
            <div className={styles.main2} onClick={()=>{setState("signup")}}>SignUp</div>
        </div>
            {state=="login"?<Login />:<SignUp />}
        </div>
    )
}