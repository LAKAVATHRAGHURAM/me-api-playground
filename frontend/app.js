const API = "http://localhost:5000/api";

async function loadProfile() {
  const res = await fetch(`${API}/profile`);
  const data = await res.json();
  document.getElementById("profile").innerHTML = `
    <h2>Profile</h2>
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Education:</b> ${data.education}</p>
    <p><b>Links:</b> 
      <a href="${data.links.github}" target="_blank">GitHub</a> | 
      <a href="${data.links.linkedin}" target="_blank">LinkedIn</a> 
    </p>
    <p><b>Achievement:</b> ${data.achievement}</p>
  `;
}

async function loadSkills() {
  const res = await fetch(`${API}/skills/top`);
  const data = await res.json();
  document.getElementById("skills").innerHTML = `
    <h2>Top Skills</h2>
    <ul>${data.map(s => `<li>${s.skill} (${s.proficiency}%)</li>`).join("")}</ul>
  `;
}

async function loadProjects() {
  const res = await fetch(`${API}/projects`);
  const data = await res.json();
  document.getElementById("projects").innerHTML = `
    <h2>Projects</h2>
    <ul>
      ${data.map(p => `<li><b>${p.title}</b>: ${p.description} — ${p.links.length ? `<a href="${p.links[0]}" target="_blank">Repo</a>` : ""}</li>`).join("")}
    </ul>
  `;
}

async function loadWork() {
  const res = await fetch(`${API}/work`);
  const data = await res.json();
  document.getElementById("work").innerHTML = `
    <h2>Work Experience</h2>
    <ul>
      ${data.map(w => `<li><b>${w.role}</b> @ ${w.company} (${w.start_date} – ${w.end_date}): ${w.description}</li>`).join("")}
    </ul>
  `;
}

async function search() {
  const q = document.getElementById("searchBox").value;
  const res = await fetch(`${API}/search?q=${q}`);
  const data = await res.json();
  document.getElementById("searchResults").innerHTML = `
    <h2>Search Results</h2>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;
}

loadProfile();
loadSkills();
loadProjects();
loadWork();
