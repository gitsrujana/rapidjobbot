import Job from "../models/employercompanydetails.js";
import Joi from "joi";
import jwt from "jsonwebtoken";

const jobSchema = Joi.object({
  companyName: Joi.string().required(),
  contactPersonName: Joi.string().required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be between 10 and 15 digits.",
    }),
  email: Joi.string().email().required(),
  contactPersonProfile: Joi.string().required(),
  jobAddress: Joi.string().required(),
  sizeOfOrganization: Joi.string()
    .valid("1-10", "11-50", "51-200", "201-500", "500+")
    .required(),
  hiringFrequency: Joi.string()
    .valid("weekly", "monthly", "quarterly", "yearly")
    .required(),
  jobTimings: Joi.string().required(),
  interviewDetails: Joi.string().required(),
  termsAccepted: Joi.boolean().required(),
});

export const createJob = async (req, res) => {
  const { error } = jobSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const job = await Job.create(req.body);

    const token = jwt.sign(
      { jobId: job.id, email: job.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ message: "Job posted successfully", job, token });
  } catch (error) {
    console.error("Error creating job:", error);
    res
      .status(500)
      .json({ message: "Failed to post job", error: error.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch jobs", error: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch job", error: error.message });
  }
};

export const updateJob = async (req, res) => {
  const { error } = jobSchema.validate(req.body, { allowUnknown: true });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    await job.update(req.body);
    res.status(200).json({ message: "Job updated successfully", job });
  } catch (error) {
    console.error("Error updating job:", error);
    res
      .status(500)
      .json({ message: "Failed to update job", error: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    await job.destroy();
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res
      .status(500)
      .json({ message: "Failed to delete job", error: error.message });
  }
};
