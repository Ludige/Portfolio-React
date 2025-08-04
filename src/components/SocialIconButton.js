import { IconButton } from "@mui/material";

const SocialIconButton = ({ icon: Icon, url }) => (
  <IconButton
    sx={{
      color: "purple",
      backgroundColor: "transparent",
      ':hover': {
        backgroundColor: "transparent",
      }
    }}
    onClick={() => window.open(url, "_blank")}
  >
    <Icon sx={{
      width: 36,
      height: 36,
      transition: "transform 0.3s",
      willChange: "transform",
      ':hover': {
        transform: "scale(1.1)",
      }
    }} />
  </IconButton>
);

export default SocialIconButton;
