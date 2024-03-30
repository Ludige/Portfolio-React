import {Typography, Box} from "@mui/material";

export default function Presentation(){
    return <Box>
        <Box sx={{width:200, height:65}}>
            <Typography sx={{fontSize:65, color:"white", width:{md:110}, fontWeight: "bold"}}>Olá, <br/></Typography>
        </Box>
        <Box sx={{width:300, height:30, display: "flex", flexDirection: "row", paddingLeft: 5}}>
            <Typography sx={{fontSize:42, color:"white",  width:{md:110}, fontWeight: "bold"}}>meu</Typography>
            <Typography sx={{fontSize:30, color:"white",  width:{md:110}, fontWeight: "bold",paddingRight: 14, paddingTop: 1.6}}>nome</Typography>
        </Box>
        <Box sx={{width:300, height:90, display: "flex", flexDirection: "row"}}>
            <Typography sx={{fontSize:28, color:"white",  width:{md:110}, fontWeight: "bold",paddingTop: 2}}>é</Typography>
            <Typography sx={{fontSize:76, color:"white",  width:{md:110}, fontWeight: "bold", paddingRight: 21, paddingBottom: 20}}>Luiggi</Typography>
        </Box>
    </Box>
}
