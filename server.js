const express = require('express');
const app = express();
const PORT = 3000;

let jobs = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/api/jobs', (req, res) => {
  const { company, role, status } = req.body;
  jobs.push({ company, role, status });
  res.status(201).json({ message: 'Job added' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});