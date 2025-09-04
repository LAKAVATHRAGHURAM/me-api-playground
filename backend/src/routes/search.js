import express from "express";
import db from "../db/database.js";

const router = express.Router();

// GET /api/search?q=...
router.get("/", (req, res) => {
  const q = `%${req.query.q || ""}%`;

  db.all(
    "SELECT id, title, description, links, skills_text FROM projects WHERE title LIKE ? OR description LIKE ? OR skills_text LIKE ?",
    [q, q, q],
    (err, projects) => {
      if (err) return res.status(500).json({ error: err.message });

      projects.forEach(p => {
        try {
          p.links = JSON.parse(p.links || "[]");
        } catch {
          p.links = [];
        }
      });

      db.all("SELECT skill_name FROM skills WHERE skill_name LIKE ?", [q], (e2, skills) => {
        if (e2) return res.status(500).json({ error: e2.message });
        res.json({ projects, skills: skills.map(s => s.skill_name) });
      });
    }
  );
});

export default router;
