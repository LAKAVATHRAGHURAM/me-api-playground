import express from "express";
import db from "../db/database.js";

const router = express.Router();

// GET /api/projects?skill=Python
router.get("/", (req, res) => {
  const { skill } = req.query;
  if (skill) {
    db.all(
      "SELECT id, title, description, links, skills_text FROM projects WHERE lower(skills_text) LIKE lower(?)",
      [`%${skill}%`],
      (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        rows.forEach(r => {
          try {
            r.links = JSON.parse(r.links || "[]");
          } catch {
            r.links = [];
          }
        });
        res.json(rows);
      }
    );
  } else {
    db.all("SELECT id, title, description, links, skills_text FROM projects", [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      rows.forEach(r => {
        try {
          r.links = JSON.parse(r.links || "[]");
        } catch {
          r.links = [];
        }
      });
      res.json(rows);
    });
  }
});

export default router;
