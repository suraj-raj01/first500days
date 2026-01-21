# First 500 Days – Chat Analytics App 📊

A full-stack MERN application that analyzes exported chat files (e.g. WhatsApp) and generates user activity insights such as daily active users, joined users, and engagement trends over the last 7 days.

---

## 🚀 Features

- 📂 Upload chat text files using a simple UI
- 📈 Visual analytics with responsive bar charts
- 👥 Daily Active Users tracking
- 🆕 Joined Users per day
- 🔁 Last 7 days analysis based on chat data
- 🧠 Identifies users active on 4 or more days
- ☁️ Deployed backend on **Render**
- ⚡ Deployed frontend on **Vercel**
- 🌐 Fully CORS-enabled for production use

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Chart.js / react-chartjs-2
- CSS (Responsive UI)

### Backend
- Node.js
- Express.js
- Multer (file uploads)
- MongoDB + Mongoose
- Day.js
- CORS

---

## 📁 Project Structure

```bash
first500days/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
│
├── server/ # Node.js backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── utils/
│ └── index.js
│
└── README.md

```


---

## ⚙️ Local Setup (Step-by-Step)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/suraj-raj01/first500days.git
cd first500days
```

### Backend Setup
```bash
cd server
npm install

.env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```