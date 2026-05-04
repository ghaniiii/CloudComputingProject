const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>NOVA — CI/CD Pipeline Live</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
html, body { background: #050a14; color: #fff; overflow-x: hidden; scroll-behavior: smooth; }

/* Particle canvas */
#bg { position: fixed; inset: 0; z-index: 0; opacity: 0.6; }

/* Floating orbs */
.orb {
  position: fixed; border-radius: 50%; filter: blur(90px); opacity: 0.35; z-index: 0;
  pointer-events: none;
}
.orb1 { width: 500px; height: 500px; top: -150px; left: -150px;
  background: radial-gradient(circle, #00ffcc, transparent 70%);
  animation: float1 12s ease-in-out infinite; }
.orb2 { width: 600px; height: 600px; bottom: -200px; right: -200px;
  background: radial-gradient(circle, #ff00aa, transparent 70%);
  animation: float2 14s ease-in-out infinite; }
.orb3 { width: 400px; height: 400px; top: 40%; right: 20%;
  background: radial-gradient(circle, #00c3ff, transparent 70%);
  animation: float1 10s ease-in-out infinite reverse; }

@keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-40px) scale(1.15); } }
@keyframes float2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,50px) scale(1.1); } }

/* Nav */
nav {
  position: relative; z-index: 10; display: flex; justify-content: space-between;
  align-items: center; padding: 24px 40px; backdrop-filter: blur(8px);
}
.logo { font-size: 1.6rem; font-weight: 900; display: flex; align-items: center; gap: 8px; }
.logo span:first-child { display: inline-block; animation: spin 8s linear infinite; }
.logo span:last-child {
  background: linear-gradient(90deg, #00ffcc, #00c3ff);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
@keyframes spin { to { transform: rotate(360deg); } }

.nav-links { display: flex; gap: 32px; }
.nav-links a {
  color: #fff; text-decoration: none; opacity: 0.8; position: relative; font-size: 0.95rem;
  transition: opacity 0.3s;
}
.nav-links a::after {
  content: ''; position: absolute; left: 0; bottom: -4px; width: 100%; height: 2px;
  background: linear-gradient(90deg, #00ffcc, #00c3ff);
  transform: scaleX(0); transform-origin: right; transition: transform 0.3s;
}
.nav-links a:hover { opacity: 1; }
.nav-links a:hover::after { transform: scaleX(1); transform-origin: left; }
@media (max-width: 720px) { .nav-links { display: none; } }

.btn {
  padding: 12px 28px; border-radius: 50px; border: none; cursor: pointer;
  font-weight: 700; font-size: 0.95rem; transition: all 0.3s; text-decoration: none;
  display: inline-block;
}
.btn-primary {
  background: linear-gradient(90deg, #00ffcc, #00c3ff); color: #000;
  box-shadow: 0 0 30px rgba(0,255,204,0.4);
}
.btn-primary:hover { box-shadow: 0 0 60px rgba(0,255,204,0.7); transform: translateY(-2px); }
.btn-ghost {
  background: rgba(255,255,255,0.05); color: #fff;
  border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(10px);
}
.btn-ghost:hover { background: rgba(255,255,255,0.1); }

/* Hero */
.hero {
  position: relative; z-index: 10; min-height: 85vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center; padding: 40px 20px;
}
.badge {
  display: inline-block; padding: 6px 16px; border-radius: 50px;
  border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px); font-size: 0.8rem; margin-bottom: 24px;
  animation: fadeUp 1s 0.1s both;
}
.badge-dot {
  display: inline-block; width: 8px; height: 8px; border-radius: 50%;
  background: #00ffcc; margin-right: 8px; animation: pulse 1.5s infinite;
}
h1 {
  font-size: clamp(2.5rem, 7vw, 5.5rem); font-weight: 900; line-height: 1.05;
  max-width: 1000px; animation: fadeUp 1s 0.2s both;
}
.gradient-text {
  background: linear-gradient(90deg, #00ffcc, #00c3ff, #ff00aa);
  background-size: 200% auto; -webkit-background-clip: text; background-clip: text;
  color: transparent; animation: gradient 5s linear infinite;
}
@keyframes gradient { to { background-position: 200% center; } }

.subtitle {
  margin-top: 28px; font-size: 1.15rem; opacity: 0.7; max-width: 600px;
  animation: fadeUp 1s 0.4s both;
}
.cta { margin-top: 36px; display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;
  animation: fadeUp 1s 0.6s both; }

.stats {
  margin-top: 70px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
  width: 100%; max-width: 800px; animation: fadeUp 1s 0.8s both;
}
.stat {
  padding: 24px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05); backdrop-filter: blur(10px);
  animation: floatCard 4s ease-in-out infinite;
}
.stat:nth-child(2) { animation-delay: 0.5s; }
.stat:nth-child(3) { animation-delay: 1s; }
.stat-num {
  font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 900;
  background: linear-gradient(90deg, #00ffcc, #00c3ff);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.stat-label { font-size: 0.85rem; opacity: 0.6; margin-top: 4px; }

@keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.6; } }

/* Features */
.section { position: relative; z-index: 10; padding: 120px 20px; }
.container { max-width: 1200px; margin: 0 auto; }
.section h2 {
  font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900; text-align: center;
  line-height: 1.1;
}
.section h2 .muted { opacity: 0.4; }
.section .lead { text-align: center; opacity: 0.6; margin-top: 16px; }

.features {
  margin-top: 60px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.feature {
  padding: 32px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03); backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0; transform: translateY(60px);
}
.feature.visible { opacity: 1; transform: translateY(0); }
.feature:hover {
  transform: translateY(-8px); border-color: rgba(0,255,204,0.4);
  box-shadow: 0 20px 60px rgba(0,255,204,0.15);
}
.feature-icon {
  width: 56px; height: 56px; border-radius: 16px;
  background: linear-gradient(135deg, rgba(0,255,204,0.2), rgba(0,195,255,0.2));
  display: flex; align-items: center; justify-content: center; font-size: 1.8rem;
  margin-bottom: 20px; transition: transform 0.5s;
}
.feature:hover .feature-icon { transform: scale(1.15) rotate(8deg); }
.feature h3 { font-size: 1.25rem; margin-bottom: 8px; }
.feature p { opacity: 0.6; font-size: 0.95rem; line-height: 1.5; }

/* Marquee */
.marquee {
  position: relative; z-index: 10; overflow: hidden; padding: 32px 0;
  border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.02);
}
.marquee-track {
  display: flex; gap: 60px; white-space: nowrap; font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 900; opacity: 0.4; animation: marquee 25s linear infinite;
}
@keyframes marquee { to { transform: translateX(-50%); } }

/* CTA */
.cta-box {
  position: relative; max-width: 900px; margin: 0 auto; padding: 80px 40px;
  border-radius: 40px; border: 1px solid rgba(255,255,255,0.1);
  background: linear-gradient(135deg, rgba(0,255,204,0.1), rgba(255,0,170,0.1));
  backdrop-filter: blur(20px); text-align: center; overflow: hidden;
}
.cta-box::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(120deg, rgba(0,255,204,0.15), rgba(255,0,170,0.15), rgba(0,195,255,0.15));
  background-size: 200% 200%; animation: gradient-bg 8s ease infinite; z-index: -1;
}
@keyframes gradient-bg { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

footer {
  position: relative; z-index: 10; padding: 32px; text-align: center;
  font-size: 0.85rem; opacity: 0.5; border-top: 1px solid rgba(255,255,255,0.1);
}

.scroll-down {
  position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
  font-size: 1.5rem; opacity: 0.5; animation: bounce 2s infinite;
}
@keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(10px); } }
</style>
</head>
<body>
<canvas id="bg"></canvas>
<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="orb orb3"></div>

