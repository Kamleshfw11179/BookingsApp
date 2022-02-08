import {Link} from "react-router-dom"
import styles from "./booking_conf.module.css"
import { useNavigate } from "react-router"
import { useEffect } from "react"
export default function Confirmed(){
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },2000)
    },[])
    return(
        <div className={styles.main}>
            <h1>Your Booking is Confirmed.</h1>
            <Link to="/">Home Page.</Link>
        </div>
    )
}