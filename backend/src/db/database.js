import path from "path";
import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, "../../database.sqlite");
const db = new sqlite3.Database(dbPath, err => {
  if (err) console.error("❌ Database connection error:", err.message);
  else console.log("✅ Connected to SQLite database.");
});

export default db;
