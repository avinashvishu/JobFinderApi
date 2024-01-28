const job = require("../Model/job");

const createJob = async (req, res) => {
  try {
    const {
      companyName,
      logoUrl,
      position,
      salary,
      jobType,
      workModel,
      location,
      description,
      about,
      skills,
      info,
      createdBy,
    } = req.body;

    res.json({
      companyName,
      logoUrl,
      position,
      salary,
      jobType,
      workModel,
      location,
      description,
      about,
      skills,
      info,
      createdBy,
    });
  } catch (error) {}
};

module.exports = { createJob };
