import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import graphicImage from "../assets/favicon.png";
import Navigation from "./Navigation"; // Make sure this path is correct
import { Translate } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <Navigation iconColor="black" /> {/* Drawer Navigation */}
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "120vw",
          position: "fixed", // Locks layout
          top: 0,
          left: 0,
        }}
      >
        <Grid container sx={{ height: "100%", width: "100%" }}>
          {/* Left Side: Text & Elements */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
              gap: 2,
              backgroundColor: "#ADD8E6",
              padding: { xs: "20px", md: "50px" },
              height: "100%",
            }}
          >
            {/* Name Text */}
            <Typography
              variant="h4"
              className="tropi-land"
              sx={{
                fontFamily: "'Tropi Land', sans-serif !important",
                fontWeight: "bold",
                color: "#808080",
                marginBottom: 4,
                textAlign: "center",
                fontSize: "8rem",
              }}
            >
              Ramchandra Choudhary
            </Typography>

            {/* Fullstack Developer Bubble */}
            <Box
              sx={{
                borderRadius: "50px",
                border: "2px solid black",
                color: "black",
                fontSize: { xs: "1rem", md: "1.5rem" },
                textTransform: "none",
                padding: "10px 40px",
                fontWeight: "bold",
                backgroundColor: "#808080",
                marginBottom: 2,
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Fullstack Developer
            </Box>

            {/* Navigation Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                marginTop: "20px",
              }}
            >

            </Box>
          </Grid>

          {/* Right Side: Image Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ADD8E6", // Light blue background
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "500px",
                height: "500px",
                backgroundImage: `url(${graphicImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                border: "5px solid #ccc",
                borderRadius: "12px",
                boxShadow: "0 50px 10px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>


        </Grid>
      </Box>
    </>
  );
};

export default Home;
