import React from "react";
import ActionAreaCard from "../ActionAreaCard";
import ListedItems from "../../components/ListItems/ListedItems";
import FooterGraphicText from "../FooterGraphicText/FooterGraphicText";
import { Box, SvgIcon, Typography } from "@mui/material";
// import makeStyles from '@mui/styles/makeStyles';
import localJewelleryImg from "../../assets/locateJewellery.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import SociaMedia from "./SociaMedia";

// const useStyles = makeStyles((theme) => ({

// }));

const classes = {
  footerStyles: {
    color: "white",
    background: "#eee",
    paddingBottom: "2rem",
    borderTop: "1px solid #ccc",
    // paddingTop: 5
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    // alignItems: "start",
    flexWrap: "wrap",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    paddingTop: "1rem",
  },
  aStyles: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    lineHeight: "180%",
  },
  bottom: {
    textAlign: "center",
    padding: "1rem",
  },
};
export default function Footer() {
  //   const classes = useStyles();
  const data = [
    {
      heading: "Account + Orders",
      body1: "My Account",
      body2: "Check Order Status",
      body3: "Return a Product",
      body4: "Return Policies",
      body5: "Shipping Carrier Information",
      body6: "Order Cutoff Information",
      redirect: "home",
    },
    {
      heading: "Marketing Resources",
      body1: "Catalogs + Brochures",
      body2: "Marketing Images",
      body3: "Stuller Companies",
    },
    {
      heading: "Stuller Companies",
      body1: "Gemvision",
      body2: "B&D Lasers",
    },
    {
      heading: "About Stuller",
      body1: "About Us",
      body2: "Stuller First®",
      body3: "Corporate Responsibility",
      body4: "Press Center",
      body5: "International Enquiries",
      body6: "Contact Us",
    },
  ];

  const termsAndConditionData = [
    "PRIVACY POLICY",
    "Compliance",
    "Terms + Conditions",
    "Supplier Portal",
    "Copyright ©2024 Stuller, Inc. All rights reserved",
  ];

  const redirectToFacebook = () => {
    window.open('https://www.facebook.com', '_blank'); // Opens the link in a new tab
  };

  return (
    <footer style={classes.footerStyles}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "3rem 1rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {data?.map((item, index) => (
          <ListedItems
            key={index}
            heading={item.heading}
            body1={item.body1}
            body2={item.body2}
            body3={item.body3}
            body4={item.body4}
            body5={item.body5}
            body6={item.body6}
            body7={item.body7}
            redirect={item.redirect}
          />
        ))}
        {/* {data?.map((item, index) => (
          <>
            <div style={classes.links} id="1">
              <h3>{item.heading}</h3>
              <a href="#" style={classes.aStyles}>
                {item.body1}
              </a>
              <a href="#" style={classes.aStyles}>
                {item.body2}
              </a>
              <a href="#" style={classes.aStyles}>
                {item.body3}
              </a>
            </div>
          </>
        ))} */}

        {/* <div style={classes.links} id="2">
          <h4>Support</h4>
          <a href="#" style={classes.aStyles}>
            FAQs
          </a>
          <a href="#" style={classes.aStyles}>
            Email Us
          </a>
          <a href="#" style={classes.aStyles}>
            Refund Policy
          </a>
        </div>
        <div style={classes.links} id="3">
          <h4>Partnerships</h4>
          <a href="#" style={classes.aStyles}>
            Become a Partner
          </a>
          <a href="#" style={classes.aStyles}>
            Check Status
          </a>
        </div> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "column" },
            gap: "1rem",
            padding: "4rem 2rem 3rem 0",
            flexWrap: "wrap",
          }}
        >
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <FooterGraphicText
              boldTitle={"STULLER"}
              title={"BLOG"}
              description1={"Selling tips, trends,"}
              description2={"education, and more"}
              variantStyle={"h6"}
              variantStyle2={"body2"}
            />
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <FooterGraphicText
              boldTitle={"STULLER"}
              title={"BLOG"}
              description1={"Selling tips, trends,"}
              description2={"education, and more"}
              variantStyle={"body2"}
              variantStyle2={"h6"}
            />
          </Link>
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   borderBottom: "2px solid red",
          paddingRight: "1rem",
          color: "#000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img src={localJewelleryImg} />
          <span className="text-center">
            Connecting consumers with jewelry providers
          </span>
        </Box>
        <Box>
          <Typography>
            Weekdays 8AM - 7PM CST
            <Typography variant="h6" component={"span"} ml={"0.9rem"}>
              800-877-7777
            </Typography>
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          height: 2,
          backgroundColor: "#666",
          margin: "1rem",
        }}
      ></div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   borderBottom: "2px solid red",
          padding: "1rem",
          color: "#666",
          paddingRight: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {termsAndConditionData?.map((tc) => (
            <>
              <Typography variant="body2" className="text-center"
              sx={{
                ":hover":{
                  color: !tc?.toLowerCase().includes("copyrights") ? "rebeccapurple" : ""
                }
              }}>
                {tc}
              </Typography>
            </>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            paddingRight: "1rem",
          }}
        >
          <SociaMedia />
        </Box>
      </Box>
    </footer>
  );
}
