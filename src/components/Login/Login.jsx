import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import styles from "./login.module.css"
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
    <>
     <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin:"auto",marginTop:"15px" }}>
            <LockOutlinedIcon />
          </Avatar>
        <Container maxWidth="xs" sx={{margin:"auto",marginTop:"20px"}}>
            <TextField 
              required
              fullWidth
              name="name"
              label="User Email"
              type="text"
              id="name"
              autoComplete="current-password"  
              value={user.name}  
              onChange = {handleChange}>
            </TextField>
            <TextField margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" 
              value = {user.password}
              onChange = {handleChange}>
            </TextField>
            <Button 
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
              onClick={handleLogin}>
              Login
              </Button>
            <Link className={styles.link} to="/doclogin">Admin Login</Link>
        </Container>
        </>
    )
}