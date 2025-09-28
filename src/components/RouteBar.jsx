import { Box, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";

const RouteBar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        zIndex: 100,
        marginTop: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.4rem 0.6rem",
          borderRadius: "5rem",
          backgroundColor: "rgba(181, 181, 181, 0.7)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "13rem",
        }}
      >
        <Box
          sx={{
            width: "2.2rem",
            height: "2.2rem",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              scale: "1.1",
            }}
          />
        </Box>

        <Box sx={{ fontSize: "0.8rem", fontFamily: "'Poppins', sans-serif", cursor:"pointer",
                        transition: "0.2s ease-in-out",

  ":hover": {
      color:"#303030",
    },    
        }}>
          Get Started
        </Box>

        <Box sx={{  width: "4rem",
              backgroundColor: "#FAD009",
              borderRadius:'1rem',
              height:"1.8rem",
              display:'flex',
              justifyContent:'center',
              alignItems:"center",
              cursor:"pointer",
                transition: "0.2s ease-in-out",
   ":hover": {
      backgroundColor: "black",
      color:"white",
    },             
    
    }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
            
              fontFamily: "'Poppins', sans-serif",
              textAlign: "center",
            }}
          >
            Login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RouteBar;
