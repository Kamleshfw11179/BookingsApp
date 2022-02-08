import {useState} from "react"
import styles from "./login.module.css"
import axios from "axios"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
export default function Login(){
    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        password:""
    })

    function handleChange(e){
        let {name,value} = e.target
        setUser({...user,[name]:value})
    }

    async function handleLogin(){
        let data = await axios.post("http://localhost:3001/user/login",user)
        if(data.data.status==201){
            localStorage.setItem("userId",JSON.stringify(data.data.user._id))
            navigate("/")
        }else{
            alert(data.data.message)
        }
    }
    return(
        <div className={styles.main}>
            <label>User Email</label>
            <input type="text" value={user.name} name = "name" onChange = {handleChange} placeholder="User Email"></input>
            <label>User Password</label>
            <input type="password" value = {user.password}  name = "password" onChange = {handleChange} placeholder = "User Password"></input>
            <button onClick={handleLogin}>Login</button>
            <Link to="/doclogin">Admin Login</Link>
        </div>
    )
}