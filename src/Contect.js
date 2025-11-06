import React from 'react'
import'./css/Contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contect = () => {
  return (
    <div className="Contect">  <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      className="Form"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Phone" variant="outlined" />
      <TextField id="outlined-basic" label="Adderess" variant="outlined" />
      <TextField id="outlined-basic" label="Department" variant="outlined" />
      <button className="btn-submit">Submit</button>
        <div className="icon">
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="a1"><LinkedInIcon/></a>
           <a href="https://www.instagram.com/_mr__parker__/" className="a2"> <InstagramIcon/></a>
        </div> 
    </Box>
    <div></div>
    </div>

  )
}

export default Contect