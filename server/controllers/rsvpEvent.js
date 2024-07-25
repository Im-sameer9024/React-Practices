const RSVP = require('../models/rsvpSchema');

exports.createRSVP = async (req, res) => {
  try {
    const { event, name, email, attending } = req.body;
    const newRSVP = new RSVP({ event, name, email, attending });
    const createdRSVP = await newRSVP.save();

    res.status(200).json({
      success: true,
      data: createdRSVP,
      message: 'RSVP created successfully'
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
};

exports.getAttendList = async(req,res) =>{
  try {
    const {eventId} = req.params
    const attendees = await RSVP.findById({event:eventId})

    res.status(200).json({
      success: true,
      data: attendees
    })
    
  } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      })
  }
}