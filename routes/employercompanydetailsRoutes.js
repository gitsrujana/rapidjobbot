// routes/jobRoutes.js
import express from 'express';
import { createJob, getJobs } from '../controllers/employercompanydetailsController.js';

const router = express.Router();

router.post('/jobs', createJob);
router.get('/jobs', getJobs);

export default router;
