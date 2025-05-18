from flask import Flask, render_template_string

app = Flask(__name__)

@app.route("/hello")
def hello():
    return render_template_string("""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Hello from Python</title>
        <style>
            body {
                font-family: 'Segoe UI', sans-serif;
                background: linear-gradient(to right, #d3cce3, #e9e4f0);
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
            }
            .card {
                background: white;
                padding: 2rem 3rem;
                border-radius: 1rem;
                box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                text-align: center;
            }
            h1 {
                color: #5e60ce;
                margin-bottom: 1rem;
            }
            p {
                color: #3a3a3a;
                font-size: 1.2rem;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>👩‍💻 Hello from Chyhohidze Rufina!</h1>
            <p>Python Flask app in Docker 🐳</p>
        </div>
    </body>
    </html>
    """)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
