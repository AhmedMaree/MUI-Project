import {Autocomplete ,TextField} from '@mui/material';
import {useState} from "react"
const MuiAutoComplete = () => {
    const skills=["Html" ,"Css" , "Js" , "React" , "Angular" , "NodeJs"] 
    const [val,setVal]=useState(null)
    return (
        <Autocomplete  options={skills} renderInput={(params)=><TextField {...params}></TextField>} value={val} onChange={(event,newVal)=>{
            setVal(newVal)
        }}></Autocomplete >
    );
}

export default MuiAutoComplete;
