const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ======================
// GAME STATE
// ======================
let score = 0;
let lives = 3;
let gameOver = false;
let fireCooldown = 0;
let fireRate = 20; // lower = faster
let damage = 1;

// ======================
// PLAYER
// ======================
const player = {
  x: canvas.width / 2 - 20,
  y: canvas.height - 60,
  width: 40,
  height: 20,
  speed: 6
};

// ======================
// INPUT
// ======================
const keys = {};
document.addEventListener("keydown", e => {
  keys[e.key.toLowerCase()] = true;

  if (e.key.toLowerCase() === "q") {
    gameOver = true;
  }
});

document.addEventListener("keyup", e => {
  keys[e.key.toLowerCase()] = false;
});

// ======================
// PROJECTILES
// ======================
const bullets = [];
const enemyBullets = [];

// ======================
// ENEMIES (PICKLES)
// ======================
let enemies = [];
let wave = 1;

function spawnWave() {
  enemies = [];
  const rows = 3 + wave;
  const cols = 6;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      enemies.push({
        x: 80 + c * 70,
        y: 60 + r * 50,
        width: 30,
        height: 20,
        dx: wave,
        dy: 0,
        hp: 1
      });
    }
  }
}

spawnWave();

// ======================
// GAME LOOP
// ======================
function update() {
  if (gameOver) return;

  // Player movement
  if (keys["a"] && player.x > 0) player.x -= player.speed;
  if (keys["d"] && player.x < canvas.width - player.width) player.x += player.speed;

  // Shooting (rate-limited)
  if (keys[" "] && fireCooldown <= 0) {
    bullets.push({
      x: player.x + player.width / 2 - 2,
      y: player.y,
      width: 4,
      height: 10
    });
    fireCooldown = fireRate;
  }

  fireCooldown--;

  // Upgrade
  if (keys["p"] && score >= 100) {
    fireRate = Math.max(5, fireRate - 5);
    score -= 100;
  }

  // Update bullets
  bullets.forEach(b => (b.y -= 10));
  enemyBullets.forEach(b => (b.y += 6));

  // Enemy movement & shooting
  enemies.forEach(e => {
    e.x += e.dx;
    if (Math.random() < 0.002 * wave) {
      enemyBullets.push({
        x: e.x + e.width / 2,
        y: e.y + e.height,
        width: 4,
        height: 10
      });
    }
  });

  // Bounce enemies
  if (enemies.some(e => e.x < 0 || e.x > canvas.width - e.width)) {
    enemies.forEach(e => {
      e.dx *= -1;
      e.y += 10;
    });
  }

  // Collisions
  bullets.forEach((b, bi) => {
    enemies.forEach((e, ei) => {
      if (hit(b, e)) {
        bullets.splice(bi, 1);
        enemies.splice(ei, 1);
        score += 10;
      }
    });
  });

  enemyBullets.forEach((b, bi) => {
    if (hit(b, player)) {
      enemyBullets.splice(bi, 1);
      lives--;
      if (lives <= 0) gameOver = true;
    }
  });

  enemies.forEach(e => {
    if (hit(e, player)) {
      gameOver = true;
    }
  });

  // Next wave
  if (enemies.length === 0) {
    wave++;
    spawnWave();
  }
}

function hit(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

// ======================
// DRAW
// ======================
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Player
  ctx.fillStyle = "#00ff66";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Bullets
  ctx.fillStyle = "yellow";
  bullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

  ctx.fillStyle = "red";
  enemyBullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

  // Enemies
  ctx.fillStyle = "#00aa00";
  enemies.forEach(e => ctx.fillRect(e.x, e.y, e.width, e.height));

  // UI
  ctx.fillStyle = "#00ff66";
  ctx.fillText(`Score: ${score}`, 10, 20);
  ctx.fillText(`Lives: ${lives}`, 10, 40);
  ctx.fillText(`Wave: ${wave}`, 10, 60);

  if (gameOver) {
    ctx.font = "40px monospace";
    ctx.fillText("GAME OVER", 180, 400);
  }
}

// ======================
// LOOP
// ======================
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
