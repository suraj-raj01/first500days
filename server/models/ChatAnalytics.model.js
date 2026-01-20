// models/ChatAnalytics.model.js
import mongoose from 'mongoose';


const DailyStatsSchema = new mongoose.Schema({
day: String,
joined: Number,
active: Number
});


const ChatAnalyticsSchema = new mongoose.Schema({
uploadedAt: { type: Date, default: Date.now },
graphData: [DailyStatsSchema],
active4DaysUsers: [String]
});


export default mongoose.model('ChatAnalytics', ChatAnalyticsSchema);