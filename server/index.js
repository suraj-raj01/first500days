import express from "express";
import cors from "cors";
import connectDB from "./lib/db.js";
import analyzeRoute from "./routes/analyze.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
connectDB();

app.use(
    cors({
        origin: "https://first500days-cyan.vercel.app/",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
);

app.options("*", cors());
app.use(express.json());

app.use("/api/analyze", analyzeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
