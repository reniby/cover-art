x = 0;
y = 1;
a = 250;
b = 250;
count = 1;
ugh = -1;
r = 1;
s = 1;
dec1 = 1;
dec2 = 1;

function setup() {
  createCanvas(500, 500); 
  
  stroke('black');
  strokeWeight(10);
  fill(220);
  rect(0, 0, 500, 500); 
  
}

function draw() {
  
  //print(dcount);
  //ellipse(dcount, dcount, 60, 60);
  noStroke();

  x += y;
  if (x >= 255)
    y = -0.2;
  if (x <= 0)
    y = 0.2;
  
  ugh1 = 1;
  ugh2 = 1;
  rr = random(1);
  sr = random(1);

  
  if (count >= random(100)|| count == 0) {
    w = random(12);
    z = random(12);
      r = (random(w) - w/2);
      s = (random(z) - z/2);
    ugh = ugh * -1;
  }
  
  if (a <= 0) {
    a = 1;
    r = 1;
  }
  else if (a >= 500) {
    a = 499;
    r = -1;
  }
  if (b <= 0) {
    b = 1;
    s = 1;
  }
  else if (b >= 500) {
    b = 499;
    s = -1;
  }
  
  if (r < 0)
    rr *= -1;
  if (s < 0)
    sr *= -1;

  
  a += (r + rr);
  b += (s + sr); 

  fill(x, 32, 69);
  ellipse(a, b, 10, 10);

  count = count + ugh;
}
