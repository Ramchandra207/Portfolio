import React from "react";
import Navigation from "./Navigation"; // Adjust path if needed
import { Box, Grid, Typography } from "@mui/material";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "🧠" },
  { name: "C++", icon: "➕➕" },
  { name: "Java", icon: "☕" },
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "✨" },
  { name: "HTML", icon: "📄" },
  { name: "CSS", icon: "🎨" },
  { name: "PHP", icon: "🐘" },
];

export default function SkillPage() {
  return (
    <>
      {/* Navigation bar on top */}
      <Navigation iconColor="black" />

      {/* Fixed container box */}
      <Box
        >
        <Grid container sx={{ height: "100%", width: "100%" }}>
          {/* Full width Skills section */}
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#d0e8ff",
              padding: 4,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#003366",
                marginBottom: 3,
                fontWeight: "bold",
              }}
            >
              Language
            </Typography>

            <Grid
              container
              spacing={2}
              sx={{
                maxWidth: "900px",
                justifyContent: "center",
              }}
            >
              {skills.map((skill, idx) => (
                <Grid
                  item
                  key={idx}
                  xs={6}
                  sm={4}
                  md={3}
                  sx={{
                    backgroundColor: "#e6f0ff",
                    border: "1px solid #99bbff",
                    borderRadius: "12px",
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    color: "#003366",
                    userSelect: "none",
                    cursor:"pointer",
                  }}
                >
                  <Typography sx={{ fontSize: "32px" }}>{skill.icon}</Typography>
                  <Typography sx={{ marginTop: 1, fontWeight: "600", fontSize: "16px" }}>
                    {skill.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
