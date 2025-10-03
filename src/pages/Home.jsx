import { Box, Button, Typography } from "@mui/material";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";


const Home = () => {
  return (
    <Box
      sx={{
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        maxWidth:"100rem",
         margin:"auto"
      }}
    >
<Section1/>
<Section2/>
<Section3/>

    </Box>
  );
};

export default Home;
