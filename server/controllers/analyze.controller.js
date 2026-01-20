// controllers/analyze.controller.js
import { parseChat } from '../utils/parser.js';
import ChatAnalytics from '../models/ChatAnalytics.model.js';

export const analyzeChat = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "File is required" });
        }
        console.log("File received:", req.file?.originalname);
        console.log("File size:", req.file?.size);

        const parsed = parseChat(req.file.buffer);
        const record = await ChatAnalytics.create({
            graphData: parsed.graphData,
            active4DaysUsers: parsed.active4Days
        });


        res.json(record);
    } catch (err) {
        res.status(500).json({ error: 'Failed to analyze chat' });
    }
};