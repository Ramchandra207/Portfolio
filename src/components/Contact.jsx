
import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { LinkedIn, GitHub, Article } from "@mui/icons-material";
import graphicImage from "../assets/contact.jpg";
import Navigation from './Navigation'; // Import the Navigation component

const ContactButton = styled(Button)({
  borderRadius: "50px",
  border: "2px solid black",
  color: "black",
  fontSize: "1.2rem",
  textTransform: "none",
  padding: "8px 30px",
  "&:hover": {
    backgroundColor: "#FFC0E0",
  },
});

const PhoneBubble = styled(Box)({
  borderRadius: "50px",
  border: "2px solid black",
  color: "black",
  fontSize: "1.5rem",
  textAlign: "center",
  padding: "10px 40px",
  fontWeight: "bold",
  backgroundColor: "#87CEEB",
  marginBottom: "20px",
});

const Contact = () => {
  return (
    <>
      <Navigation iconColor="black" /> {/* Pass the desired icon color here */}

      <Box
        sx={{
          display: "flex",
          height: "12`0vh",
          width: "100vw",
          position: "fixed", // Prevents scrolling and locks the page
          top: 0,
          left: 0,
          overflow: "hidden", // Prevents overflow scrolling
        }}
      >
        <Grid container sx={{ height: "100%", width: "100%" }}>
          {/* Left Side: Contact Information */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              textAlign: "left",
              gap: 2,
              backgroundColor: "#87CEEB",
              paddingLeft: 4,
            }}
          >
            {/* Let's Contact*/}
            <Typography
              variant="h1"
              className="fjalla-one-regular"
              sx={{
                fontSize: '9rem',
                lineHeight: '1.2',
                color: "#ffffff",
                marginBottom: 2,
              }}
            >
              Let's<br />Contact
            </Typography>

            {/* Phone Number Bubble */}
            <PhoneBubble>
              Ramchandrachoudhary203@gmail.com
            </PhoneBubble>

            {/* Social Links */}
            <Box sx={{ display: "flex", gap: 3, marginTop: "40px" }}>
              <ContactButton
                href="https://www.linkedin.com/in/ramchandra-choudhary-973966284"
                target="_blank"
                startIcon={<LinkedIn />}
              >
                LinkedIn
              </ContactButton>
              <ContactButton
                href="https://github.com/Ramchandra207"
                target="_blank"
                startIcon={<GitHub />}
              >
                GitHub
              </ContactButton>
            </Box>
          </Grid>

          {/* Right Side (Graphic Image) */}
          {/* Right Side (Graphic Image) */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "100vh",
              backgroundColor: "#87CEEB", // light blue background
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={graphicImage}
              alt="Graphic"
              sx={{
                width: "80%",        // Adjust size as needed
                height: "auto",
                border: "3px solid #000", // Optional: add border
                borderRadius: "16px",     // Optional: rounded corners
              }}
            />
          </Grid>

        </Grid>
      </Box>
    </>
  );
};

export default Contact;