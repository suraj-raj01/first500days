import express from "express";
import cors from "cors";
import connectDB from "./lib/db.js";
import analyzeRoute from "./routes/analyze.route.js";
import dotenv from "dotenv";
import bodyparser from 'body-parser'
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send(`SERVER IS RUNNING ✅`)
})
app.use("/api/analyze", analyzeRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
