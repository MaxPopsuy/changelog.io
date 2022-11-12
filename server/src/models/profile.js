const { Schema, model } = require('mongoose');

const profile = new Schema(
  {
    
  },
  { versionKey: false, timestamps: true }
);

module.exports = model('Profile', profile);
