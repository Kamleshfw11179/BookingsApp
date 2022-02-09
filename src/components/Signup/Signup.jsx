import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
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
        <>
         <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin:"auto",marginTop:"15px" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Container maxWidth="xs" sx={{margin:"auto",marginTop:"20px",display:"flex", flexDirection:"column"}}>
            <TextField 
              required
              fullWidth
              label="User Name"
              id="name"
              autoComplete="current-name" 
              type="text"
              value={user.name} 
              name="name" 
              onChange = {handleChange}
              sx={{marginTop:"20px"}} 
              placeholder="User Name">
              </TextField>
            <TextField 
              required
              fullWidth
              label="User Email"
              id="email"
              sx={{marginTop:"20px"}} 
              autoComplete="current-name"  type="text" value = {user.email}  name = "email" onChange = {handleChange} placeholder = "User Email"></TextField>
            <TextField  
            required
            fullWidth
            label="User Password"
            id="email"
            sx={{marginTop:"20px"}} 
            type="password" value = {user.password}  name = "password" onChange = {handleChange} placeholder = "User Password"></TextField>
            <Button fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={AddUser}>Signup</Button>
        </Container>
        </>
    )
}