const express = require('express');
const app = express();
require("dotenv").config()
const port = process.env.PORT
const cors = require('cors');
const dbConnect = require("./config/database.jsx")
const event = require("./routes/eventRoutes");
const rsvp = require("./routes/rsvpRoutes");
const user = require("./routes/userRoute")
const {Server} = require("socket.io")
dbConnect();

const server = require('http').createServer(app);


app.use('/images',express.static("uploads"))
app.use(express.json())
app.use(cors());

app.use("/api/v1",event)
app.use("/api/v1",rsvp)
app.use("/api/v1",user)

const io = new Server(server,{
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});



app.get('/', (req, res)=>{
  res.send('Welcome to the API server!');
})

app.listen(port,()=>{
 console.log(`Port is on ${port}`);
})