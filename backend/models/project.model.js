const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectname: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  usersinvolved: [{
    type: String
  }],
// date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;