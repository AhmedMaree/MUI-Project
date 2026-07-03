import React from 'react';
import {Stack ,Divider} from "@mui/material"
const MuiStack = () => {
    return (
       <Stack direction="row"  spacing={5} divider={<Divider orientation="vertical" flexItem></Divider>}>
        <div>1</div>
        <div>2</div>
        <div>3</div>

       </Stack>
    );
}

export default MuiStack;
