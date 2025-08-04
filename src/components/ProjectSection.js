import {Box, IconButton, Paper, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import CodeIcon from '@mui/icons-material/Code';

// Lista de imagens relacionadas à programação
const programmingImages = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Código colorido
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Código em monitor
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Workspace programação
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Código JavaScript
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Laptop com código
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"  // Código em tela escura
];

function getRandomImage() {
    return programmingImages[Math.floor(Math.random() * programmingImages.length)];
}

function getRepository(repositoryUrl) {
  const match = repositoryUrl.match(/github.com\/([^/]+)\/([^/]+)/);
  if (!match) return null;
  return { user: match[1], repository: match[2] };
}

export default function ProjectSection({repositoryUrl}){
    const [repositoryData, setRepositoryData] = useState(null);
    const [DescriptionReadMe, setDescriptionReadMe] = useState("");
    const [backgroundImage] = useState(getRandomImage()); // Imagem aleatória definida na criação do componente
    
    useEffect(() => {
        const repositoryData = getRepository(repositoryUrl);
        if (!repositoryData) return;
        
        // Para produção, usar dados mockados (mais rápido e confiável)
        if (process.env.NODE_ENV === 'production') {
            const mockData = {
                name: repositoryData.repository,
                description: getProjectDescription(repositoryData.repository),
                html_url: repositoryUrl
            };
            setRepositoryData(mockData);
            setDescriptionReadMe("");
            return;
        }
        
        // Código da API apenas para desenvolvimento
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
    }, [repositoryUrl]);

    // Função para fornecer descrições personalizadas dos projetos
    function getProjectDescription(projectName) {
        const descriptions = {
            "Portfolio-React": "Meu portfólio desenvolvido em React com Material-UI e animações AOS",
            "projeto-exemplo": "Descrição do seu projeto exemplo",
            // Adicione mais projetos conforme necessário
        };
        
        return descriptions[projectName] || "Projeto desenvolvido com tecnologias modernas";
    }

    if (!repositoryData) return null;

    return <Paper sx={{width:330, height:340, borderRadius:3, display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        <Box sx={{
            bgcolor:"plum", 
            width:300, 
            height:180, 
            marginTop:2, 
            borderRadius:3,
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            
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
                <CodeIcon sx={{width:26, height:26, marginRight:0.5}}/> Ver Repositório
            </IconButton>
        </Box>
        
    </Paper>
}
