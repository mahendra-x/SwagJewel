import { Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import heartDia from "../../assets/HEART-02.svg";
import ovalImg from "../../assets/OVAL-02.svg";
import pearImg from "../../assets/PEAR-02.svg";
import roundImg from "../../assets/ROUND-02.svg";
import squareImg from "../../assets/SQUARE-02.svg";
import radiantImg from "../../assets/RADIANT-02.svg";
import marquiseImg from "../../assets/MARQUISE-02.svg";
import EMERALDImg from "../../assets/EMERALD............-02.svg";







import ShopByContent from "./ShopByContent.jsx";

function AppbarNavigation({ categories, enableShopByButton }) {
  // Define navigation data
  // const categories = [
  //   {
  //     title: "Brand Name",
  //     links: [
  //       { label: "Home", url: "/home" },
  //       { label: "Catalog", url: "/home" },
  //       { label: "Search", url: "/home" },
  //       { label: "About", url: "/home" },
  //       { label: "Contact", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "Careers",
  //     links: [
  //       { label: "Apply Online", url: "/home" },
  //       { label: "Available Positions", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "About Us",
  //     links: [
  //       { label: "Meet Our Team", url: "/home" },
  //       { label: "Our Responsibilities", url: "/home" },
  //       { label: "Our Codes", url: "/home" },
  //       { label: "Our Values", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "About Us -1",
  //     links: [
  //       { label: "Meet Our Team", url: "/home" },
  //       { label: "Our Responsibilities", url: "/home" },
  //       { label: "Our Codes", url: "/home" },
  //       { label: "Our Values", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "About Us -1",
  //     links: [
  //       { label: "Meet Our Team", url: "/home" },
  //       { label: "Our Responsibilities", url: "/home" },
  //       { label: "Our Codes", url: "/home" },
  //       { label: "Our Values", url: "/home" },
  //     ],
  //   },
  //   {
  //     title: "About Us -1",
  //     links: [
  //       { label: "Meet Our Team", url: "/home" },
  //       { label: "Our Responsibilities", url: "/home" },
  //       { label: "Our Codes", url: "/home" },
  //       { label: "Our Values", url: "/home" },
  //     ],
  //   },
  // ];

  const shopByData = [
    {
      shopTitle: "Shop by shape",
      shapeImage: heartDia,
      shapeName: "ROUND",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: EMERALDImg,
      shapeName: "oval",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: heartDia,
      shapeName: "DIAMOND",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: heartDia,
      shapeName: "DIAMOND",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: heartDia,
      shapeName: "DIAMOND",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: heartDia,
      shapeName: "DIAMOND",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: heartDia,
      shapeName: "DIAMOND",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: heartDia,
      shapeName: "DIAMOND",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: heartDia,
      shapeName: "DIAMOND",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: heartDia,
      shapeName: "DIAMOND",
    },
    // Add more tab data objects as needed
  ];

  const shopByData1 = [
    {
      shopTitle: "Shop by shape",
      shapeImage: "https://assets.stullercloud.com/das/84852004.svg",
      shapeName: "Yellow",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: "https://assets.stullercloud.com/das/84852008.svg",
      shapeName: "Red",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: "https://assets.stullercloud.com/das/84852009.svg",
      shapeName: "Blue",
    },
    {
      shopTitle: "Shop by color",
      shapeImage: "https://assets.stullercloud.com/das/84852017.svg",
      shapeName: "Green",
    }
    // Add more tab data objects as needed
  ];

  return (
    <>
      <div
        className="pages"
        style={{
          display: "flex",
          // justifyContent: { xs: "none", md: "none", lg: "space-between"},
          justifyContent: "flex-start",
          // gap: "8rem",
          columnGap: "7rem",
          padding: "2rem 5rem 2rem 2rem",
          flexWrap: "wrap",
          backgroundColor: "#4C5A63",
          // height: "100vh"
        }}
      >
        {categories?.map((section, index) => (
          <>
            <ul
              key={index}
              style={{ listStyleType: "none", padding: 0, color: "#fff" }}
            >
              <Typography
                sx={{
                  color: "#fff",
                }}
                variant="h6"
              >
                {section.title}
              </Typography>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url}></a>
                  <Link
                    to={link.url}
                    style={{
                      textDecoration: "none",
                      ":hover": { color: "red" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#ddd",
                        ":hover": { color: "#fff", cursor: "pointer" },
                      }}
                      style={{
                        textDecoration: "none",
                        ":hover": { color: "red" },
                      }}
                      variant="subtitle2"
                    >
                      {link.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
      {/* {enableShopByButton &&
        shopByData.map((shop, index) => (
          <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "2rem 5rem 2rem 2rem",
              alignItems: "center",
            }}
          >
            <Typography>{shop.shopTitle}</Typography>
            <Box
              sx={{
                // flexDirection: "column",
                // alignItems: "center"
                textAlign: "center",
              }}
            >
              <img src={shop.shapeImage} width={100} />
              <Typography>{shop.shapeName}</Typography>
            </Box>
          </Box>
          </>
        ))} */}
      <ShopByContent
        shopByData={shopByData}
        enableShopByButton={enableShopByButton}
        shopByType = "shape"
      />
    </>
  );
}

export default AppbarNavigation;
