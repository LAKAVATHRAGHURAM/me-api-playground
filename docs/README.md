# Me-API Playground

## 🚀 Goal
A simple API + frontend that exposes my profile (name, skills, projects, work).

## 📂 Architecture
- **Backend:** Node.js + Express
- **Database:** SQLite
- **Frontend:** HTML + JavaScript
- **Hosting:** Backend → Render/Railway, Frontend → Vercel/Netlify

## 🛠 Setup

### Backend
```bash
cd backend
npm install
sqlite3 meapi.db < schema.sql
sqlite3 meapi.db < seed.sql
npm run dev
```

#Host link
https://me-api-playground-2-951l.onrender.com/api/health

