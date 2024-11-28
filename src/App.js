
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomStepper from "./components/CustomStepper";

import Navbaar from "./components/Navbaar";
import JobSeeker from "./components/Registrations/Jobseeker";
import Employer from "./components/Registrations/Employer";
import Navbaar1 from "./components/Navbaar1";
import EmployerJobPost from "./Dashboard/EmployerJobPost";
import JobPostingForm from "./Dashboard/EmployerCompanyDetails";
import EducationalDetails from "./components/Registrations/EducationalDetails";
import EmployerCompanyDetails from "./Dashboard/EmployerCompanyDetails";
import EmployerDashbord from "./Dashboard/EmployerDashboard";
import HomePage from "./components/Home/HomePage";
import InterviewPreparation from "./components/Home/InterviewPreparation";
import SavedJobs from "./components/Home/SavedJobs";
import PopularJobCategories from "./components/Home/PopularJobCategories ";
import TrackApplications from "./components/Home/TrackApplications ";

import PremiumAccessPage from "./components/Home/PremiumAccessPage ";
import JobseekerLogin from "./components/Logins/JobseekerLogin";
import EmployerLogin from "./components/Logins/EmployerLogin ";
import ContactForm from "./components/ContactForm ";
import ProfessionalSkills from "./components/Registrations/ProfessionalSkills";
import Navbar from "./components/Navbar";
import PersonalizedJobMatches from "./components/Home/PersonalizedJobMatches";
import SubscriptionPage from "./components/Home/SubscriptionPage";
import LandingPage from "./components/Home/LandingPage";
import Footer from "./components/Footer";
import PremiumJobsSection from "./components/Home/PremiumJobsSection ";



function App() {
 
  return (
    <div className="App">
   
   <Navbar/>  
     
<Routes>
        
        <Route path="/" element={<HomePage />} />
       
        <Route path="/home" element={<HomePage/>} />
        <Route path="/HomePage" element={<HomePage />}/>
        <Route path="/Contactus" element={<ContactForm />}/>
        <Route path="/" element={<JobSeeker />} /> 
        <Route path="/jobseeker" element={<CustomStepper/>}/>
       
        <Route path="/Employer" element={<Employer/>}/>
        <Route path="/employer-dashboard" element={<EmployerDashbord/>}/>
    <Route path="/hirepeople" element={<EmployerDashbord/>}/>

        <Route path="/login" element={<JobseekerLogin/>}/>

     
     
     

        <Route path="/interview-preparation" element={<InterviewPreparation/>}/>
        <Route path="/saved-jobs" element={<SavedJobs/>}/>
        <Route path="/popular-job-categories" element={<PopularJobCategories/>}/>
        <Route path="/track-applications" element ={<TrackApplications/>}/>
        <Route path="/personalized-job-matches" element={<PersonalizedJobMatches/>}/>
        <Route path="/premium-access" element={<PremiumAccessPage/>}/>
            <Route path="/SubscriptionPage" element={<SubscriptionPage/>}/>
       
      </Routes>
      {/* <PremiumJobsSection/> */}
        <Footer/>
    </div>
  );
}

export default App;