<nav>
  <div class="logo"><span>◆</span><span>NOVA</span></div>
  <div class="nav-links">
    <a href="#features">Features</a>
    <a href="#">Pricing</a>
    <a href="#">Docs</a>
    <a href="#">Contact</a>
  </div>
  <a href="#" class="btn btn-primary">Launch</a>
</nav>

=======
<section class="hero">
  <div class="badge"><span class="badge-dot"></span>Deployment Successful · CI/CD Live</div>
  <h1>Ship products at the <span class="gradient-text">speed of light</span></h1>
  <p class="subtitle">Your Node.js app is successfully deployed on AWS. Built, shipped, and scaled — beautifully.</p>
  <div class="cta">
    <a href="#" class="btn btn-primary">Get started →</a>
    <a href="#features" class="btn btn-ghost">▶ Watch demo</a>
  </div>
  <div class="stats">
    <div class="stat"><div class="stat-num">99.99%</div><div class="stat-label">Uptime</div></div>
    <div class="stat"><div class="stat-num">12ms</div><div class="stat-label">Latency</div></div>
    <div class="stat"><div class="stat-num">300+</div><div class="stat-label">Edge nodes</div></div>
  </div>
  <div class="scroll-down">↓</div>
</section>

<section class="section" id="features">
  <div class="container">
    <h2>Everything you need.<br><span class="muted">Nothing you don't.</span></h2>
    <p class="lead">Six powerful pillars. One unified platform.</p>
    <div class="features">
      <div class="feature"><div class="feature-icon">⚡</div><h3>Lightning Fast</h3><p>Built for speed with edge runtime and zero overhead.</p></div>
      <div class="feature"><div class="feature-icon">🛡️</div><h3>Secure by Default</h3><p>End-to-end encryption and hardened defaults.</p></div>
      <div class="feature"><div class="feature-icon">🚀</div><h3>Auto Deploy</h3><p>Push to main, ship to production. Zero friction.</p></div>
      <div class="feature"><div class="feature-icon">🎨</div><h3>Beautiful UI</h3><p>Crafted animations and pixel-perfect details.</p></div>
      <div class="feature"><div class="feature-icon">🌐</div><h3>Global Edge</h3><p>Served from 300+ locations worldwide.</p></div>
      <div class="feature"><div class="feature-icon">📊</div><h3>Real Analytics</h3><p>Live insights with millisecond precision.</p></div>
    </div>
  </div>
