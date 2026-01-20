import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.route.js";
import connectDB from "./lib/db.js";

dotenv.config();

const app = express();

/* ✅ SAFE CORS */
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ✅ Health check */
app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING ✅");
});

/* ✅ Routes */
app.use("/api/analyze", analyzeRoute);

/* ✅ DB (NON-BLOCKING) */
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
