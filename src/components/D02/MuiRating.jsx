import {Rating} from '@mui/material';
import {useState} from "react"

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const MuiRating = () => {
    const [val , setVal]=useState(null)
    return (
        <>
        {console.log(val)}
       <Rating precision={0.5} value={val} onChange={(event,newVal)=>{
        setVal(newVal)
       }} icon={<FavoriteIcon color="error"/>} emptyIcon={<FavoriteBorderIcon></FavoriteBorderIcon>}></Rating>
   </>
    );
}

export default MuiRating;
