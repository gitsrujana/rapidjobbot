import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { assets } from "../../assets/assets";

const TrackApplications = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#004b6b",
        padding: 4,
        textAlign: "center",
        color: "#fff",
        position: "relative", 
        overflow: "visible", 
        minHeight: "250px", 
        mt:10
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            position: "relative",
          }}
        >
          <img
            src={assets.track}
            alt="Track Applications"
            style={{
              maxWidth: "50%",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              position: "absolute", 
              bottom: "-300px", 
              left: "50%", 
              transform: "translateX(-50%)", 
              zIndex: 1,
              border: "4px solid white", 
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Track Applications
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            Easily track each stage of your job applications, from submission to
            interview. RapidJobsBot's "Track Applications" tool keeps you up to
            date on the status of your applications, so you always know where
            you stand. Stay educated and in control of your career path!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrackApplications;