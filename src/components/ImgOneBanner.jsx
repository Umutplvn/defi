import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import sportSvg1 from "../assets/sportSvg1.png";
import sportSvg2 from "../assets/sportSvg2.png";
import sportSvg3 from "../assets/sportSvg3.png";
import sportSvg4 from "../assets/sportSvg4.png";
import sportSvg5 from "../assets/sportSvg5.png";
import sportSvg6 from "../assets/sportSvg6.png";
import sportSvg7 from "../assets/sportSvg7.png";

const ImgOneBanner = () => {
  const sportSvgArr = [
    sportSvg1,
    sportSvg2,
    sportSvg3,
    sportSvg4,
    sportSvg5,
    sportSvg6,
    sportSvg7,
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "2rem",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Marquee
        speed={30}  
        direction="right"         
      >
        {sportSvgArr.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "white",
              opacity: 0.7,
              width: { xs: "3rem", md: "5rem" },
              padding: { xs: "0.6rem", md: "1rem" },
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "0.5rem",
              flexShrink: 0,
            }}
          >
            <img
              src={item}
              alt={`sport-${index}`}
              style={{
                width: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default ImgOneBanner;
