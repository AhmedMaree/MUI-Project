import {styled } from '@mui/system';

const Mearn_FE=styled("div")({color:"white" , backgroundColor:"pink" , fontSize:60 , "&:hover":{backgroundColor:"red" , fontSize:20} })

const CustomComp= () => {
   
    return (
        <>
        <Mearn_FE>Welcome</Mearn_FE>
         </>
    );
}

export default CustomComp;
