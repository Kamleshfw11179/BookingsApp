import styles from "./signup.module.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
export default function SignUp({setState}){
    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    function handleChange(e){
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }

    async function AddUser(){
        let data = await axios.post("http://localhost:3001/user",user)
        if(data.status==201){
          localStorage.setItem("userid",JSON.stringify(data.data._id))
            alert("Signed up successfully.")
            navigate("/")
        }
    }
    return(
        <div className={styles.main}>
            <label>User Name</label>
            <input type="text" value={user.name} name="name" onChange = {handleChange} placeholder="User Name"></input>
            <label>Email</label>
            <input type="text" value = {user.email}  name = "email" onChange = {handleChange} placeholder = "User Email"></input>
            <label>User Password</label>
            <input type="password" value = {user.password}  name = "password" onChange = {handleChange} placeholder = "User Password"></input>
            <button onClick={AddUser}>Signup</button>
        </div>
    )
}