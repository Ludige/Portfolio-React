
import { Box, AppBar, Container, Typography, Divider, IconButton, Grid} from "@mui/material";
import { Component } from "react";
import Lottie from "lottie-react";
import 'aos/dist/aos.css';
import dayjs from 'dayjs'

//Components
import ButtonComponent from "./components/Button";
import Presentation from "./components/Presentation";
import ProjectSection from "./components/ProjectSection";
//Animations
import sleepingCatAnimation from "./assets/icons/sleeping_cat.json";
import computingCat from "./assets/icons/progrsmadorGato.json";
//Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnimatedIcons from "./components/AnimatedIcons";

// function scrollTo (){
//     Link.scrollTo('contato');
// };

function getAge(){
  return dayjs().diff(dayjs('2000-12-12'), 'year');
};

class App extends Component{

  render(){
    return( <Box>
      <AppBar sx={{bgcolor: "purple", height:"9vh"}} elevation={0}>
        <Box sx={{
          gap: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          px: 16
        }}>
          <ButtonComponent text={"Sobre Mim"}/>
          <ButtonComponent text={"Projetos"}/>
          <ButtonComponent text={"Contato"}/>
        </Box>
      </AppBar>
      <Box sx={{bgcolor: "purple", height: "100vh"}}>
        <Container sx={{
          display: "flex",
          flexDirection: "row",
        }}>
          <Box sx={{pt:38,px:3}}>
            <Lottie animationData={sleepingCatAnimation} style={{width:"40vw", height:"80vh"}}/>
          </Box>
          <Box sx={{pt: 25}}>
            <Presentation></Presentation>
          </Box>
        </Container>
      </Box>
      <Container sx={{height: "500vh"}}>
          <Box sx={{paddingTop:8, display: "flex",flexDirection: "row"}}  >
            <Box sx={{width: 400, height:200, marginLeft:20}} data-aos="fade-right">
              {/* Text */}
              <Typography  sx={{
                fontSize:32,
                justifyContent: "center",
                textAlign:"center",
                fontWeight:"bold", color:"purple",
                paddingBottom:2,
                position:"relative",
                fontFamily:"Atlan",
                overflow: 'hidden',
                textOverflow:"ellipsis",
                height:30
              }} variant="h2" >
                Sobre mim
              </Typography>
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
            {/* Animation */}
            <Box sx={{width:"34vw", height: "36vh"}} xs={2} > 
              <Lottie animationData={computingCat} style={{width:"26vw"}} data-aos="fade-left" />
            </Box>
          </Box>

          <Divider sx={{marginTop:5,marginBottom:5 ,color:"purple"}} data-aos="zoom-in" data-aos-delay="200"/>

          <Box sx={{display: "flex",justifyContent:"center"}}>
            <AnimatedIcons />
          </Box>

          <Divider sx={{marginTop:5,marginBottom:5 ,color:"purple"}} data-aos="zoom-in" data-aos-delay="200"/>

          <Grid>
            <ProjectSection />
          </Grid>

      </Container>
    </Box>
    );
  }
}

export default App;