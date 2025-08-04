import {Box, Paper} from "@mui/material";
import { RiFlutterFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs,FaPython,FaReact } from "react-icons/fa";
import { DiDart,DiMysql } from "react-icons/di";

export default function AnimatedIcons(){
    return <Paper sx={{width:"36vw",display: "flex",justifyContent:"center", gap: 1.8}} elevation={0}>
    <Box  data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" > 
      <RiFlutterFill  color="purple" size={50}/>
    </Box>
    <Box data-aos="fade-down" data-aos-duration="600" data-aos-delay="200">
      <FaJava color="purple" size={50}/>
    </Box>
    <Box data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
      <SiJavascript color="purple" size={50} />
    </Box>
    <Box data-aos="fade-down" data-aos-duration="600" data-aos-delay="400">
      <FaNodeJs color="purple" size={50}/>
    </Box>
    <Box data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
      <FaPython color="purple" size={50}/>
    </Box>
    <Box  data-aos="fade-down" data-aos-duration="600" data-aos-delay="600">
      <FaReact color="purple" size={50}/>
    </Box>
    <Box  data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
      <DiDart color="purple" size={50}/>
    </Box>
    <Box data-aos="fade-down" data-aos-duration="600" data-aos-delay="800">
      <DiMysql color="purple" size={50}/>
    </Box>
  </Paper>
}