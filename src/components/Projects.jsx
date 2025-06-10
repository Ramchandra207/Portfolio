import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import Navigation from "./Navigation";
import hotelVideo from "../assets/Hotel project.mp4"; // renamed for consistency
import chatapp from "../assets/chat app.mp4";          // no space in file name
import sideBorder from "../assets/projects.png";

const projects = [
  {
    title: "Hotel Management System",
    description:
      "The hotel management system is a web-based application designed to simplify and streamline hotel operations like room booking, guest management, and reservation tracking. Built with HTML, CSS, JavaScript, and PHP, this system enables users to book rooms online, manage check-in and check-out dates, and provide contact information. On the backend, PHP connects the system to a MySQL database, ensuring efficient data storage and retrieval. The project aims to provide a user-friendly interface for guests and an easy-to-manage platform for hotel staff, reducing manual work and improving accuracy in handling reservations.",
    image: hotelVideo,
    type: "video",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application using Flask and Socket.IO. Allows communication between two users with a simple interface and instant updates using WebSockets.",
    image: chatapp,
    type: "video",
  },
];

function Projects() {
  return (
    <>
      <Navigation iconColor="#FF86C8" />

      <Box
        sx={{
          backgroundColor: "black",
          backgroundImage: `url(${sideBorder})`,
          backgroundRepeat: "repeat-y",
          backgroundPosition: "left",
          backgroundSize: "contain",
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          paddingTop: "0",
          paddingX: 4,
          boxSizing: "border-box",
          margin: 0,
        }}
      >
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              border: "3px solid white",
              color: "white",
              fontSize: "3rem",
              textTransform: "none",
              padding: "15px 50px",
              backgroundColor: "#FF86C8",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "#FFC0E0",
              },
            }}
          >
            Projects
          </Button>
        </Box>

        <Grid container spacing={8} justifyContent="center" sx={{ maxWidth: "90%", margin: "0 auto" }}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} container spacing={4} alignItems="center" sx={{ marginBottom: 8 }}>
              <Grid item xs={12} md={5}>
                {project.type === "video" ? (
                  <video
                    controls
                    width="100%"
                    style={{
                      borderRadius: "12px",
                      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <source src={project.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", borderRadius: "12px" }}
                  />
                )}
              </Grid>

              <Grid item xs={12} md={7}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#ffff",
                    textAlign: "left",
                    lineHeight: 1.8,
                    fontSize: "0.9rem",
                    padding: 3,
                  }}
                >
                  {project.description}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Projects;
