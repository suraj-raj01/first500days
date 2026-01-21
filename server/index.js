import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.route.js";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
await connectDB()

/* ✅ SAFE CORS */
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ✅ Health check */
app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING ✅");
  // res.end();
});

/* ✅ Routes */
app.use("/api/analyze", analyzeRoute);

/* ✅ DB (NON-BLOCKING) */

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
