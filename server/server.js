import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./models/index.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    req.method = req.method.toUpperCase();
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

app.use((req, res) => {
    res.status(404).json({success: false, message: "Route not found"});
})

// ab main server start kar raha hoon jo ke aysnc hai
const server = async() => {
    try{
        await db.sequelize.authenticate();
        console.log("Database connected successfully");

        await db.sequelize.sync({alter : true});
        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    }
    catch(error) {
        console.error("Unable to connect to the database:" , error);
    }
};

server();
