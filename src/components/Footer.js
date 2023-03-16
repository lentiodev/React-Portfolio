import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Favorite } from "@mui/icons-material";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "2.3rem",
        alignItems: "center",
        bgcolor: "grey.100",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
        <Typography variant="body1">Designed with</Typography>
        <Favorite sx={{ fill: red[500], height: "1.3em", width: "1.3em", ml: 0.3 }} />
        <Typography variant="body1"> by lentiodev</Typography>
      </Box>
    </Box>
  );
}

export default Contact;

