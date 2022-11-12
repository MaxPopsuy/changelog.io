const { Schema, model } = require('mongoose');

const user = new Schema(
  {
    
  },
  { versionKey: false, timestamps: true }
);

module.exports = model('User', user);
