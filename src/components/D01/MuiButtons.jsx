import {Button , ButtonGroup, IconButton, ToggleButton, ToggleButtonGroup} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
const MuiButtons = () => {
    const [format,setFormat]= useState([])
    const handleChange=(event , x)=>{
        setFormat(x);
    }
    return (
        <div>
            { console.log(format)}
            <ToggleButtonGroup value={format} onChange={handleChange}>
                 <ToggleButton value="bold">bold</ToggleButton>
                 <ToggleButton value="italic">italic</ToggleButton>
                 <ToggleButton value="normal">normal</ToggleButton>

            </ToggleButtonGroup>


            {/* <ButtonGroup>
                <Button variant="contained" startIcon={<VisibilityIcon/>}>cancel</Button>
                <Button variant="outlined" color="success">cancel</Button>
                <Button variant="contained" startIcon={<VisibilityIcon/>}>cancel</Button>
                <Button variant="contained" startIcon={<VisibilityIcon/>}>cancel</Button>

            </ButtonGroup> */}



            {/* <Button variant="text" color="success">cancel</Button>
            <Button variant="contained" startIcon={<VisibilityIcon/>}>cancel</Button>
            <Button variant="contained" endIcon={<VisibilityIcon/>}>cancel</Button>

            <Button variant="contained" color="success" disableRipple disableElevation>cancel</Button>
            <Button variant="outlined" color="success">cancel</Button>

            <Button variant="contained" size="small" disableRipple disableElevation>cancel</Button>
            <Button variant="contained" size="medium" disableRipple disableElevation>cancel</Button>
            <Button variant="contained" size="large" disableRipple disableElevation>cancel</Button>

            <IconButton onClick={()=>{console.log("hii")}}>
            <VisibilityIcon ></VisibilityIcon>
            </IconButton> */}

        </div>
    );
}

export default MuiButtons;
