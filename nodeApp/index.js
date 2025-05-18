const express = require('express');
const app = express();
const port = 3000;

app.get('/greet', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f0f4f8;
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .card {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    text-align: center;
                }
                h1 {
                    margin-bottom: 0.5rem;
                }
                p {
                    font-size: 1.2rem;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>👋 Hello from Rufina and Node.js!</h1>
                <p>Served fresh by your container on port 3000.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://0.0.0.0:${port}`);
});
