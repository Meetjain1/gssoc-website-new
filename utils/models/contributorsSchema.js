import mongoose from "mongoose";

const contributorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Others'],
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  collegeOrOffice: {
    type: String,
    required: true,
    trim: true
  },
  referral: {
    type: String,
    trim: true
  },
  gitHubProfileUrl: {
    type: String,
    required: true,
    trim: true
  },
  linkedInProfileUrl: {
    type: String,
    required: true,
    trim: true
  },
  discordUsername: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  year: {
    type: String,
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
  },
  fieldOfStudy: {
    type: String,
    trim: true
  },
  referral: {
    type: String,
    trim: true
  },
  reason: {
    type: String,
    required:true,
    trim: true
  },
  partOfProgramBefore: {
    type: String,
    trim: true
  },
  resumeUpload: {
    type: String,
    trim: true
  },
  startupServices: {
    type: String,
    enum: ['', 'YES', 'NO'],
    default: ''
  },
}, { timestamps: true });

const Contributors = mongoose.models.contributors || mongoose.model("contributors", contributorsSchema);

export default Contributors;
