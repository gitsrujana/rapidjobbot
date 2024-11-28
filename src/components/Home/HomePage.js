import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  TextField,
  InputAdornment,
  ButtonBase,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarIcon from "@mui/icons-material/Star";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LandingPage from "./LandingPage";


const HomePage = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
    <  Container
      maxWidth="lg"
      sx={{ backgroundColor: "white", py: 1, borderRadius: 3, mt: 12,ml:isMobile?0:-2,mr:isMobile?2:0 }}
    >
     

      <Box textAlign="center" mb={1}>
       
        <Grid container spacing={2} justifyContent="center" >
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              placeholder="Skill set"
              fullWidth
              sx={{ backgroundColor: "#FFFFFF", borderRadius: 8, boxShadow: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessCenterIcon />
                  </InputAdornment>
                ),
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },

              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              placeholder="Job experience"
              fullWidth
              sx={{ backgroundColor: "#FFFFFF", borderRadius: 8, boxShadow: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon />
                  </InputAdornment>
                ),
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },

              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              placeholder="Location"
              fullWidth
              sx={{ backgroundColor: "#FFFFFF", borderRadius: 8, boxShadow: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },

              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <ButtonBase
                component={Link}
                to="/personalized-job-matches"
                sx={{ width: "100%" }}
              >
                <Paper
                  sx={{
                    p: { xs: 2, sm: 2 },
                    textAlign: "center",
                    backgroundColor: "#0D5263",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                >
                  <WorkIcon
                    sx={{ fontSize: { xs: 30, sm: 35 }, color: "orange" }}
                  />
                  <Typography variant="h6" sx={{color:"white"}}>Personalized Job Matches</Typography>
                  <Typography sx={{color:"white"}}>
                    Find job opportunities tailored to your skills and career
                    goals.
                  </Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase
                component={Link}
                to="/popular-job-categories"
                sx={{ width: "100%" }}
              >
                <Paper
                  sx={{
                    p: { xs: 2, sm: 2 },
                    textAlign: "center",
                    backgroundColor: "#FEF7EF",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                >
                  <AssessmentIcon
                    sx={{ fontSize: { xs: 30, sm: 35 }, color: "#e57373" }}
                  />
                  <Typography variant="h6">Popular Job Categories</Typography>
                  <Typography>
                    Browse top industries like IT, Healthcare, and Sales with
                    ease.
                  </Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase
                component={Link}
                to="/saved-jobs"
                sx={{ width: "100%" }}
              >
                <Paper
                  sx={{
                    p: { xs: 2, sm: 2},
                    textAlign: "center",
                    backgroundColor: "#1B1E2F",
                    color: "#fff",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                >
                  <BookmarkIcon
                    sx={{ fontSize: { xs: 30, sm: 35}, color: "#fff" }}
                  />
                  <Typography variant="h6">Saved Jobs</Typography>
                  <Typography>
                    Quickly access and manage the jobs you've saved for later.
                  </Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase
                component={Link}
                to="/track-applications"
                sx={{ width: "100%" }}
              >
                <Paper
                  sx={{
                    p: { xs: 2, sm: 2 },
                    textAlign: "center",
                    backgroundColor: "#A197DB",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                >
                  <NotificationsIcon
                    sx={{ fontSize: { xs: 30, sm: 35 }, color: "#3f51b5" }}
                  />
                  <Typography variant="h6">Track Applications</Typography>
                  <Typography>
                    Stay updated on your application status and upcoming
                    interviews.
                  </Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase
                component={Link}
                to="/interview-preparation"
                sx={{ width: "100%" }}
              >
                <Paper
                  sx={{
                    p: { xs: 2, sm: 2},
                    textAlign: "center",
                    backgroundColor: "#EF9E6F",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                >
                  <LibraryBooksIcon
                    sx={{ fontSize: { xs: 30, sm: 35 }, color: "#ffb74d" }}
                  />
                  <Typography variant="h6">Interview Preparation</Typography>
                  <Typography>
                    Get resources and tips to ace your next interview.
                  </Typography>
                </Paper>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonBase
                component={Link}
                to="/premium-access"
                sx={{ width: "100%" }}
              >
                <Paper
                  sx={{
                    p: { xs: 2, sm: 2 },
                    textAlign: "center",
                    backgroundColor: "#F2EFFA",
                    color: "#000000",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                >
                  <StarIcon
                    sx={{ fontSize: { xs: 30, sm: 35 }, color: "#000000" }}
                  />
                  <Typography variant="h6">Premium Access</Typography>
                  <Typography>
                    Enjoy basic features free or upgrade for advanced tools and
                    support.
                  </Typography>
                </Paper>
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <ButtonBase
            component={Link}
            to="/help-support"
            sx={{ width: "100%" }}
          >
            <Paper
              sx={{
                p: { xs: 2, sm: 2 },
                mb: 2,
                backgroundColor: "#F36A5F",
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                Help & Support Box
              </Typography>
              <Typography>
                "Need assistance? Our team is here to guide you every step of
                the way!"
              </Typography>
            </Paper>
          </ButtonBase>

          <ButtonBase
            component={Link}
            to="/saved-categories"
            sx={{ width: "100%" }}
          >
            <Paper
              sx={{
                p: { xs: 2, sm: 1 },
                mb: 2,
                backgroundColor: "#FCFCFC",
                borderRadius: 4,
                boxShadow: 3,
              }}
            >
              <Typography variant="h6">Saved Job Categories</Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <FavoriteIcon sx={{ mr: 1 }} />
                <Typography>AI-Powered Job Search</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Find the perfect match with intelligent, AI-driven job
                recommendations.
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <TrendingUpIcon sx={{ mr: 1 }} />
                <Typography>Top Companies Hiring</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Discover leading companies actively looking for talent like you.
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <NotificationsIcon sx={{ mr: 1 }} />
                <Typography>Instant Job Alerts</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Get notified of new jobs that fit your profile instantly.
              </Typography>
            </Paper>
          </ButtonBase>

          <ButtonBase sx={{ width: "100%" }}>
            <Paper
              sx={{
                p: { xs: 2, sm: 2},
                backgroundColor: "#FCFCFC",
                borderRadius: 4,
                textAlign: "center",
                boxShadow: 3,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={1}
              >
                <LightbulbIcon sx={{ mr: 1, color: "#3f51b5" }} />
                <Typography>Job Searching Tip</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                "Highlight specific skills in your resume to increase visibility
                and match with relevant roles."
              </Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      </Grid>
     
    
      </Container>

    
      
    
 
 <LandingPage/>
    </>
  );
};

export default HomePage;
