import {Avatar} from '@mui/material';
import {useState} from "react"
const MuiAvatar = () => {
    
    return (
        <>
      <Avatar  sx={{ width: 200, height: 200 }} src='https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Avatar>
      <Avatar sx={{backgroundColor:"red"}}>NM</Avatar>
   </>
    );
}

export default MuiAvatar;
