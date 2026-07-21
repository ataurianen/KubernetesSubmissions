require('dotenv').config();

const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic root endpoint - placeholder until todo functionality is added
app.get('/', (req, res) => {
    res.json({ message: 'todo-app is running' });
});

// Health check endpoint, useful for Kubernetes liveness/readiness probes
app.get('/healthz', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
});