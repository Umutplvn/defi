import { Box, Typography } from "@mui/material";
import detailOnePhoto from "../assets/detailsPhoto.jpg";
import detailOnePhoto2 from "../assets/detailsPhoto2.webp";
import ImgOneBanner from "./ImgOneBanner";
import MembbershipsSizeXs from "./MembershipsSizeXs";
import MembershipPlans from "./MembershipPlans";
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Section4 = () => {


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        padding:{xs:"1rem", md:"3rem"},
        
       
      }}
    >
<Box sx={{width:"100%",         height: { xs: "100vh", sm: "70vh", md: "90vh" },
 backgroundColor:"#d9d9d9", borderRadius:"2rem", justifyContent:'center', alignItems:'center', display:"flex", flexDirection:'column'}}>

<MembershipPlans/>
{/* <MembbershipsSizeXs/> */}
    
    </Box>
      

   


    </Box>
  );
};

export default Section4;
