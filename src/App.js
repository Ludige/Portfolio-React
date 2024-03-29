
import { Box, AppBar, Container, Paper, Typography} from "@mui/material";
import { Component } from "react";
import Lottie from "lottie-react";
//Components
import ButtonComponent from "./components/Button";
import Presentation from "./components/Presentation";
//Animations
import sleepingCatAnimation from "./assets/sleeping_cat.json"


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
          <Box sx={{
            pt:38,
            }}>
            <Lottie animationData={sleepingCatAnimation} style={{width:550}}/>
          </Box>
          <Box sx={{pt: 25}}>
            <Presentation></Presentation>
          </Box>
        </Container>
       
      </Box>
      <Container sx={{bgcolor: "white", height: "100vh"}}>
            <Paper>
              <Typography>Sobre Mim</Typography>

              <Typography>
                Meu nome é Luiggi, tenho 23 anos, Sou um desenvolvedor FullStack, minha jornada na programação 
                começou em 2019 desde então adquiri conhecimento em diversas linguagens, nelas inclusas Java,
                JavaScript, HTML+CSS, Dart, Python, NodeJs, Sql, noSQL. Além de alguns frameworks como o React e Flutter.
              </Typography>
            </Paper>
      </Container>
    </Box>
    );
  }
}

export default App;