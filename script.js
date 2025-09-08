document.getElementById('jobForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const company = document.getElementById('company').value;
  const role = document.getElementById('role').value;
  const status = document.getElementById('status').value;

  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company, role, status })
  });

  if (res.ok) {
    loadJobs();
    e.target.reset();
  }
});

async function loadJobs() {
  const res = await fetch('/api/jobs');
  const jobs = await res.json();
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = '';

  jobs.forEach(job => {
    const div = document.createElement('div');
    div.className = 'job-card';
    div.innerHTML = `<strong>${job.company}</strong> - ${job.role} <br>Status: ${job.status}`;
    jobList.appendChild(div);
  });
}

window.onload = loadJobs;