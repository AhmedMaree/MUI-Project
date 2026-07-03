import {Button } from '@mui/material';


const BtnCustomize= () => {
   
    return (
        <>
        <Button disabled variant="contained" color="error" sx={{backgroundColor:"red" , "&:hover":{backgroundColor:"yellow"} , "&.Mui-disabled" :{backgroundColor:"pink"}}}>Link1</Button>
         </>
    );
}

export default BtnCustomize;
