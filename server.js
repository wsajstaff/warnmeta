const express = require('express');
const app = express();
app.use(express.json());

let alerts = [];

app.post('/issue-alert', (req, res) => {
    const alert = { id: Date.now(), message: req.body.message };
    alerts.push(alert);
    res.json({ success: true, alert });
});

app.get('/alerts', (req, res) => {
    res.json(alerts);
});

app.listen(3000, () => console.log('API running on port 3000'));
