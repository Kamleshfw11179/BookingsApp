import Booking from "./components/Bookings/Bookings"
import Credentials from "./components/Credentials/Credentials"
import {Routes,Route} from "react-router-dom"
import Bookings_Form from "./components/bookings_form/bookings_form"
import Confirmed from "./components/bookings_confirmation/booking_confirmation"
import { useState } from "react"
import DoctorLogin from "./components/doctorLogin/doctorlogin"
import Userdash from "./components/Userdash/Userdsah"
import Doctordash from "./components/doctorDash/doctorDash"
export default function App(){
  const [time,setTime] = useState(0)
  return(
    <Routes>
    <Route path="/" element={<Booking time={time} setTime={setTime}/>}/>
    <Route path="/credentials" element={<Credentials />}/>
    <Route path="/book/:id" element={<Bookings_Form />}/>
    <Route path="/bookings_confirmed" element={<Confirmed />}/>
    <Route path="/doclogin" element={<DoctorLogin />} />
    <Route path="/docDash" element={<Doctordash />}></Route>
    <Route path="/userProfile" element = {<Userdash />} />
   </Routes>
  )
}