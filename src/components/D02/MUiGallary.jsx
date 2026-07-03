import {ImageList ,ImageListItem} from '@mui/material';

const MuiGallary = () => {
    var imgsData=[
            {
              img: "https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "A",
            },
            {
              img: "https://plus.unsplash.com/premium_photo-1664094921465-40ae9484ab97?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "B",
            },
            {
              img: "https://images.unsplash.com/photo-1707822906791-e5a2f06d83d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "C",
            },
            {
              img: "https://plus.unsplash.com/premium_photo-1676977395508-9eec938ef7ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "D",
            },
            {
              img: "https://images.unsplash.com/photo-1682687220801-eef408f95d71?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "E",
            },
            {
              img: "https://images.unsplash.com/photo-1707871922205-98ccf8f466f7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "F",
            },
          
            {
              img: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "g",
            },
            {
              img: "https://images.unsplash.com/photo-1708162664026-5783c56b083f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "h",
            },
            {
              img: "https://images.unsplash.com/photo-1708103314196-626aa47cc77a?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "i",
            },
            {
              img: "https://images.unsplash.com/photo-1707926578532-1475f78b4b14?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "j",
            },
            {
              img: "https://plus.unsplash.com/premium_photo-1703772891809-528af4d0c45c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "k",
            },
            {
              img: "https://images.unsplash.com/photo-1708105755565-07baf2a1810a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "m",
            },
          ]
    return (
        <>
        <ImageList sx={{width:500 , height:500}} cols={3} rowHeight={150} variant="masonry">
            {imgsData.map((item)=><ImageListItem key={item.title}>
                <img src={item.img}></img>
            </ImageListItem>)}
        </ImageList>
         </>
    );
}

export default MuiGallary;
