import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import db from "../db/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function runSqlFile(filePath) {
  const sql = fs.readFileSync(filePath, "utf8");
  return new Promise((resolve, reject) => {
    db.exec(sql, (err) => (err ? reject(err) : resolve()));
  });
}

(async () => {
  try {
    const schemaPath = path.resolve(__dirname, "../../schema.sql");
    const seedPath = path.resolve(__dirname, "../../seed.sql");

    await runSqlFile(schemaPath);
    await runSqlFile(seedPath);

    console.log("🌱 DB schema & seed applied successfully.");
    process.exit(0);
  } catch (e) {
    console.error("❌ Seed error:", e.message);
    process.exit(1);
  }
})();
