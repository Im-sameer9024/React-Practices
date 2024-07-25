const express = require('express');
const Route = express.Router();
const{createRSVP,getAttendList} = require("../controllers/rsvpEvent")

Route.post("/rsvp",createRSVP);

Route.get("/events/:eventId/attendees",getAttendList);

module.exports = Route;