import {Typography, Box} from "@mui/material";

export default function Presentation(){
    return <Box>
        <Box sx={{height:60}}>
            <Typography sx={{fontSize:65, color:"white", fontWeight: "bold"}}>Olá, <br/></Typography>
        </Box>
        <Box sx={{height:30, display: "flex", flexDirection: "row", ml: 5}}>
            <Typography sx={{fontSize:44, color:"white",   fontWeight: "bold"}}>meu</Typography>
            <Typography sx={{fontSize:30, color:"white", fontWeight: "bold", mt: 1.8, ml: 1.3}}>nome</Typography>
        </Box>
        <Box sx={{width: 280, height:92, display: "flex", flexDirection: "row"}}>
            <Typography sx={{fontSize:28, color:"white", fontWeight: "bold", mt: 2, ml: 1}}>é</Typography>
            <Typography sx={{fontSize:76, color:"white", fontWeight: "bold", ml: 0.8}}>Luiggi</Typography>
        </Box>
    </Box>
}
