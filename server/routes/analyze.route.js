// routes/analyze.route.js
import express from 'express';
import multer from 'multer';
import { analyzeChat } from '../controllers/analyze.controller.js';


const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});



router.post('/', upload.single('file'), analyzeChat);


export default router;