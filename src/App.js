
import { Box, AppBar, Container, Typography, IconButton} from "@mui/material";
import { Component } from "react";
import Lottie from "lottie-react";
import 'aos/dist/aos.css';
import dayjs from 'dayjs'

//Components
import ButtonComponent from "./components/Button";
import Presentation from "./components/Presentation";
import ProjectSection from "./components/ProjectSection";
import DividerP from "./components/DividerP";
import TitleC from "./components/TitleC";
import AnimatedIcons from "./components/AnimatedIcons";
//Animations
import sleepingCatAnimation from "./assets/icons/sleeping_cat.json";
import computingCat from "./assets/icons/progrsmadorGato.json";
//Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function getAge(){
  return dayjs().diff(dayjs('2000-12-12'), 'year');
};

class App extends Component{

  render(){
    return( <Box>
      <AppBar sx={{bgcolor: "purple", height:56}} elevation={0}>
        <Box sx={{
          gap: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: {xs: "center", md: "flex-end"},
          px: 16
        }}>
          <ButtonComponent text={"Sobre Mim"}/>
          <ButtonComponent text={"Projetos"}/>
          <ButtonComponent text={"Contato"}/>
        </Box>
      </AppBar>

        {/* Espaço da AppBar */}
      <Box sx={{height:56}}></Box>

      <Box 
        sx={{
          bgcolor: "purple",
          display: "flex",
          flexDirection: {xs:"column", md:"row"},
          justifyContent: "center",
          alignItems: "center",
          minHeight:{xs: "480px", sm:"900px"}}}>
            <Box sx={{order: { xs: 2, md: 1}}}>
              <Lottie animationData={sleepingCatAnimation} style={{ height:520}} />
            </Box>
            
            <Box sx={{order: { xs: 1, md: 2 }, height: {xm: 0, md: 480}}}>
              <Presentation/>
            </Box>
            
      </Box>

      <Container>
          <Box sx={{paddingTop:8, display: "flex",flexDirection: "row"}}  >
            <Box sx={{width: 400, height:200, marginLeft:20}} data-aos="fade-right">
              {/* Text */}
              <TitleC text={"Sobre mim"}/>
              <Typography sx={{
                fontSize:16,
                textAlign:"justify",
                position:"relative",
                maxWidth:"34vw",
                maxHeight:"30vh",
                fontFamily:"Atlan",
                fontWeight:"bold",
                overflow: 'hidden',
                textOverflow:"ellipsis",
                height:150
                }}>
                Meu nome é Luiggi, tenho {getAge()} anos, Sou desenvolvedor FullStack, minha jornada na programação
                começou em 2019 desde então adquiri conhecimento em diversas linguagens, nelas inclusas Java,
                JavaScript, HTML+CSS, Dart, Python, NodeJs, Sql, noSQL. Além de alguns frameworks como o React e Flutter.
              </Typography>
              {/* Buttons */}
              <Box sx={{display: "flex",justifyContent:"center", marginTop:2}}>
                <IconButton sx={{color:"purple", marginRight:2}} onClick={() =>{window.open("https://github.com/ludige", "_blank")}}>
                  <GitHubIcon sx={{width:36, height:36}} />
                </IconButton>
                <IconButton sx={{color:"purple"}}>
                  <LinkedInIcon sx={{width:36, height:36}} onClick={() =>{window.open("https://www.linkedin.com/in/ludige/", "_blank")}}/>
                </IconButton>
              </Box>
            </Box>
            <Box sx={{width:"34vw", height: "36vh"}} xs={2} > 
              <Lottie animationData={computingCat} style={{width:"26vw"}} data-aos="fade-left" />
            </Box>
          </Box>

          <DividerP/>

          {/* Tecnologias */}
          <Box data-aos="zoom-in">
            <TitleC text={"Tecnologias"} />
          </Box>
         
          <Box sx={{display: "flex",justifyContent:"center", marginTop:3, marginBottom:6}}>
            <AnimatedIcons />
          </Box>

          <DividerP/>


          {/* Projetos */}
          <Box data-aos="zoom-in" sx={{marginTop:10, marginBottom:6}}>
            <TitleC text={"Projetos"} />
          </Box>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Box>
              <Box sx={{marginRight:12, marginBottom: 12}} data-aos="fade-right">
                <ProjectSection  
                  title={"Frondend Rede Social em Flutter"}
                  text={"Esse projeto tem como objetivo criar um aplicativo funcional em Flutter que simule uma rede social"}
                  site={"https://github.com/RafaelSouzaCostaa/front_end_rede_social_lr"}
                  />
              </Box>
              <Box data-aos="fade-right">
                <ProjectSection
                  title={"Desenvolvimento em NodeJs"}
                  text={"Esse projeto tem as principais atividades praticadas em NodeJs durante a faculdade"}
                  site={"https://github.com/Ludige/TSI-5P-DSDBD-NodeJs"}
                />
              </Box>
            </Box>
            <Box>
              <Box sx={{marginBottom: 12}} data-aos="fade-left">
                <ProjectSection
                  title={"Backend Rede Social em NodeJs+Mongo"}
                  text={"Esse projeto tem como objetivo mostrar toda a parte do backend da aplicação em Flutter ao lado"}
                  site={"https://github.com/RafaelSouzaCostaa/back_end_rede_social_lr"}
                />
              </Box>
              <Box data-aos="fade-left">
                <ProjectSection
                  title={"Padrões de Projeto"}
                  text={"Esse projeto tem as principais tecnicas de Padrão de Projeto praticadas durante meu tempo na faculdade"}
                  site={"https://github.com/Ludige/TSI-5P-Padrao-de-Projeto"}
                />
              </Box>
            </Box>
          </ Box>
          <DividerP />

        <Box sx={{height:320}}>
          <Box data-aos="zoom-in">
            <TitleC text={"Contato"} />
          </Box>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Typography sx={{color:"purple", fontFamily:"Atlan",fontSize:20}}>
              Email: Luiggi.ms.1@gmail.com
            </Typography>
          </Box>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Typography sx={{color:"purple", fontFamily:"Atlan", fontSize:20}}>
              Whatsapp: +55 (XX) XXXXX-XXXX
            </Typography>
          </Box>
         </Box>
      </Container>
    </Box>
    );
  }
}

export default App;