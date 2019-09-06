var vals = [];
var rounds = 0;
var comp = 0;
var totalcomps= 0;
var type = "bub";
function setup(){
  createCanvas(800,400);
  for(let i = 0; i < 80; i++){
    vals[i]= random(400);
  }
}
function draw(){
  if(type == "bub"){
    Bubble();
  }else if(type == "selection"){
    Sect();
  }else if(type == "sert"){
    isert();
  }else if(type == "merg"){
    merg();
  }
}
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function zoop(){
  for(let i = 0; i < vals.length; i ++){
    let c = color(0,255,0);
    fill(c)
    rect(i * 10, 400 - vals[i], 10, vals[i]);
  }
}
function Bubble(){
  background(0)
  fill(255)
  textSize(32);
  text("Comparisons " + totalcomps, 50, 50);
  for(let i = 0; i < 80; i++){
    let syntax = i + 1;
    if(i == comp || i == comp + 1 && i < comp - rounds){
      if(vals[comp] > vals[comp+1]){
        swap(vals, comp, comp+1);
        let c = color(0, 0,255);
        fill(c);
        rect(i * 10, 400 - vals[i], 10, vals[i]);
        rect(syntax * 10, 400 - vals[syntax], 10, vals[syntax]);
      }else{
        let c = color(255, 0,0);
        fill(c);
        rect(i * 10, 400 - vals[i], 10, vals[i]);
        rect(syntax * 10, 400 - vals[syntax], 10, vals[syntax]);
      }
    }else{
      let c = color(255);
      fill(c)
      rect(i * 10, 400 - vals[i], 10, vals[i]);
    }
  }
  if(comp <= 80 - rounds){
    comp++;
  }else{
    comp = 0;
    rounds++;
  }
  if(rounds == 80){
    console.log("finished");
    console.log(totalcomps);
    zoop();
    noLoop();
  }else{
    totalcomps++;
  }
}

function Sect(){
  background(0);
  fill(255)
  textSize(32);
  text("Comparisons " + totalcomps, 50, 50);
  for(let i = 0; i < vals.length; i++){
    let c = color(255);
    fill(c);
    rect(i * 10, 400 - vals[i], 10, vals[i]);
  }
  let texas = 0;
  let po = 0;
  for(let i = 0; i < vals.length - rounds; i++){
    totalcomps++;
    if(vals[i] >= texas){
      texas = vals[i];
      po = i;
    }
  }
  for(let i = po; i < vals.length - rounds; i++){
    vals[i] = vals[i + 1];
  }
  vals[vals.length - rounds] = texas;
  rounds++;
}

function isert(){
  if(rounds<vals.length){
    let temp = vals[rounds];
    let j = rounds - 1;
    while (j >= 0 && vals[j] > temp) {
      totalcomps++;
      vals[j + 1] = vals[j];
      j--;
    }
    vals[j + 1] = temp;
    rounds++;
  }
  background(0);
  fill(255)
  textSize(32);
  text("Comparisons " + totalcomps, 50, 50);
  for(let i = 0; i < vals.length; i++){
    let c = color(255);
    fill(c);
    rect(i * 10, 400 - vals[i], 10, vals[i]);
  }
}
var depth = 1;
function merg(){
  background(0);
  vals = mergeSort(vals, depth);
  depth++;
  for (i = 0; i < vals.length; i++) {
    let col = color(255);
    fill(col);
    rect(i * 10, 400 - vals[i], 10, vals[i]);
  }
  if (depth > 10){
    //noLoop();
  }
}

function mergeSort(a, d) {
  if (a.length <= 1) {
    return a;
  }
  d--;
  if (d < 1){
    return a;
  }
  var mid = Math.round((a.length / 2));
  var left = a.slice(0, mid);
  var right = a.slice(mid);
  return merge(mergeSort(left,d), mergeSort(right, d));
}

function merge(left, right) {
  sorted = [];
  while (left && left.length > 0 && right && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    }else {
    sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}

function buttonPushed(a){
  vals = [];
  rounds = 0;
  comp = 0;
  totalcomps= 0;
  depth = 1;
  for(let i = 0; i < 80; i++){
    vals[i]= random(400);
  }
  switch(a){
    case '1':
      type = 'bub';
      break;
    case '2':
      type = 'selection';
      break;
    case '3':
      type = 'sert';
      break;
    case '4':
      type = 'merg';
      break;
  }
}
