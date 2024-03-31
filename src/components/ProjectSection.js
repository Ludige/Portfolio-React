import {Box, IconButton, Paper, Typography} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';

export default function ProjectSection({title, text, site}){
    return <Paper sx={{width:330, height:340, borderRadius:"1vw", display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        {/* TODO: Adicionar imagem do projeto se sobrar tempo */}
        <Box sx={{bgcolor:"plum", width:300, height:180, marginTop:2, borderRadius:"1vw",}}>
            
        </Box>
        <Box sx={{ width:300, height:90,borderRadius:"1vw"}}>
            <Typography sx={{fontFamily:"Atlan", fontWeight:"bold",overflow: 'hidden',textOverflow:"ellipsis"}}>
                {title}
            </Typography>
            <Typography sx={{fontFamily:"Atlan",overflow: 'hidden',textOverflow:"ellipsis",}}>
                {text}
            </Typography>
        </Box>
        <Box sx={{width:300, height:30, display:"flex",justifyContent:"flex-end"}}>
            <IconButton sx={{fontSize:16, fontWeight:"bold", fontFamily:"Atlan", color:"purple", borderRadius:0}}
            onClick={() => {
                window.open(`${site}`, "_blank");
            }}>
                <PetsIcon sx={{width:20, height:20, marginRight:0.5}}/> Saiba Mais
            </IconButton>
        </Box>
        
    </Paper>
}
