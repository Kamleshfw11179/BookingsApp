import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import styles from "./nav.module.css"
export default function Nav(){
    const navigate = useNavigate()
    function handleLogout(){
        localStorage.removeItem("userId")
        navigate("/credentials")
    }
    return(
        <div className={styles.main}>
        <h1>Apollo Hosiptals</h1>
            <div className={styles.main1}>
            <Link className={styles.link} to="/userProfile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}