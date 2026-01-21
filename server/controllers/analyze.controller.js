// controllers/analyze.controller.js
import { parseChat } from '../utils/parser.js';
import ChatAnalytics from '../models/ChatAnalytics.model.js';

export const analyzeChat = async (req, res) => {
  try {
    console.log("Analyze hit");

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // const parsed = parseChat(req.file.buffer);

    // console.log("Parsed data:", parsed);

    const record = await ChatAnalytics.create({
      graphData: parsed.graphData,
      active4DaysUsers: parsed.active4Days,
    });

    res.status(200).json(record);
  } catch (err) {
    console.error("🔥 Analyze error:", err);
    res.status(500).json({
      error: err.message || "Analyze failed",
    });
  }
};
