import React from "react";
import homeBgOne from "../assets/herodesktop.webp";
import RouteBar from "../components/RouteBar";
import Rating from "@mui/material/Rating";
import CountUp from "react-countup";
import { Box, Button, Typography } from "@mui/material";

const Section1 = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url(${homeBgOne})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "100vh", sm: "70vh", md: "90vh" },
        // scrollSnapAlign: "start",
        position: "relative",
        margin: { xs: "0", md: "0.5rem" },
        borderRadius: { xs: "0", md: "2rem" },
      }}
    >
      <RouteBar />

      {/* Small Tagline */}
      <Typography
        component="span"
        sx={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          color: "white",
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          fontFamily: "Bruno Ace SC, sans-serif",
        }}
      >
        DEFI
      </Typography>

      {/* Hero Main Heading */}
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: "white",
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontFamily: "Nanum Myeongjo, serif",
            width: "100%",
          }}
        >
          Your Fitness Coach
        </Typography>

        <Typography
          component="h2"
          sx={{
            color: "white",
            fontSize: { xs: "2rem", md: "3.5rem" },
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "italic",
          }}
        >
          anytime, anywhere
        </Typography>

        {/* Button with aria-label */}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            aria-label="View more details about our fitness coaching"
            sx={{
              backgroundColor: "#FAD009",
              color: "black",
              borderRadius: "2rem",
              height: "3rem",
              width: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "0.2s ease-in-out",
              marginTop: "2rem",
              ":hover": {
                color: "white",
                backgroundColor: "black",
              },
            }}
          >
            Details
          </Button>
        </Box>

        {/* Ratings and Count */}
        <Box sx={{ mt: "2rem" }}>
          <Rating name="read-only" value={5} readOnly />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "0.8rem", md: "1rem" },
              justifyContent: "center",
              gap: "0.5rem",
              mt: "1rem",
            }}
          >
            <CountUp end={1000} />
            <Typography component="span">+ Happy Clients</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
