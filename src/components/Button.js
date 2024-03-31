import {Button} from "@mui/material";

export default function ButtonComponent({text}){
    return <Button variant="text" sx={{marginTop:1.4, fontSize: 14, fontWeight:"bold", fontFamily:"Atlan"}}>{text}</Button>
}
