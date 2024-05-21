const JobModel = require("../models/jobs");

const createJob = async (req, res) => {
  try {
    const jobObj = req.body;
    const newJob = new JobModel(jobObj);
    const newlySavedJob = await newJob.save();
    res.json({
      success: true,
      message: "Job created successfully",
      jobId: newlySavedJob._id,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const listJob = async (req, res) => {
  try {
    const { minSalary, maxSalary } = req.query;
    const query = {};
    if (minSalary) query.salary = { ...query.salary, $gte: minSalary };
    if (maxSalary) query.salary = { ...query.salary, $lte: maxSalary };

    const jobsList = await JobModel.find(query);
    res.json({
      success: true,
      message: "List job api",
      results: jobsList,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const editJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    await JobModel.findByIdAndUpdate(jobId, req.body);
    res.json({
      success: true,
      message: "Job edited successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    await JobModel.findByIdAndDelete(jobId);
    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const jobController = {
  createJob,
  listJob,
  editJob,
  deleteJob,
};

module.exports = jobController;
