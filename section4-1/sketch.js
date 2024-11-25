// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  average = sum / scores.length
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）

  largest = 0;
  for(let i = 0; i < scores.length; i++){
  if(scores[i] > largest){largest = scores[i];}  // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
  }

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
  if(scores[i] < smallest){smallest = scores[i];}  // BLANK[3]　ヒント：最小値とだいたい同じ
  }

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    if(scores[i] == largest){fill(255, 50, 50)}
    else if(scores[i] == smallest){fill(50, 50, 255)}
    else{fill(100, 100, 100);}// BLANK[4] ヒント: 条件分岐を使って色を変更します
    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }
  stroke(10, 170, 10)
  line(0, height-average * height / 100, width, height - average * height / 100);// BLANK[5] 平均点の線を引きます
  
  fill(0);
  textSize(10);
  text(`Ave.: ${average.toFixed(2)}`, width / 2, height - average * height / 100 - 10);//　平均線の上の文字
}