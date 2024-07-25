const express = require('express');
const Route = express.Router();
const{createEvent,getEvents,removeEvent} = require("../controllers/createEvent")

const multer = require("multer")

const storage = multer.diskStorage({
  destination:'uploads',
  filename:(req, file, cb) => {
    return cb(null,`${Date.now()}${file.originalname}`)
  }
})

const upload = multer({ storage })

Route.post("/add",upload.single("image"),createEvent);
Route.get("/list",getEvents);
Route.delete("/remove",removeEvent);


module.exports = Route;
