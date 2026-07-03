import {FormControlLabel ,Switch} from '@mui/material';
import {useState} from "react"
const MuiSwitch = () => {
    const [val, setVal]=useState(false)
    return (
      <FormControlLabel control={<Switch checked={val} onChange={(event)=>{
        setVal(event.target.checked)
      }}></Switch>} 
      label="Dark mode"></FormControlLabel>
    );
}

export default MuiSwitch;
