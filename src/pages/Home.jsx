import { Box, Typography } from '@mui/material';
import homeBgOne from '../assets/homePageOne.jpg';
import RouteBar from "../components/RouteBar";

const Home = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <RouteBar />
      <Box
        sx={{
          backgroundImage: `url(${homeBgOne})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          height: '95vh',
          margin:"0.5rem",
          borderRadius: "2rem",
          position: "relative",
          zIndex: 0
        }}
      />
      <Box sx={{
        position: "absolute", 
         top: "40%", 
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 22222,
      }}>
        <Typography sx={{
          color: "white", 
          fontSize: {xs:"2rem", md:"4rem"},
           fontFamily: "'Poppins', sans-serif",
           textAlign:"center"
        }}>
          Your Fitness Coach
        </Typography>
         <Typography sx={{
          color: "white", 
          fontSize: {xs:"1.5rem", md:"4rem"},
           fontFamily: "Satisfy, cursive",
            textAlign:"center"

        }}>
        anytime, anywhere
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