</section>

<div class="marquee">
  <div class="marquee-track">
    <span>BUILD ✦ SHIP ✦ SCALE ✦ REPEAT ✦ BUILD ✦ SHIP ✦ SCALE ✦ REPEAT ✦</span>
    <span>BUILD ✦ SHIP ✦ SCALE ✦ REPEAT ✦ BUILD ✦ SHIP ✦ SCALE ✦ REPEAT ✦</span>
  </div>
</div>

<section class="section">
  <div class="cta-box">
    <h2>Ready to <span class="gradient-text">fly?</span></h2>
    <p class="lead">Join 50,000+ teams already shipping faster with NOVA.</p>
    <div style="margin-top: 32px;"><a href="#" class="btn btn-primary">Start free trial →</a></div>
  </div>
</section>

<footer>Crafted with ♥ by Abdul Ghani Khan · © 2026 NOVA</footer>

<script>
// Particle network
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let w, h, particles;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * w, y: Math.random() * h,
  vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
  r: Math.random() * 2 + 1
}));

function draw() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,255,204,0.7)';
    ctx.fill();
  });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = 'rgba(0,195,255,' + (1 - dist / 130) + ')';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
draw();

// Scroll-trigger feature cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.feature').forEach(f => observer.observe(f));

// Mouse-reactive orbs
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 60;
  const y = (e.clientY / window.innerHeight - 0.5) * 60;
  document.querySelector('.orb1').style.transform = 'translate(' + x + 'px,' + y + 'px)';
  document.querySelector('.orb2').style.transform = 'translate(' + (-x) + 'px,' + (-y) + 'px)';
});
</script>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
