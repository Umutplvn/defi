import { Box, Typography } from "@mui/material";
import detailOnePhoto from "../assets/detailsPhoto.jpg";
import detailOnePhoto2 from "../assets/detailsPhoto2.webp";

const Section3 = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Box
        sx={{
          width: { lg: "50%", sm: "100%" },
        }}
      >
        <Box
          component="section"
          sx={{
            backgroundImage: `url(${detailOnePhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            maxWidth: "50rem",
            height: { xs: "50vh", sm: "30rem", md: "40rem" },
            borderRadius: "1rem",
          }}
        >
          <Typography color="white" variant="h3">
            Another Section
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: { lg: "50%", sm: "100%" },
        }}
      >
        <Box
          component="section"
          sx={{
            backgroundColor: "#F0F0F0",
            width: "100%",
            maxWidth: "50rem",
            height: { xs: "50vh", sm: "30rem", md: "40rem" },
            borderRadius: "1rem",
          }}
        >
          <Typography color="white" variant="h3">
            Another Section
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={detailOnePhoto2}
              alt="No Equipment, No Problem Workouts are tailored to your location and available equipment, whether in a hotel room or a fully equipped gym."
              style={{
                width: "75%",
                height: "50%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default Section3;
