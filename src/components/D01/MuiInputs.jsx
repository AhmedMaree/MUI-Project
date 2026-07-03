import {TextField ,Stack} from "@mui/material"
const MuiInputs=()=>{
    return <Stack spacing={5} direction="row">
     <TextField label="outlined" variant="outlined"></TextField>
     <TextField label="filled" variant="filled"></TextField>
     <TextField label="standard" variant="standard"></TextField>

    </Stack>

}
export default MuiInputs;