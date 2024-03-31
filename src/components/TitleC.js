import { Typography } from "@mui/material";

export default function TitleC({text}){
    return <Typography  sx={{
        fontSize:32,
        justifyContent: "center",
        textAlign:"center",
        fontWeight:"bold",
        color:"purple",
        paddingBottom:2,
        position:"relative",
        fontFamily:"Atlan",
        overflow: 'hidden',
        textOverflow:"ellipsis",
        height:30,
      }} 
      variant="h2">
    {text}
  </Typography>
}
