// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require('cors')());

let alerts = [];
let idCounter = 1;

app.post('/alerts', (req, res) => {
  const { message, type } = req.body;
  if (!message) return res.status(400).send({ error: 'Missing message' });
  const alert = { id: idCounter++, message, type: type || 'info', created: new Date() };
  alerts.push(alert);
  res.status(201).send(alert);
});

app.get('/alerts', (req, res) => {
  res.send(alerts);
});

app.get('/alerts/:id', (req, res) => {
  const alert = alerts.find(a => a.id === parseInt(req.params.id));
  if (!alert) return res.status(404).send({ error: 'Alert not found' });
  res.send(alert);
});

app.delete('/alerts/:id', (req,
