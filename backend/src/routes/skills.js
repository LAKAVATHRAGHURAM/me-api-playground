import express from "express";
import db from "../db/database.js";

const router = express.Router();

// GET /api/skills/top
router.get("/top", (req, res) => {
  db.all(
    "SELECT skill_name, proficiency FROM skills ORDER BY proficiency DESC, skill_name ASC LIMIT 10",
    [],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows.map(r => ({ skill: r.skill_name, proficiency: r.proficiency })));
    }
  );
});

export default router;
