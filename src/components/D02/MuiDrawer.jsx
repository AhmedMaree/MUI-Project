import {IconButton ,Drawer ,Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react"

const MuiDrawer= () => {
    const [open , setOpen]=useState(false)
    return (
        <>
        <IconButton onClick={()=>{setOpen(true)}}>
        <MenuIcon></MenuIcon>
        </IconButton>
        <Drawer anchor='bottom' open={open} onClose={()=>{setOpen(false)}}>
            <Box sx={{height:400}}></Box>
        </Drawer>
         </>
    );
}

export default MuiDrawer;
