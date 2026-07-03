import {Card ,CardMedia ,CardContent ,CardActions ,Typography ,Button} from '@mui/material';

const MuiCard = () => {
    return (
        <div>
            <Card sx={{width:"400px"}}>
                <CardMedia component="img" height="150px"  image="https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></CardMedia>
                <CardContent>
                    <Typography variant="h2"> MEARN & FE</Typography>
                    <Typography variant="body1"> loremjkbjnnkndjnvsjnfzgjnavfjdzncgjfknsjgnvjfs nmgjnvrjsfngjsrvkfhkbkkbnhjhj
                        loremjkbjnnkndjnvsjnfzgjnavfjdzncgjfk nsjgnvjfsnmgjnvrjsfngjsr vkfhkbkkbnhjhj
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button href="https:www.google.com">Link1</Button>
                    <Button >Link2</Button>

                </CardActions>
            </Card>
        </div>
    );
}

export default MuiCard;
