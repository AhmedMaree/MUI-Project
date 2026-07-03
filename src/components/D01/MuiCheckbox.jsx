import {FormControl ,FormLabel ,FormControlLabel ,Checkbox} from '@mui/material';
import {useState} from "react"
const MuiCheckbox = () => {
    const [skills,setSkills]=useState([])
    const handleChange=(event ,x)=>{
        // console.log(x)
        const idx= skills.indexOf(event.target.value)
        if(idx===-1)
            setSkills([...skills,event.target.value])
        else
            setSkills (skills.filter((skill)=>skill!==event.target.value))
    }
    return (
        <div>
            {console.log(skills)}
            <FormControl>
                <FormLabel>Courses List</FormLabel>
                <FormControlLabel onChange={handleChange} control={<Checkbox color="success"></Checkbox>}
                label="html" value="html"></FormControlLabel>
                <FormControlLabel onChange={handleChange} control={<Checkbox></Checkbox>}
                label="Css" value="Css"></FormControlLabel>
                <FormControlLabel onChange={handleChange} control={<Checkbox></Checkbox>}
                label="JS" value="JS"></FormControlLabel>
            </FormControl>
        </div>
    );
}

export default MuiCheckbox;
