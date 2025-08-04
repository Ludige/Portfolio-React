import {Box, IconButton, Paper, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import PetsIcon from '@mui/icons-material/Pets';

function getRepository(repositoryUrl) {
  const match = repositoryUrl.match(/github.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  return { user: match[1], repository: match[2] };
}

export default function ProjectSection({repositoryUrl}){
    const [repositoryData, setRepositoryData] = useState(null);
    const [DescriptionReadMe, setDescriptionReadMe] = useState("");
    
    useEffect(() => {
        // Dados simulados para desenvolvimento (evita gasto de requisições da API)
        const mockData = {
            name: "Portfolio-React",
            description: "Meu portfólio desenvolvido em React com Material-UI e animações AOS",
            html_url: repositoryUrl
        };
        setRepositoryData(mockData);
        setDescriptionReadMe("");

        /* API DESATIVADA TEMPORARIAMENTE - DESCOMENTE QUANDO NECESSÁRIO
        const repositoryData = getRepository(repositoryUrl);
        if (!repositoryData) return;
        fetch(`https://api.github.com/repos/${repositoryData.user}/${repositoryData.repository}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json'
          }
        })
        .then(res => res.json())
        .then(data => {
            setRepositoryData(data);
            if (!data.description) {
                fetch(`https://api.github.com/repos/${repositoryData.user}/${repositoryData.repository}/readme`, {
                  headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github.v3.raw'
                  }
                })
                .then(res => res.text())
                .then(text => {
                    let isError = false;
                    try {
                        const json = JSON.parse(text);
                        if (json.message === "Not Found") isError = true;
                    } catch (e) {
                        // Não é JSON, então pode ser válido
                    }
                    setDescriptionReadMe(isError ? "" : text);
                });
            } else {
                setDescriptionReadMe("");
            }
        });
        */
    }, [repositoryUrl]);

    if (!repositoryData) return null;

    return <Paper sx={{width:330, height:340, borderRadius:"1vw", display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        <Box sx={{bgcolor:"plum", width:300, height:180, marginTop:2, borderRadius:"1vw",}}>
            
        </Box>
        <Box sx={{ width:300, height:90,borderRadius:"1vw"}}>
            <Typography 
                sx={{fontFamily:"Atlan",
                fontWeight:"bold",
                overflow: 'hidden',
                textOverflow:"ellipsis"}}>
                {repositoryData.name}
            </Typography>
            <Typography 
                sx={{fontFamily:"Atlan",
                    overflow: 'hidden',
                    textOverflow:"ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical"}}>
                {repositoryData.description || (DescriptionReadMe && DescriptionReadMe.trim() ? DescriptionReadMe : "Nenhuma descrição encontrada.")}
            </Typography>
        </Box>
        <Box sx={{width:300, height:30, display:"flex",justifyContent:"flex-end"}}>
            <IconButton sx={{fontSize:16, fontWeight:"bold", fontFamily:"Atlan", color:"purple", borderRadius:0}}
            onClick={() => {
                window.open(`${repositoryUrl}`, "_blank");
            }}>
                <PetsIcon sx={{width:20, height:20, marginRight:0.5}}/> Saiba Mais
            </IconButton>
        </Box>
        
    </Paper>
}
