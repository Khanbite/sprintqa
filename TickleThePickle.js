const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startScreen = document.getElementById("startScreen");

let gameStarted = false;
let paused = false;

// ======================
// GAME STATE
// ======================
let score, lives, gameOver, fireCooldown, fireRate, wave;

// ======================
// PLAYER
// ======================
const player = {
  width: 40,
  height: 20,
  speed: 6,
  x: 0,
  y: 0
};

// ======================
// INPUT
// ======================
const keys = {};
document.addEventListener("keydown", e => {
  keys[e.key.toLowerCase()] = true;

  if (e.code === "Space") e.preventDefault();

  // Pause
  if (e.key === "Escape" && gameStarted && !gameOver) {
    paused = !paused;
  }

  // Restart
  if (e.key.toLowerCase() === "r" && gameOver) {
    resetGame();
  }
});

document.addEventListener("keyup", e => {
  keys[e.key.toLowerCase()] = false;
});

// ======================
// PROJECTILES
// ======================
let bullets = [];
let enemyBullets = [];

// ======================
// ENEMIES
// ======================
let enemies = [];

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
        hp: 1
      });
    }
  }
}

// ======================
// RESET GAME
// ======================
function resetGame() {
  score = 0;
  lives = 3;
  fireRate = 20;
  fireCooldown = 0;
  wave = 1;
  gameOver = false;
  paused = false;

  bullets = [];
  enemyBullets = [];

  player.x = canvas.width / 2 - player.width / 2;
  player.y = canvas.height - 60;

  spawnWave();
}

// ======================
// START GAME
// ======================
startScreen.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameStarted = true;
  resetGame();
  loop();
});

// ======================
// UPDATE
// ======================
function update() {
  if (!gameStarted || gameOver || paused) return;

  // Movement
  if (keys["a"] && player.x > 0) player.x -= player.speed;
  if (keys["d"] && player.x < canvas.width - player.width) player.x += player.speed;

  // Shooting
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

  // Upgrade (re-implemented)
  if (keys["p"] && score >= 100) {
    fireRate = Math.max(5, fireRate - 5);
    score -= 100;
    keys["p"] = false; // prevent holding
  }

  bullets.forEach(b => (b.y -= 10));
  enemyBullets.forEach(b => (b.y += 6));

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

  if (enemies.some(e => e.x < 0 || e.x > canvas.width - e.width)) {
    enemies.forEach(e => {
      e.dx *= -1;
      e.y += 10;
    });
  }

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

  // UI
  ctx.font = "16px monospace";
  ctx.fillStyle = "#00ff66";
  ctx.fillText(`Score: ${score}`, 10, 20);
  ctx.fillText(`Lives: ${lives}`, 10, 40);
  ctx.fillText(`Wave: ${wave}`, 10, 60);

  if (paused) {
    ctx.font = "30px monospace";
    ctx.textAlign = "center";
    ctx.fillText("PAUSED", canvas.width / 2, canvas.height / 2);
    ctx.textAlign = "left";
    return;
  }

  // Player
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Bullets
  ctx.fillStyle = "yellow";
  bullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

  ctx.fillStyle = "red";
  enemyBullets.forEach(b => ctx.fillRect(b.x, b.y, b.width, b.height));

  // Enemies
  ctx.fillStyle = "#00aa00";
  enemies.forEach(e => ctx.fillRect(e.x, e.y, e.width, e.height));

  if (gameOver) {
    ctx.font = "40px monospace";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
    ctx.font = "18px monospace";
    ctx.fillText("Press R to Restart", canvas.width / 2, canvas.height / 2 + 40);
    ctx.textAlign = "left";
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