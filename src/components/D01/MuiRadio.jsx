import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import {useState} from "react"
const MuiRadio = () => {
    const [val,setVal]=useState(null)
    const handleChange=(event ,x)=>{
         setVal(x)
    }
    return <FormControl>
        {console.log(val)}
        <FormLabel>Experience Years</FormLabel>
        <RadioGroup value={val} onChange={handleChange}>
            <FormControlLabel control={<Radio color="success"></Radio>} label="0-2" value="0-2"></FormControlLabel>
            <FormControlLabel control={<Radio></Radio>} label="3-5" value="3-5"></FormControlLabel>
            <FormControlLabel control={<Radio></Radio>} label="6-8" value="6-8"></FormControlLabel>
        </RadioGroup>
    </FormControl>
}
export default MuiRadio;