const mongoose = require('mongoose');

const RSVPSchema = new mongoose.Schema({
  event: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
   },
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  attending:{
    type:Boolean,
    required: true,
  }
});

module.exports = mongoose.model('RSVP', RSVPSchema);