const express = require("express")
const Route = express.Router()

const{signUp,login} = require("../controllers/userController")

Route.post("/signup",signUp)
Route.post("/login",login)

module.exports = Route;