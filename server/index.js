const express = require("express");
const mongoose = require("mongoose");
const dbconnect = require("./config/database");
const router = require("./routes/route");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const File = require("./models/file");

require("dotenv").config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'https://task-todo-abcd-three.vercel.app',
        methods: ["POST", "GET", "DELETE"],
        credentials: true,
    }
});

console.log(process.env.DATABASE_URL);

io.on("connection", (socket) => {
    // Handle socket connections
});

async function watchforexpires() {
    const changeStream = File.watch();
    changeStream.on('change', async (change) => {
        if (change.operationType === 'delete') {
            io.emit('message', "Hello world");
        }
    });
}

watchforexpires();

app.use(express.json());
app.use(cors()); // Apply CORS globally
app.use(cookieparser());
app.use('/api', router);

app.get('/', (req, res) => {
    res.json("Hello world");
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server has started successfully at PORT ${PORT}`);
});

dbconnect();


