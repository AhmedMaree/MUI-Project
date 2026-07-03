import React from 'react';
// import Typography from "@mui/material/Typography"
import {Typography} from "@mui/material"
import { purple } from '@mui/material/colors';
const MuiTypography = () => {
    return (
        <div>
            <Typography>hello</Typography>
            <Typography variant="h1" color="error">h1</Typography>
            <Typography variant="h2" sx={{backgroundColor:purple[200] ,color:"white" , "&:hover":{backgroundColor:"red" ,color:"black"}}}>h2</Typography>
            <Typography variant="h3">h3</Typography>
            <Typography variant="h4">h4</Typography>
            <Typography variant="h5">h5</Typography>
            <Typography variant="h6">h6</Typography>
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>
            <Typography variant="body1">body1</Typography>
            <Typography variant="body2">body2</Typography>
            <Typography variant="button">button</Typography>
            <Typography variant="caption">caption</Typography>
            <Typography variant="overline">overline</Typography>

            <Typography variant="h1" component="h4">h1</Typography>

        </div>
    );
}

export default MuiTypography;
