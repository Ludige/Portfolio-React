import {Button} from "@mui/material";

export default function ButtonComponent({text}){
    return <Button 
    sx={{
        marginTop: 1.4,
        fontSize: 14,
        fontWeight: "bold",
        borderRadius: 2,
        transition: "transform 0.3s",
        willChange: "transform",
        ":hover": {
            backgroundColor: "transparent",
            transform: "scale(1.05)",
        },
        fontFamily: "Atlan"
    }}>
        {text}
    </Button>
}
