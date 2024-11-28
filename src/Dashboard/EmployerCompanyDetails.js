import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import axios from 'axios';

function EmployerCompanyDetails() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [formData, setFormData] = useState({
    jobTimings: "9:30 AM - 6:30 PM Monday to Saturday",
    interviewDetails: "11:00 AM - 4:00 PM Monday to Saturday",
    companyName: '',
    contactPersonName: '',
    phoneNumber: '',
    email: '',
    contactPersonProfile: '',
    sizeOfOrganization: '',
    jobAddress: '',
    hiringFrequency: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateForm = () => {
    
    const newErrors = {};
   
    if (!formData.companyName) newErrors.companyName = 'Company Name is required';
    if (!formData.contactPersonName) newErrors.contactPersonName = 'Contact Person Name is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.contactPersonProfile) newErrors.contactPersonProfile = 'Contact Person Profile is required';
    if (!formData.sizeOfOrganization) newErrors.organizationSize = 'Organization Size is required';
    if (!formData.jobAddress) newErrors.jobAddress = 'Job Address is required';
    if (!formData.hiringFrequency) newErrors.jobVacancyFrequency = 'Job Vacancy Frequency is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    
   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
   
    const phonePattern = /^[0-9]{10}$/;  
    if (formData.phoneNumber && !phonePattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number (10 digits)';
    }
    const validHiringFrequencies = ['weekly', 'monthly', 'quarterly', 'yearly'];
    if (formData.hiringFrequency && !validHiringFrequencies.includes(formData.hiringFrequency)) {
      newErrors.hiringFrequency = 'Hiring Frequency must be one of: weekly, monthly, quarterly, yearly';
    }
  

    return newErrors;
  };
  const { termsAccepted, ...dataToSubmit } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log('Form submit triggered');
    const formErrors = validateForm();
    console.log('Form Errors:', formErrors); 
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }


    try {
      const response = await axios.post('http://localhost:5000/v1/api/employer-companydetails/jobs', formData);
      console.log("Job posted successfully:", response.data);
      alert("Job posted successfully!");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        alert(`Error: ${error.response.data.message || "Failed to post the job."}`);
      } else if (error.request) {
        console.error("Error request:", error.request);
        alert("No response from the server. Please try again later.");
      } else {
        console.error("Error message:", error.message);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    < >
     
     <Box 
   sx={{
    border:"2px solid whitesmoke",
    boxShadow:"35px",
    marginTop:"5%",
    width:isMobile?'94%':"60%",
    marginLeft:isMobile?'2%':'2%',
    marginRight:"2%",
   
   }}
   >
        <Typography variant="h6" sx={{ mt: 10 ,fontWeight:"bold"}}>
          Timings
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Job Timings
                </Typography>
            <TextField
             
              value={formData.jobTimings}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px',backgroundColor:"whitesmoke" } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
           Interview details
                </Typography>
            <TextField
             
              value={formData.interviewDetails}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px',backgroundColor:"whitesmoke" } }}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4 ,fontWeight:"bold"}}>
          About Your Company
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
           Company Name
                </Typography>
            <TextField
          
              placeholder="Eg. Eloquent info Solutions"
              fullWidth
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '5px',backgroundColor:"whitesmoke" } }}
              error={!!errors.companyName}
              helperText={errors.companyName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Contact Person Name 
                </Typography>
            <TextField
              
              placeholder="Eg. Nilesh"
              fullWidth
              value={formData.contactPersonName}
              onChange={(e) => handleChange('contactPersonName', e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '5px' ,backgroundColor:"whitesmoke"} }}
              error={!!errors.contactPersonName}
              helperText={errors.contactPersonName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Phone Number*
                </Typography>
            <TextField
            
              placeholder="+91"
              fullWidth
              value={formData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '5px',backgroundColor:"whitesmoke" } }}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Email *
                </Typography>
            <TextField
         
              placeholder="Enter email"
              fullWidth
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '5px',backgroundColor:"whitesmoke" } }}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Contact Person Profile*
                </Typography>
            <FormControl fullWidth>
            
              <Select
                value={formData.contactPersonProfile}
                onChange={(e) => handleChange('contactPersonProfile', e.target.value)}
                sx={{ borderRadius: '5px',backgroundColor:"whitesmoke" }}
                error={!!errors.contactPersonProfile}
              >
                <MenuItem value="HR">HR / Owner</MenuItem>
              </Select>
            </FormControl>
            {errors.contactPersonProfile && (
              <Typography color="error" variant="body2">
                {errors.contactPersonProfile}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Size of Organization *
                </Typography>
            <FormControl fullWidth>
          
              <Select
                value={formData.sizeOfOrganization}
                onChange={(e) => handleChange('sizeOfOrganization', e.target.value)}
                sx={{ borderRadius: '5px',backgroundColor:"whitesmoke" }}
                error={!!errors.sizeOfOrganization}
              >
                <MenuItem value="1-10">1-10</MenuItem>
                <MenuItem value="11-50">11-50</MenuItem>
                <MenuItem value="51-200">51-200</MenuItem>
                <MenuItem value="200+">200+</MenuItem>
              </Select>
            </FormControl>
            {errors.sizeOfOrganization && (
              <Typography color="error" variant="body2">
                {errors.sizeOfOrganization}
              </Typography>
            )}
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4 ,fontWeight:"bold"}}>
          Job Details
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Job Address*
                </Typography>
            <TextField
            
              placeholder="Enter job address"
              fullWidth
              value={formData.jobAddress}
              onChange={(e) => handleChange('jobAddress', e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: '5px' ,backgroundColor:"whitesmoke"} }}
              error={!!errors.jobAddress}
              helperText={errors.jobAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Hiring Frequency * 
                </Typography>
            <FormControl fullWidth>
              
              <Select
                value={formData.hiringFrequency}
                onChange={(e) => handleChange('hiringFrequency', e.target.value)}
                sx={{ borderRadius: '5px',backgroundColor:"whitesmoke" }}
                error={!!errors.hiringFrequency}
              >
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="quarterly">Quarterly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
            {errors.hiringFrequency && (
              <Typography color="error" variant="body2">
                {errors.hiringFrequency}
              </Typography>
            )}
          </Grid>
        </Grid>

        <FormControlLabel
        
          control={
            <Checkbox
              checked={formData.termsAccepted}
              onChange={(e) => handleChange('termsAccepted', e.target.checked)}
            />
          }
          label="I accept the terms and conditions"
        />
        {errors.termsAccepted && (
          <Typography color="error" variant="body2">
            {errors.termsAccepted}
          </Typography>
        )}

        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" sx={{textTransform:"none"}} onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default EmployerCompanyDetails;
