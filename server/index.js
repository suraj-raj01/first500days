// index.js
import express from 'express';
import cors from 'cors';
import connectDB from './lib/db.js';
import analyzeRoute from './routes/analyze.route.js';
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT;

const app = express();
connectDB();


app.use(cors());
app.use(express.json());


app.use('/api/analyze', analyzeRoute);


app.listen(PORT, () => console.log(`Server running on ${PORT}`));