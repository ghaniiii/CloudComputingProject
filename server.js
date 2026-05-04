const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CI/CD Pipeline Live</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.container {
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
}

h1 {
  font-size: 3rem;
  background: linear-gradient(90deg, #00ffcc, #00c3ff);
  -webkit-background-clip: text;
  color: transparent;
  animation: glow 2s infinite alternate;
}

p {
  margin-top: 15px;
  font-size: 1.2rem;
  opacity: 0.85;
}

.badge {
  margin-top: 25px;
  padding: 12px 25px;
  border-radius: 50px;
  background: #00ffcc;
  color: #000;
  font-weight: bold;
  display: inline-block;
  animation: pulse 1.5s infinite;
}

.footer {
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.6;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(0,255,255,0.08);
  animation: float 10s infinite ease-in-out;
}

.circle:nth-child(1) {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
}

.circle:nth-child(2) {
  width: 300px;
  height: 300px;
  bottom: 10%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes fadeIn {
  from {opacity: 0; transform: translateY(25px);}
  to {opacity: 1; transform: translateY(0);}
}

@keyframes glow {
  from { text-shadow: 0 0 10px #00ffcc; }
  to { text-shadow: 0 0 25px #00c3ff; }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.12); }
  100% { transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}
</style>
</head>

<body>

<div class="circle"></div>
<div class="circle"></div>

<div class="container">
  <h1>🚀 CI/CD Pipeline Live</h1>
  <p>Your Node.js application is successfully deployed on AWS</p>
  <p><strong>Abdul Ghani Khan</strong></p>

  <div class="badge">Deployment Successful ✅</div>

  <div class="footer" id="time"></div>
</div>

<script>
  function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText =
      "Last deployed: " + now.toLocaleString();
  }
  updateTime();
</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});