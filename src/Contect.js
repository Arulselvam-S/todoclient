import React from 'react'
import'./css/Contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import arul  from './assets/arul.jpg'
import logo from './assets/logo.webp'
import { useState } from 'react'
import axios from 'axios';  

const Contect = () => {
   const [pic,setpic] = useState(arul)
    function changepic1() {
      setpic(logo)
    }
    function back1(){
      setpic(arul)
    }
     const [pic2,setpi] = useState(arul)
    function changepic2() {
      setpi(logo)
    }
    function back2(){
      setpi(arul)
    }
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');
    function postevent(){
      axios.post("http://localhost:5000/todo/contactpost",{
        name, email, phone, address
      }).then((res)=>{
        alert("Contact saved successfully 😁")
      }).catch((err)=>{
        console.error(err);
      })
    }
  return (
    <div className="Contect"> 
     <div className="image">
            <img src={pic} alt="" onMouseEnter={changepic1} onMouseLeave={back1}class="img"/>

      </div>
         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      className="Form"
    >
      <TextField id="outlined-basic" 
      label="Name"
      variant="outlined"
      value={name}
      onChange={(e)=>setName(e.target.value)}
       />
      <TextField id="outlined-basic" 
      label="Email" 
      variant="outlined"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic"
       label="Phone" 
       variant="outlined" 
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
       />
      <TextField id="outlined-basic" label="Adderess" 
      variant="outlined"
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
       />
      <button className="btn-submit"
      onClick={postevent}
      >Submit</button>
        <div className="icon">
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="a1"><LinkedInIcon/></a>
           <a href="https://www.instagram.com/_mr__parker__/" className="a2"> <InstagramIcon/></a>
           <a href="senthilkumararul@gmail.com" className="a3"> <EmailIcon/></a>
        </div> 
    </Box>
    <div className="image">
            <img src={pic2} alt="" onMouseEnter={changepic2} onMouseLeave={back2}class="img"/>

        </div>
    </div>

  )
}

export default Contect