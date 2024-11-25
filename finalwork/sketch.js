// 最終課題を制作しよう グロ文ITのアイコン

function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(150);
  stroke(255);
  blendMode(HARD_LIGHT);

  fill(214,166,0);
  drawHexagon(305, height / 2, 38);

  let colors = [ // 色の配列
    color(27, 151, 58),
    color(232, 52, 24),
    color(0, 166, 217),
    color(250, 89, 0),
    color(151, 10, 49),
    color(236, 106, 6),
    color(220, 9, 123),
    color(245, 162, 11),
    color(219, 167, 79),
    color(64, 121, 54),
    color(0, 117, 186),
    color(84, 180, 49),
    color(0, 76, 136),
    color(2, 48, 103),
    color(228, 1, 30),
    color(214, 166, 0)
  ];

  for(let i = 0; i < 16; i++){
    let theta = TWO_PI * i / 18;
    let x = width / 2 + cos(theta) * 160;
    let y = height / 2 + sin(theta) * 160;
    fill(colors[i]);
    drawHexagon(x, y, 38);
  }

  stroke(120, 120, 255);
  fill(80, 140, 255);
  ellipse(width / 2, height / 40 * 12, 60);

  fill(80, 140, 255);
  rect(width / 40 * 17.5, height / 40 * 16, width / 40 * 5, height / 40 * 16)

  function drawHexagon(x, y, radius) { // ChatGPTを使用　正六角形を描く関数
    beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = TWO_PI * i / 6;
      let px = x + cos(angle) * radius;
      let py = y + sin(angle) * radius;
      vertex(px, py);
    }
    endShape(CLOSE);
  }
}