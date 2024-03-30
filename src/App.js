
import { Box, AppBar, Container, Paper, Typography, Divider} from "@mui/material";
import { Component } from "react";
import Lottie from "lottie-react";
import 'aos/dist/aos.css';
//Components
import ButtonComponent from "./components/Button";
import Presentation from "./components/Presentation";
//Animations
import sleepingCatAnimation from "./assets/sleeping_cat.json"
import anime from "./assets/progrsmadorGato.json"


// function scrollTo (){
//     Link.scrollTo('contato');
// };

function getAge(){
  let date = new Date();
  let actualYear = date.getFullYear();
  let actualMonth = date.getMonth() + 1;
  let today = date.getDate();

  let birthday = 12;
  let birthMonth = 12;
  let birthYear = 2000;

  let age = actualYear - birthYear;

  if ((actualMonth < birthMonth) || (actualMonth === birthMonth && today < birthday)) {
      age--;
  }

  return age;
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
          <Box sx={{pt:38}}>
            <Lottie animationData={sleepingCatAnimation} style={{width:"40vw"}}/>
          </Box>
          <Box sx={{pt: 25}}>
            <Presentation></Presentation>
          </Box>
        </Container>
       
      </Box>
      <Container sx={{height: "100vh"}}>
            <Paper elevation={0} sx={{paddingTop:"10vh", display: "flex", flexDirection: "row"}} >
              <Box sx={{width: {xs:1, md:"34vw"}, height: {xs:1, md:"30vh"}, paddingLeft:"20vh"}} data-aos="fade-up">
                <Typography  sx={{fontSize:32, justifyContent: "center",textAlign:"center", fontWeight:"bold", color:"purple", paddingBottom:2, position:"relative"}} variant="h2" >
                  Sobre mim
                </Typography>
                <Typography sx={{fontSize:16,  textAlign:"justify", position:"relative"}} >
                  Meu nome é Luiggi, tenho {getAge()} anos, Sou desenvolvedor FullStack, minha jornada na programação
                  começou em 2019 desde então adquiri conhecimento em diversas linguagens, nelas inclusas Java,
                  JavaScript, HTML+CSS, Dart, Python, NodeJs, Sql, noSQL. Além de alguns frameworks como o React e Flutter.
                </Typography>
              </Box>
              <Box sx={{width: {xs:1, md:"34vw"}, height: {xs:1, md:"36vh"}, }}>
                <Lottie animationData={anime} style={{width:"26vw", paddingLeft: 32}} data-aos="fade-up"/>
              </Box>
            </Paper>
            <Divider sx={{py: 2}}  data-aos="zoom-in" data-aos-delay="200"/>
      </Container>
    </Box>
    );
  }
}

export default App;