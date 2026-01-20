// controllers/analyze.controller.js
import { parseChat } from '../utils/parser.js';
import ChatAnalytics from '../models/ChatAnalytics.model.js';

export const analyzeChat = async (req, res) => {
    try {
        const parsed = parseChat(req.file.path);
        const record = await ChatAnalytics.create({
            graphData: parsed.graphData,
            active4DaysUsers: parsed.active4Days
        });


        res.json(record);
    } catch (err) {
        res.status(500).json({ error: 'Failed to analyze chat' });
    }
};