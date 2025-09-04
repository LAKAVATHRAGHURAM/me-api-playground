import express from "express";
import db from "../db/database.js";

const router = express.Router();

// GET /api/work
router.get("/", (req, res) => {
  db.all(
    "SELECT role, company, start_date, end_date, description FROM work WHERE profile_id = 1",
    [],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
});

export default router;
