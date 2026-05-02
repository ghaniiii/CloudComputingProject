const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
        <title>DevOps AWS Demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="bg-dark text-white text-center">
        <div class="container mt-5">
            <h1 class="text-success">🚀 CI/CD Pipeline Active</h1>
            <p class="lead">Node.js App deployed via AWS</p>
            <p>Version 1</p>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});