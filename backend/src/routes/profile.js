import express from "express";
import db from "../db/database.js";

const router = express.Router();

// GET profile (with skills, projects, work)
router.get("/", (req, res) => {
  db.get("SELECT * FROM profile LIMIT 1", [], (err, profile) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!profile) return res.json({});

    db.all("SELECT skill_name, proficiency FROM skills WHERE profile_id = ?", [profile.id], (e2, skills) => {
      if (e2) return res.status(500).json({ error: e2.message });

      db.all("SELECT id, title, description, links, skills_text FROM projects WHERE profile_id = ?", [profile.id], (e3, projects) => {
        if (e3) return res.status(500).json({ error: e3.message });

        db.all("SELECT role, company, start_date, end_date, description FROM work WHERE profile_id = ?", [profile.id], (e4, work) => {
          if (e4) return res.status(500).json({ error: e4.message });

          const projectsParsed = projects.map(p => ({
            ...p,
            links: (() => {
              try {
                return JSON.parse(p.links || "[]");
              } catch {
                return [];
              }
            })(),
          }));

          res.json({
            name: profile.name,
            email: profile.email,
            education: profile.education,
            links: {
              github: profile.github,
              linkedin: profile.linkedin
            },
            achievement: profile.achievement,
            skills,
            projects: projectsParsed,
            work,
          });
        });
      });
    });
  });
});

// PUT profile (update or create)
router.put("/", (req, res) => {
  const { name, email, education, github, linkedin, portfolio } = req.body;

  db.get("SELECT id FROM profile LIMIT 1", [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });

    if (!row) {
      db.run(
        "INSERT INTO profile (name,email,education,github,linkedin,portfolio) VALUES (?,?,?,?,?,?)",
        [name, email, education, github, linkedin, achievement],
        function (e2) {
          if (e2) return res.status(500).json({ error: e2.message });
          return res.json({ status: "created", id: this.lastID });
        }
      );
    } else {
      db.run(
        "UPDATE profile SET name=COALESCE(?,name), email=COALESCE(?,email), education=COALESCE(?,education), github=COALESCE(?,github), linkedin=COALESCE(?,linkedin), achievement=COALESCE(?,achievement) WHERE id=?",
        [name, email, education, github, linkedin, portfolio, row.id],
        function (e3) {
          if (e3) return res.status(500).json({ error: e3.message });
          return res.json({ status: "updated" });
        }
      );
    }
  });
});

export default router;
