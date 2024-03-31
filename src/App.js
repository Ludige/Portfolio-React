
import { Box, AppBar, Container, Paper, Typography, Divider, IconButton} from "@mui/material";
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
import { RiFlutterFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs,FaPython,FaReact } from "react-icons/fa";
import { DiDart,DiMysql } from "react-icons/di";

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
            <Lottie animationData={sleepingCatAnimation} style={{width:"40vw"}}/>
          </Box>
          <Box sx={{pt: 25}}>
            <Presentation></Presentation>
          </Box>
        </Container>
       
      </Box>
      <Container sx={{height: "500vh"}}>
            <Paper elevation={0} sx={{paddingTop:"10vh", display: "flex", flexDirection: "row"}} >
              <Box sx={{width: {md:"34vw"}, height: {md:"36vh"}, marginLeft:"20vh"}} data-aos="fade-right">
                <Typography  sx={{
                  fontSize:32,
                  justifyContent: "center",
                  textAlign:"center",
                  fontWeight:"bold", color:"purple",
                  paddingBottom:2,
                  position:"relative"
                }} variant="h2" >
                  Sobre mim
                </Typography>
                <Typography sx={{
                  fontSize:16,
                  textAlign:"justify",
                  position:"relative"
                  }} >
                  Meu nome é Luiggi, tenho {getAge()} anos, Sou desenvolvedor FullStack, minha jornada na programação
                  começou em 2019 desde então adquiri conhecimento em diversas linguagens, nelas inclusas Java,
                  JavaScript, HTML+CSS, Dart, Python, NodeJs, Sql, noSQL. Além de alguns frameworks como o React e Flutter.
                </Typography>
                <Box sx={{display: "flex",justifyContent:"center", marginTop:2}}>
                  <IconButton sx={{color:"purple", marginRight:2}} onClick={() =>{window.open("https://github.com/ludige", "_blank")}}>
                    <GitHubIcon sx={{width:36, height:36}} />
                  </IconButton>
                  <IconButton sx={{color:"purple"}}>
                    <LinkedInIcon sx={{width:36, height:36}} onClick={() =>{window.open("https://www.linkedin.com/in/ludige/", "_blank")}}/>
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{width: {xs:1, md:"34vw"}, height: {xs:1, md:"36vh"}}}>
                <Lottie animationData={computingCat} style={{width:"26vw", marginLeft: 48}} data-aos="fade-left"/>
              </Box>
            </Paper>

            <Divider sx={{marginTop:5,marginBottom:5 ,color:"purple"}} data-aos="zoom-in" data-aos-delay="200"/>

            <Box sx={{display: "flex",justifyContent:"center"}}>
              <Paper sx={{width:"36vw",display: "flex",justifyContent:"center"}} elevation={0}>
                <Box sx={{marginRight:2}} data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                  <RiFlutterFill  color="purple" size={50}/>
                </Box>
                <Box sx={{marginRight:2}} data-aos="fade-down" data-aos-duration="600" data-aos-delay="200">
                  <FaJava color="purple" size={50}/>
                </Box>
                <Box sx={{marginRight:2}} data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  <SiJavascript color="purple" size={50} />
                </Box>
                <Box sx={{marginRight:2}} data-aos="fade-down" data-aos-duration="600" data-aos-delay="400">
                  <FaNodeJs color="purple" size={50}/>
                </Box>
                <Box sx={{marginRight:2}} data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                  <FaPython color="purple" size={50}/>
                </Box>
                <Box sx={{marginRight:2}} data-aos="fade-down" data-aos-duration="600" data-aos-delay="600">
                  <FaReact color="purple" size={50}/>
                </Box>
                <Box sx={{marginRight:2}} data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
                  <DiDart color="purple" size={50}/>
                </Box>
                <Box sx={{marginRight:2}} data-aos="fade-down" data-aos-duration="600" data-aos-delay="800">
                  <DiMysql color="purple" size={50}/>
                </Box>
              </Paper>
            </Box>

            <Divider sx={{marginTop:5,marginBottom:5 ,color:"purple"}} data-aos="zoom-in" data-aos-delay="200"/>

            <ProjectSection />
      </Container>
    </Box>
    );
  }
}

export default App;