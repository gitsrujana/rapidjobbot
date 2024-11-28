import React from "react";
import { Box, Card, Typography, Avatar, Button, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreVert';
import { assets } from "../../assets/assets";

function SavedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Data Coordinator",
      company: "Actalent ",
      rating: "3.4",
      reviews: "272 Reviews",
      experience: "2-4 Yrs",
      salary: "Not disclosed",
      location: "Chennai",
      description:
        "Knowledge in Vehicle Engineering requirements / Standards Preferred...",
      skills: ["Digital Mockup", "Digital", "Data", "DRA", "Mockups"],
      logos: assets.actalent,
    },
    {
      id: 2,
      title: "Freshers Opening",
      company: "Cognizant",
      rating: "3.8",
      reviews: "46.3k Reviews",
      experience: "0 Yrs",
      salary: "2-2.5 Lacs PA",
      location: "Hyderabad/Secunderabad",
      description:
        "Ability to work in night shifts Education 2022 Passouts should have all the marksheets available with...",
      skills: [
        "non voice process",
        "written communication",
        "US Payroll",
        "communication skills",
        "Freshers",
      ],
      logos: assets.cognizant,
    },
    {
      id: 3,
      title: "Hiring Commerce Graduate Fresher For US taxation",
      company: "Datamatrix",
      rating: "3.5",
      reviews: "1.9k Reviews",
      experience: "11 Nov-15 Nov",
      salary: "50000-2 lac PA",
      location: "Mumbai",
      description:
        "Comfortable with rotational and night shift post training for male candidates shift Timings:During...",
      skills: [
        "Us Tax",
        "Taxation",
        "Accounts",
        "Accounting Standards",
        "Individual Taxation",
        "Tax Returns",
        "Accounting",
      ],
      logos:assets. datamatrix,
    },
    {
      id: 4,
      title: "Service Engineer",
      company: "HitachiEnergy",
      rating: "4.2",
      reviews: "461 Reviews",
      experience: "4-5 Yrs",
      salary: "Not disclosed",
      location: "Mumbai",
      description:
        "May resolve/troubleshoot implementation problems and/or train customers on the feature of t...",
      skills: [
        "Mining",
        "Automation",
        "SAP",
        "ISO",
        "PLC",
        "Service engineering",
        "Scheduling",
        "Sensors",
      ],
      logos: assets.hitachi
    },
  ];
  const handleComplete = () => {
    console.log('Item marked as complete');
  };

  const handleDelete = () => {
    console.log('Item deleted');
  };

  const handleMoreOptions = () => {
    console.log('More options opened');
  };

  return (
    <Box
      sx={{
        width: "100vw", 
        minHeight: "120vh",
      
        padding: 0, 
        margin: 0,
        overflowX: "hidden",
        mt:13
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundPosition: 'center',
           
          height: '300px',
          color: 'white',
          borderRadius: '8px',
          p: 4,
          mb: 5,
          backgroundColor: '#0E5263',
          flexWrap:"wrap",
          
        }}
      >
       <img
          src={assets.savedjobs}
          alt="Job Categories"
          style={{
            width: '250px',
            height:"250px",
            borderRadius: '8px',
            
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        />
        <Box
          sx={{
        
            flex:1,
            textAlign: "center"
          }}
        >
          <Typography variant="h4" component="h1" paddingBottom={3} marginTop={-10}>Saved Jobs</Typography>
          <Typography variant="body1" >
            Save jobs that interest you and return to them at any moment. Whether you're in the middle of a search or looking to compare choices,our "Saved Jobs" tool keeps you organized and focused.Keep track of promising possibilities without fear of losing them.
          </Typography>
        </Box>
      </Box>

      <Container sx={{ color: 'grey',margin:0,padding:0,maxWidth:'800px' }}>
        <Box sx={{ padding: 2, margin: 2, backgroundColor: 'grey' }}>
          {jobs.map((job, index) => (
            <Box key={job.id} sx={{ marginBottom: 4, position: "relative",p:2,borderRadius:2,boxShadow:3 }}>
             
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  left: -40,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontWeight: "bold",
                }}
              >
                {index + 1}.
              </Typography>
              {/* Job Card */}
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 2,
                  flexDirection:{xs:"column",md:"row"},
                  position: 'relative', // Ensures the icons can be positioned outside but relative to the card
                }}
              >
                <img
                  src={job.logos}
                  alt={`${job.company} logo`}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                   
                    height: "25%",
                    objectFit: "contain",
                    borderRadius: "50%", // Optional: Add rounded corners
                  }}
                />
                {/* Left Section */}
                <Box sx={{ flex:1, ml:{md:3},mt:{xs:2,md:0} }}>
                  <Typography variant="h6" fontWeight="bold">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.company}{" "}
                    <Typography
                      component="span"
                      sx={{ display: "inline-flex", alignItems: "center", ml: 1 }}
                    >
                      <StarIcon sx={{ fontSize: 16, color: "#FFD700" }} />
                      {job.rating} ({job.reviews})
                    </Typography>
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, mt: 1,flexWrap:"wrap" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <WorkIcon sx={{ fontSize: 18, color: "gray" }} />
                      <Typography variant="body2" color="textSecondary">
                        {job.experience}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: 14,
                          color: "gray",
                          border: "1px solid #cccccc",
                          padding: "2px 6px",
                          borderRadius: 2,
                        }}
                      >
                        {job.salary}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <LocationOnIcon sx={{ fontSize: 18, color: "gray" }} />
                      <Typography variant="body2" color="textSecondary">
                        {job.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ marginTop: 1, color: "#555",textAlign:"start" }}
                    noWrap
                  >
                    {job.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                    {job.skills.map((skill, skillIndex) => (
                      <Typography
                        key={skillIndex}
                        variant="body2"
                        sx={{
                          backgroundColor: "#e0f7fa",
                          padding: "2px 8px",
                          borderRadius: 2,
                          fontSize: 12,
                          color: "#00796b",
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Card>

              {/* Icons outside the card, side by side with space between */}
              <Box sx={{ position: "absolute", right: -50, top: "50%", transform: "translateY(-50%)", display: 'flex', gap: 2, alignItems: 'center', marginRight: '-100px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <CheckCircleIcon sx={{ color: '#005a8d', cursor: 'pointer' }} onClick={() => handleComplete(job.id)} />
                  <DeleteIcon sx={{ color: '#005a8d', cursor: 'pointer' }} onClick={() => handleDelete(job.id)} />
                  <MoreHorizIcon sx={{ color: '#005a8d', cursor: 'pointer' }} onClick={() => handleMoreOptions(job.id)} />
                </div>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      </Box>
  );
}

export default SavedJobs;