import {Link} from "react-router-dom"
import styles from "./booking_conf.module.css"
import { useNavigate } from "react-router"
import { useEffect } from "react"
export default function Confirmed(){
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },5000)
    },[])
    return(
        <>
        <div className={styles.head}>
            <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/06/AH_logo_v-60c8405cbca3d.svg" alt="logo"></img>
            <h2>Apollo Hospitals</h2>
        </div>
        <hr />
        <div className={styles.main}>
            <h2>Your Booking is Confirmed.</h2>
            <p>Thank you for booking at Apollo hospitals.</p>
            <div className={styles.guidelines}>
                <p style={{color:"#fff"}}>Please follow the guidelines in hospital premises.</p>
                <ul>
                    <li>Please follow appropriate covid norms.</li>
                    <li>Please bring your mask and sanitizer.</li>
                    <li>Please wear your mask at the hospital premises.</li>
                    <li>Please maintain social distancing.</li>
                </ul>
            </div>
            <Link to="/" className={styles.link}>Home Page.</Link>
        </div>
        </>
    )
}