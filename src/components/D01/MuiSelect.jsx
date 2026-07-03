import {TextField ,MenuItem} from "@mui/material"
import {useState} from "react"
const MuiSelect=()=>{

    const [countries,setCountries]=useState([])
    const handleChange=(event, x)=>{
       setCountries(event.target.value)
    }
    return <>
    <TextField multiline rows={5}></TextField>
     {/* {console.log(countries)}
    <TextField select sx={{width:"400px"}} label ="select Country" value={countries}
     onChange={handleChange} 
    //  selectProps={{multiple:true}}
     slotProps={{select:{multiple:true}}}
     >
       
           <MenuItem value="Egypt">Egypt</MenuItem>
           <MenuItem value="Paris">Paris</MenuItem>
           <MenuItem value="London">London</MenuItem>

    </TextField> */}
</>
}
export default MuiSelect;