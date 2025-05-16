const express = require('express');
const app = express();
const port = 3000;

app.get('/greet', (req, res) => {
    res.send('Hello from Node.js!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://0.0.0.0:${port}`);
});
