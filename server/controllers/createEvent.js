const Event = require("../models/eventSchema")

exports.createEvent = async (req, res) => {
  try {
    const { title,description,date,location,price } = req.body;
    let image_filename = req.file.filename
    const createdEvent = await Event.create({ title,description,date,location,price,image:image_filename});


    res.status(200).json({
      success: true,
      data: createdEvent,
      message: "Event created successfully",
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Event do not created" });
  }
}

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json({
      success: true,
      count: events.length,
      data: events
    });
  } catch (error) {
    res.status(400).json({ success: false, message:"not response " });
  }
}

exports.removeEvent = async(req,res) =>{
  try {

      const{id} = req.body
      const event = await Event.findById({_id:id})
      fs.unlink(`uploads/${event.image}`,()=>{})
  await Event.findByIdAndDelete({_id:id})

  res.status(200).json({
    success:true,
    message:"Event Removed"
  })
  } catch (error) {
      console.log(error)
      res.status(400).json({
          success:false,
          message:"Error"
      })

  }
}