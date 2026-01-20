import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.route.js";
import connectDB from "./lib/db.js";

dotenv.config();

const app = express();

/* ✅ CORS (ALLOW VERCEL + LOCAL) */
app.use(
  cors({
    origin: [
      "https://first500days-cyan.vercel.app",
      "http://localhost:3000",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* ✅ BODY PARSING */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ✅ HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING ✅");
});

/* ✅ ROUTES */
app.use("/api/analyze", analyzeRoute);

/* ✅ DB CONNECT (NON-BLOCKING) */
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
