const mongoose = require("mongoose");
const User = require("../model/user.model.js");
const EventSchema = new mongoose.Schema(
  {
    companyname: { type: String, required: true},
    jobtitle: { type: String, required: true },
    requiredskills: { type: String, required: true },
    budget: { type: String, required: true },
    hybrid: { type: String, required: true },
    location: { type: String, required: true },
    coninfo: { type: String, required: true },
    companylink: { type: String, required: true },
    Description: { type: String, required: true },
    Organizer: {type: String}
  }
);

module.exports = mongoose.model("recruiter", EventSchema);