import cors from "cors";
import express from "express";

import profileRoutes from "./routes/profile.js";
import projectsRoutes from "./routes/projects.js";
import searchRoutes from "./routes/search.js";
import skillsRoutes from "./routes/skills.js";
import workRoutes from "./routes/work.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/profile", profileRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/work", workRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ message: "API Playground Backend is running 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
