import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  const navigate = useNavigate();
  return (
    <Box 
      component="section"
      sx={{
        height: "30vh",
        paddingTop:{xs:"1rem", md:"5rem"}, 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >      {/* Bölüm 2 */}
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%", 
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: "black",
            fontFamily: "Poppins",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            maxWidth: "40rem",
            width: "80%",
            textAlign: "center",
          }}
        >
          Here is the place we turn your goals into reality.
        </Typography>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => navigate("/register")}
            aria-label="Register to learn more details about our fitness coaching"
            sx={{
              backgroundColor: "#FAD009",
              color: "black",
              borderRadius: "2rem",
              height: "2.5rem",
              width: "9rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "0.2s ease-in-out",
              marginTop: "2rem",
              fontSize: "0.8rem",
              fontWeight: "600",
              ":hover": {
                color: "white",
                backgroundColor: "black",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section2;
