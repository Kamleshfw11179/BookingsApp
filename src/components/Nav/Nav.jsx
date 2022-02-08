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
            <div className={styles.main1}>
            <Link to="/userProfile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}