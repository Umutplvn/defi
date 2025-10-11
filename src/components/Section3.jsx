import { Box, Typography } from "@mui/material";
import detailOnePhoto from "../assets/detailsPhoto.jpg";
import detailOnePhoto2 from "../assets/detailsPhoto2.webp";
import ImgOneBanner from "./ImgOneBanner";
import introVideo from "../assets/introVideo.mp4";

const Section3 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        paddingBottom: "4rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: { xs: "center" },
          gap: { xs: "3rem" },
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "1rem", md: "3rem" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "75%", md: "50%" },
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
              borderRadius: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box sx={{ padding: { xs: "1.2rem", md: "2rem" } }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.3rem",
                  color: "#F3F3F1",
                  fontFamily: "Poppins",
                }}
              >
                Move The Way You Enjoy{" "}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "0.9rem",
                  color: "#F3F3F1",
                  fontFamily: "Poppins",
                  maxWidth: "25rem",
                  paddingTop: "0.5rem",
                }}
              >
                This program adapts to you, keeping training fun and motivating.{" "}
              </Typography>
            </Box>
            <ImgOneBanner />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "75%", md: "50%" },
          }}
        >
          <Box
            component="section"
            sx={{
              backgroundColor: "#F0F0F0",
              width: "100%",
              maxWidth: "50rem",
              height: { xs: "50vh", sm: "30rem", md: "40rem" },
              borderRadius: "2rem",
            }}
          >
            <Box sx={{ padding: "2rem" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.3rem",
                  color: "#000000",
                  fontFamily: "Poppins",
                }}
              >
                Train Whenever You Want
              </Typography>
              <Typography
                color="black"
                variant="h4"
                sx={{
                  fontSize: "0.9rem",
                  color: "#000000",
                  fontFamily: "Poppins",
                  maxWidth: "25rem",
                  paddingTop: "0.5rem",
                }}
              >
                Access programs anytime, anywhere. No personal trainer needed.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: "100%",
                mt: { xs: "0", md: "2rem" },
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

      {/* Single Visual */}

   <Box sx={{width:"100%", padding:{xs:"0 1rem", md:"0 3rem"}}} >
       <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems:  "center",
          flexDirection: "column",
          backgroundColor:'black',
          padding:"4rem",
          borderRadius:"2rem"
        }}
      >
<Box sx={{color:"white",  }}>

  <Typography component="h2"  sx={{fontSize:{xs:"1rem", md:"1.8rem"}, fontFamily:"Poppins", textAlign:"center"}}> Say hello to your </Typography>
<Typography component="h4" sx={{fontSize:{xs:"1rem", md:"1.8rem"}, fontFamily:"Poppins", fontStyle:"italic",  textAlign:"center"}}> Say hello to your </Typography>

</Box>

        <video
          width="100%"
          style={{
            maxWidth: "700px",
          }}
          controls
        >
          <source src={introVideo} type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>

      </Box>
   </Box>
    </Box>
  );
};

export default Section3;
