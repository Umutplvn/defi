import { Box, Typography } from "@mui/material";
import homeBgOne from "../assets/herodesktop.webp";
import RouteBar from "../components/RouteBar";
import Rating from "@mui/material/Rating";
import CountUp from "react-countup";

const Home = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <RouteBar />
      <Box
        sx={{
          backgroundImage: `url(${homeBgOne})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "100vh", md: "90vh" },
          margin: { xs: "0", md: "0.5rem" },
          borderRadius: { xs: "0", md: "2rem" },
          position: "relative",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 22222,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "2rem", md: "4rem" },
            fontFamily: "'Poppins', sans-serif",
            textAlign: "center",
          }}
        >
          Your Fitness Coach
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1.5rem", md: "4rem" },
            fontFamily: "Satisfy, cursive",
            textAlign: "center",
          }}
        >
          anytime, anywhere
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
           <Rating name="read-only" value={5} readOnly />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "0.8rem", md: "1rem" },
              width: { xs: "8.4rem", md: "11rem" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: { xs: "1rem", md: "3rem" },
                textAlign: "right",
              }}
            >
              <CountUp end={1000} />
            </Box>

            <Typography
              sx={{
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "0.8rem", md: "1rem" },
                whiteSpace: "nowrap",
              }}
            >
              + Happy Clients
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
