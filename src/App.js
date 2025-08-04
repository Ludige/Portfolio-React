
import { Box, AppBar, Container, Typography} from "@mui/material";
import { useEffect } from "react";
import Lottie from "lottie-react";
import 'aos/dist/aos.css';
import dayjs from 'dayjs'

//Components
import ButtonComponent from "./components/Button";
import Presentation from "./components/Presentation";
// import ProjectSection from "./components/ProjectSection";
import DividerP from "./components/DividerP";
import TitleC from "./components/TitleC";
import AnimatedIcons from "./components/AnimatedIcons";
//Animations
import sleepingCatAnimation from "./assets/icons/sleeping_cat.json";
import computingCat from "./assets/icons/progrsmadorGato.json";
//Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialIconButton from "./components/SocialIconButton";

function getAge(){
  return dayjs().diff(dayjs('2000-12-12'), 'year');
};

function App() {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({ once: true });
  }, []);

  return (
    <Box>
      <AppBar sx={{bgcolor: "purple", height:56}} elevation={0}>
        <Box sx={{
          gap: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: {xs: "center", md: "flex-end"},
          px: {xs: 2, md:18}
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
          minwidth: "360px",
          display: "flex",
          flexDirection: {xs:"column", md:"row"},
          justifyContent: "center",
          alignItems: "center",
          }}>
            <Box sx={{order: { xs: 2, md: 1}}}>
              <Lottie animationData={sleepingCatAnimation} style={{ height:520}} />
            </Box>
            <Box sx={{order: { xs: 1, md: 2 }, height: {xm: 0, md: 480}, mb: {xs: -16, md: 0}}}>
              <Presentation/>
            </Box>
            
      </Box>

      <Container>
          <Box 
            sx={{
                display: "flex",
                flexDirection: {xs: "column", md:"row"},
                mt: 8,
                alignItems: "center",
                justifyContent:"center",
                }}>
            <Box sx={{width: 420, height:280}} data-aos="fade-right">
              <TitleC text={"Sobre mim"}/>
              <Typography sx={{
                fontSize:16,
                textAlign:"justify",
                position:"relative",
                fontFamily:"Atlan",
                fontWeight:"bold",
                overflow: 'hidden',
                textOverflow:"ellipsis",
                }}>
                Meu nome é Luiggi, tenho {getAge()} anos, Sou desenvolvedor FullStack, minha jornada na programação
                começou em 2019 desde então adquiri conhecimento em diversas linguagens, nelas inclusas Java,
                JavaScript, HTML+CSS, Dart, Python, NodeJs, Sql, noSQL. Além de alguns frameworks como o React e Flutter.
              </Typography>
              {/* Buttons */}
              <Box sx={{display: "flex",justifyContent:"center", marginTop:2, gap: 1}}>
                <SocialIconButton icon={GitHubIcon} url="https://github.com/ludige" />
                <SocialIconButton icon={LinkedInIcon} url="https://www.linkedin.com/in/ludige/" />
              </Box>
            </Box>
            <Box sx={{width:320, height: 260, display: { xs: 'none', md: 'block' } }} > 
              <Lottie animationData={computingCat} style={{width:380}} data-aos="fade-left" />
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
          <Box data-aos="zoom-in" sx={{ marginBottom:6}}>
            <TitleC text={"Projetos"} />
          </Box>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            {/* <Box>
              <Box sx={{marginRight:12, marginBottom: 12}} data-aos="fade-right">
                <ProjectSection  repositoryUrl={"https://github.com/RafaelSouzaCostaa/front_end_rede_social_lr"}
                  />
              </Box>
              <Box data-aos="fade-right">
                <ProjectSection repositoryUrl={"https://github.com/Ludige/TSI-5P-DSDBD-NodeJs"}
                />
              </Box>
            </Box>
            <Box>
              <Box sx={{marginBottom: 12}} data-aos="fade-left">
                <ProjectSection repositoryUrl={"https://github.com/RafaelSouzaCostaa/back_end_rede_social_lr"}
                />
              </Box>
              <Box data-aos="fade-left">
                <ProjectSection repositoryUrl={"https://github.com/Ludige/TSI-5P-Padrao-de-Projeto"}
                />
              </Box> 
             </Box> */}
          </ Box>
          <DividerP />

        <Box sx={{height:180}}>
          <Box data-aos="zoom-in">
            <TitleC text={"Contato"} />
          </Box>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Typography sx={{color:"purple", fontFamily:"Atlan",fontSize:18}}>
              Email: Luiggi.ms.1@gmail.com
            </Typography>
          </Box>
          <Box sx={{display:"flex", justifyContent:"center"}}>
            <Typography sx={{color:"purple", fontFamily:"Atlan", fontSize:18}}>
              Whatsapp: +55 (64) 99294-4179
            </Typography>
          </Box>
         </Box>
      </Container>
    </Box>
    );
  }

export default App;