import {Box, Paper} from "@mui/material";
import { RiFlutterFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs,FaPython,FaReact } from "react-icons/fa";
import { DiDart,DiMysql } from "react-icons/di";

export default function AnimatedIcons(){
    // Array com as propriedades de cada ícone
    const iconsData = [
        {id: 1, Icon: RiFlutterFill},
        {id: 2, Icon: FaJava},
        {id: 3, Icon: SiJavascript},
        {id: 4, Icon: FaNodeJs},
        {id: 5, Icon: FaPython},
        {id: 6, Icon: FaReact},
        {id: 7, Icon: DiDart},
        {id: 8, Icon: DiMysql}
    ];

    return (
        <Paper sx={{width:"36vw",display: "flex",justifyContent:"center", gap: 1.8}} elevation={0}>
            {iconsData.map((iconData) => {
                const animation = iconData.id % 2 === 0 ? "fade-down" : "fade-up";
                const delay = iconData.id * 100;

                return (
                    <Box 
                        key={iconData.id}
                        data-aos={animation} 
                        data-aos-duration="600" 
                        data-aos-delay={delay}
                    > 
                        <iconData.Icon color="purple" size={48}/>
                    </Box>
                );
            })}
        </Paper>
    );
}